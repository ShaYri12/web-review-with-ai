import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us22", // This is derived from your API key
});

export async function POST(request: Request) {
  const { firstName, lastName, email, message } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

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

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Error subscribing to the newsletter" },
      { status: 500 }
    );
  }
}
