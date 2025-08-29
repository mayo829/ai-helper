"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Check, Star, Users, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Simple, <span className="text-white">Transparent</span> Pricing
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Choose the plan that fits your workflow.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Early Access Card */}
          <div className="relative group animate-fade-in">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-hero rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            
            <div className="relative glass-effect rounded-2xl p-8 md:p-12 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                <span className="text-sm font-medium text-orange-400">🚀 Early Access</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Join the Waitlist
              </h3>
              
              <p className="text-white/70 mb-8 leading-relaxed">
                Be among the first to experience isba's revolutionary AI assistance. 
                Secure your spot and help shape the future of AI-powered productivity.
              </p>

              {/* Price */}
              <div className="flex items-center justify-center mb-8">
                <span className="text-4xl md:text-5xl font-bold text-white">$1.99</span>
                <span className="text-white/70 ml-2">to join waitlist</span>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
                {[
                  'Priority access to isba beta',
                  'Exclusive early-adopter pricing',
                  'Direct feedback channel to our team',
                  'Special launch bonuses and credits',
                  'Community access with other early users'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-subtle flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-white/70">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Link href="/waitlist">
                  <Button size="lg" className="w-full btn-hero py-4 text-lg">
                    Join Waitlist for $1.99
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full btn-ghost py-4 text-lg">
                  Learn More About Plans
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-sm text-white/70 mb-2">
                  Trusted by forward-thinking professionals
                </p>
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-accent opacity-60"></div>
                  ))}
                  <span className="text-sm text-white/70 ml-2">1000+ joined</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;