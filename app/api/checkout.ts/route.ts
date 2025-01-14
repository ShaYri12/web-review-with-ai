import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia", // Make sure you're using the correct Stripe API version
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { amount, currency, productName, email } = req.body;

      if (!amount || !currency || !productName || !email) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Create a Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency,
              product_data: {
                name: productName,
              },
              unit_amount: amount,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/order-confirmed?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
        customer_email: email,
      });

      return res.status(200).json({ sessionId: session.id });
    } catch (error) {
      console.error("Error creating Stripe session:", error);
      return res.status(500).json({
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
