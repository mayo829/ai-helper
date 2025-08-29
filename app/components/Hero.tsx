"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Users } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="hero-section relative overflow-hidden pt-24 min-h-screen flex flex-col">
      {/* Background */}
      {/* <div className="absolute inset-0 bg-gradient-circular-hero animate-fade-in opacity-80"></div> */}
      
      {/* Text Section (constrained) */}
      <div className="container-width section-padding relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2 animation-delay-200">
            {/* <span className="text-white">Enhance Any Workflow </span>
            <span className="text-yellow-300">with isba</span> */}
            <span className="text-white">No input or screenshots.</span>
            <span className="text-yellow-300"> isba </span>
            <span className="text-white">simply knows.</span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-sm text-white/80 max-w-3xl mx-auto mb-3 leading-relaxed animation-delay-400">
            An AI co-pilot that helps you get things done without the hassle of manual inputs
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-2 animation-delay-600">
            <Link href="/waitlist">
              <Button size="sm" variant="outline" className="btn-ghost text-[11px] px-4 py-1">
                Join the Waitlist
                <ArrowRight className="ml-1 w-2 h-2" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="sm" variant="outline" className="btn-ghost text-[11px] px-4 py-1">
                <Play className="mr-1 w-2 h-2" />
                See Demo
              </Button>
            </Link>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-2 py-1 rounded-full bg-white/10 border border-white/20 hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
            <Users className="w-3 h-3 mr-1 text-white" />
            <span className="text-xs font-medium text-white">1000+ people have joined</span>
          </div>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="glass-effect w-full rounded-2xl p-8 bg-card/50 border border-border/50 shadow-lg hover:shadow-glow transition-all duration-500 group">
          <div className="bg-gradient-to-br from-surface to-accent-subtle rounded-xl p-6 space-y-4 group-hover:from-accent-subtle group-hover:to-surface transition-all duration-500">
            
            {/* Mock AI Interface */}
            <div className="flex items-center space-x-3 pb-4 border-b border-border">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                <div className="w-3 h-3 bg-primary-foreground rounded-full animate-pulse"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">isba</p>
                <p className="text-xs text-muted-foreground">Connected to your screen</p>
              </div>
              <div className="ml-auto">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-sm shadow-emerald-500/50"></div>
              </div>
            </div>
            
            {/* Mock Suggestions */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-accent-subtle to-accent-light flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">
                    I notice you're writing an email. Would you like me to:
                  </p>
                  <div className="mt-2 space-y-1">
                    <div className="text-xs text-white bg-gradient-to-r from-orange-500 to-red-600 px-2 py-1 rounded inline-block mr-2 shadow-sm">
                      ✨ Improve tone
                    </div>
                    <div className="text-xs text-white bg-gradient-to-r from-pink-500 to-purple-600 px-2 py-1 rounded inline-block mr-2 shadow-sm">
                      📝 Fix grammar
                    </div>
                    <div className="text-xs text-white bg-gradient-to-r from-yellow-500 to-orange-600 px-2 py-1 rounded inline-block shadow-sm">
                      🎯 Suggest subject
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
