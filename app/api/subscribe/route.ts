import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";

// Configure Mailchimp with the API Key and server prefix
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: "us22", // Make sure to use the correct Mailchimp server prefix here
});

export async function POST(request: Request) {
  const { firstName, lastName, email, message, consent } = await request.json();

  console.log("Received request:", {
    firstName,
    lastName,
    email,
    message,
    consent,
  });

  // Check if email is provided
  if (!email) {
    console.error("Email is required");
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    // Add subscriber to Mailchimp list
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

    console.log("Subscription successful:", response);

    // Respond with success message
    return NextResponse.json({
      success: true,
      message: "Subscribed successfully",
    });
  } catch (error: any) {
    console.error("Mailchimp subscription error:", error); // Log error
    return NextResponse.json(
      { error: error.message || "Error subscribing to the newsletter" },
      { status: 500 }
    );
  }
}
