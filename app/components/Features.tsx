"use client";

import { Eye, Layers, Zap, Shield, Brain, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const Features = () => {
  const features = [
    {
      icon: Eye,
      title: 'Smart Screen Awareness',
      description: 'isba watches your screen contextually (with permission) to understand what you\'re working on—no need for switching apps or prompts.',
    },
    {
      icon: Layers,
      title: 'Multi-Domain Assistance',
      description: 'From writing code to drafting emails, creating documents, or analyzing spreadsheets—isba\'s got you covered.',
    },
    {
      icon: Zap,
      title: 'Autonomous Task Execution',
      description: 'Assign tasks, or let isba detect friction points and offer to complete steps for you—automatically or with a click.',
    },
    {
      icon: Shield,
      title: 'Private & Secure by Design',
      description: 'All screen data is processed locally or securely encrypted. You\'re always in control.',
    },
    {
      icon: Brain,
      title: 'Always Learning, Always Relevant',
      description: 'isba improves as it observes your workflows—tailoring assistance to how you actually work.',
    },
    {
      icon: TrendingUp,
      title: 'Seamless Suggestions, Not Interruptions',
      description: 'isba provides timely, subtle nudges—not intrusive popups. Stay focused while staying assisted.',
    },
  ];

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What <span className="text-white">isba</span> Can Do
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            isba adapts to your workflow in real time—just like a smart teammate who sees what you're doing and jumps in to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group feature-card-colorful relative overflow-hidden p-6 rounded-xl bg-card border border-border card-hover animate-fade-in"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Colorful background gradient */}
                              <div className="feature-gradient absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-subtle mb-4 group-hover:bg-gradient-primary transition-all duration-500 group-hover:scale-110">
                  <feature.icon className="w-6 h-6 text-accent group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 transition-all duration-500">
                  {feature.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/demo">
            <button className="btn-hero px-8 py-3 rounded-xl font-medium transition-all hover:scale-105">
              See isba in Action
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;