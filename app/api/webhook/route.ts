import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

// Initialize Stripe & Supabase
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2025-08-27" });
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const POST = async (req: Request) => {
  const sig = req.headers.get("stripe-signature")!;
  const buf = await req.arrayBuffer();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_email!;
    const name = session.metadata?.name!;

    // Check if user already exists (idempotency)
    const { data: existingUser } = await supabase
      .from("waitlist_users")
      .select("*")
      .eq("email", email)
      .single();

    if (!existingUser) {
      // Insert user into Supabase
      const { error } = await supabase.from("waitlist_users").insert([
        { name, email, created_at: new Date() },
      ]);

      if (error) {
        console.error("Supabase insert error:", error);
      } else {
        // Only send email if insert succeeded
        await sendConfirmationEmail(email, name);
      }
    } else {
      console.log(`User ${email} already exists, skipping insert/email.`);
    }
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
};

// Example email sending function
async function sendConfirmationEmail(email: string, name: string) {
  // Integrate with your email provider (SendGrid, Postmark, etc.)
  console.log(`Sending confirmation email to ${name} <${email}>`);
  // await emailClient.send({ to: email, subject: ..., body: ... });
}