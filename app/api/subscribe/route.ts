import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import nodemailer from "nodemailer";

// Configure Mailchimp with the API Key and server prefix
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: "us22", // Make sure to use the correct Mailchimp server prefix here
});

// Configure nodemailer for sending email
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587, // Use 587 for TLS
  secure: true, // Set to false for TLS
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

  // Check if email is provided
  if (!email) {
    console.error("Email is required");
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    // Always send form data to polygonalresearchllc@gmail.com
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "polygonalresearchllc@gmail.com", // Changed back to the original email
      subject: "New Form Submission",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
    };
    await transporter.sendMail(mailOptions);

    // If user consents, send the data to Mailchimp
    if (sendToMailchimp) {
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
    }

    // Respond with success message
    return NextResponse.json({
      success: true,
      message: "Form submitted successfully!",
    });
  } catch (error: any) {
    console.error("Error processing form:", error); // Log error
    return NextResponse.json(
      { error: error.message || "Error submitting the form" },
      { status: 500 }
    );
  }
}
