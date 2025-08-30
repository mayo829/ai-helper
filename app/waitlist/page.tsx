"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageHeader from '@/components/PageHeader'
import CheckoutButton from "@/components/CheckoutButton";
import { ArrowLeft, Star, Users, Zap, Shield } from "lucide-react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const benefits = [
    {
      icon: Star,
      title: "Priority Access",
      description: "Be the first to experience isba when we launch",
    },
    {
      icon: Users,
      title: "Exclusive Community",
      description: "Connect with other early adopters and power users",
    },
    {
      icon: Zap,
      title: "Special Pricing",
      description: "Lock in exclusive early-adopter pricing and bonuses",
    },
    {
      icon: Shield,
      title: "Direct Feedback Channel",
      description: "Shape the future of isba with direct access to our team",
    },
  ];
  

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <PageHeader title="isba.ai" showBackLink={true} backHref="/" /> 

      {/* Main Content */}
      <main className="section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-subtle border border-accent/20 mb-6 animate-fade-in">
                <Users className="w-4 h-4 mr-2 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Join 1000+ professionals waiting
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in animation-delay-200">
                Join the <span className="text-gradient">isba</span> Waitlist
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in animation-delay-400">
                Secure your spot for early access to the AI co-pilot that will
                transform how you work. Limited spots available for our beta
                launch.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Waitlist Form */}
              <div className="animate-fade-in animation-delay-600">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-hero rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <div className="relative glass-effect rounded-2xl p-8 bg-card/80">
                    <div className="text-center mb-8">
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-4xl font-bold text-gradient">
                          $1.99
                        </span>
                        <span className="text-muted-foreground ml-2">
                          to secure your spot
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Refundable upon launch. Shows commitment and helps us
                        prepare for demand.
                      </p>
                    </div>

                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Full Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full"
                        />
                        {!isValidEmail(email) && email.length > 0 && (
                          <div className="mt-1 text-sm text-red-500 bg-red-50 p-2 rounded">
                            Please enter a valid email address
                          </div>
                        )}
                      </div>

                      <CheckoutButton name={name} email={email} />
                    </form>

                    <div className="mt-6 pt-6 border-t border-border text-center">
                      <p className="text-xs text-muted-foreground">
                        By joining, you agree to our terms and privacy policy.
                        Cancel anytime before launch for full refund.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-6 animate-fade-in animation-delay-800">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  What You Get as an Early Member
                </h2>

                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-start space-x-4 p-4 rounded-xl glass-effect card-hover"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Trust Indicators */}
                <div className="glass-effect rounded-xl p-6 mt-8">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 rounded-full bg-accent mr-1"
                        ></div>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      Early Access Program
                    </span>
                  </div>
                  <p className="text-center text-sm text-muted-foreground">
                    Join professionals from Google, Microsoft, and leading
                    startups who are already waiting for isba.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Waitlist;
