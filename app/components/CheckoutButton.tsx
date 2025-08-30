"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CheckoutButtonProps {
  name: string;
  email: string;
  amount?: number; // in cents, default $1.99 = 199
}

export default function CheckoutButton({ name, email, amount = 199 }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!name || !email) {
      alert("Please enter your name and email.");
      return;
    }

    setLoading(true);

    try {
      // Call your API to create a Stripe Checkout session
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, amount }),
      });

      const data = await res.json();

      if (data.sessionId) {
        const stripe = await stripePromise;
        // Open Stripe Checkout modal
        await stripe!.redirectToCheckout({ sessionId: data.sessionId });
      } else {
        console.error("No sessionId returned from server", data);
        alert("Failed to initiate checkout. Please try again.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Something went wrong during checkout.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={loading}
      className="w-full btn-hero py-4 text-lg mt-6"
    >
      {loading ? "Opening Checkout..." : "Secure My Spot for $1.99"}
    </button>
  );
}
