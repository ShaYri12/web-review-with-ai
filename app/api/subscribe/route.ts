import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import nodemailer from "nodemailer";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: "us22",
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true, // Use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  const { firstName, lastName, email, message, consent, sendToMailchimp } =
    await request.json();

  console.log("Received request:", {
    firstName,
    lastName,
    email,
    message,
    consent,
    sendToMailchimp,
  });

  if (!email) {
    console.error("Email is required");
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "polygonalresearchllc@gmail.com",
      subject: "New Form Submission",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
    };
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    let mailchimpStatus = "not_subscribed";

    // Handle Mailchimp subscription
    if (sendToMailchimp) {
      try {
        const response = await mailchimp.lists.addListMember(
          process.env.MAILCHIMP_AUDIENCE_ID!,
          {
            email_address: email,
            status: "subscribed",
            merge_fields: {
              FNAME: firstName,
              LNAME: lastName,
              MESSAGE: message,
            },
          }
        );
        console.log("Mailchimp subscription successful:", response);
        mailchimpStatus = "subscribed";
      } catch (mailchimpError: any) {
        console.error(
          "Mailchimp error:",
          JSON.stringify(mailchimpError, null, 2)
        );

        if (mailchimpError.status === 400) {
          if (mailchimpError.response && mailchimpError.response.text) {
            try {
              const errorBody = JSON.parse(mailchimpError.response.text);
              console.log("Mailchimp error details:", errorBody);

              if (errorBody.title === "Member Exists") {
                console.log("Email already subscribed to Mailchimp");
                mailchimpStatus = "already_subscribed";
              } else if (errorBody.title === "Invalid Resource") {
                console.log("Invalid Mailchimp resource:", errorBody.detail);
                return NextResponse.json(
                  { error: "Invalid email address" },
                  { status: 400 }
                );
              } else {
                console.log(
                  "Unexpected Mailchimp error:",
                  errorBody.title,
                  errorBody.detail
                );
                return NextResponse.json(
                  { error: "Error subscribing to newsletter" },
                  { status: 400 }
                );
              }
            } catch (parseError) {
              console.error(
                "Error parsing Mailchimp error response:",
                parseError
              );
              return NextResponse.json(
                { error: "Error processing Mailchimp response" },
                { status: 500 }
              );
            }
          } else {
            console.log("Unexpected Mailchimp error structure");
            return NextResponse.json(
              { error: "Error subscribing to newsletter" },
              { status: 400 }
            );
          }
        } else {
          console.log("Non-400 Mailchimp error");
          throw mailchimpError; // Re-throw if it's a different error
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully!",
      mailchimpStatus,
    });
  } catch (error: any) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { error: error.message || "Error submitting the form" },
      { status: 500 }
    );
  }
}
