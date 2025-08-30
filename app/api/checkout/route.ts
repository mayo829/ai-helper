// app/api/checkout/route.ts
import Stripe from "stripe";
import { NextResponse } from "next/server";
import crypto from "crypto";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function POST(req: Request) {
  try {
    const { name, email, amount } = await req.json();

    console.log("Creating Stripe session:", { name, email, amount });
    const confirmationCode = crypto.randomBytes(4).toString("hex").toUpperCase();

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: { name: "isba Early Access" },
              unit_amount: 199, // $1.99
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        customer_email: email, // from frontend
        metadata: {
            confirmation_code: confirmationCode,
            email: email,
            name: name,
        },
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });

    console.log("Stripe session created:", session.id);

    // MUST return sessionId
    return NextResponse.json({ sessionId: session.id });
  } catch (err: any) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
