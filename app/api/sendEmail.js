import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, message, consent } = req.body;

    // Nodemailer transporter configuration
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service (e.g., Gmail, Outlook, etc.)
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "sharjeelbaloch345@gmail.com",
      subject: "New Form Submission",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);

      // Optional: Send email to Mailchimp if consent is given
      if (consent) {
        const mailchimpResponse = await fetch(
          `https://<dc>.api.mailchimp.com/3.0/lists/<list-id>/members`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
            },
            body: JSON.stringify({
              email_address: email,
              status: "subscribed",
            }),
          }
        );

        if (!mailchimpResponse.ok) {
          throw new Error("Failed to subscribe to Mailchimp.");
        }
      }

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
