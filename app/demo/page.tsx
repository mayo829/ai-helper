"use client";

import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader'
import { ArrowLeft, Play, Monitor, Code, Mail, FileText } from 'lucide-react';
import Link from 'next/link';

const Demo = () => {
  const demoScenarios = [
    {
      icon: Code,
      title: 'Code Assistance',
      description: 'Watch isba detect coding patterns and suggest improvements',
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: Mail,
      title: 'Email Management',
      description: 'See how isba drafts replies and organizes your inbox',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: FileText,
      title: 'Document Creation',
      description: 'Experience intelligent document generation from your notes',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <PageHeader title="isba.ai" showBackLink={true} backHref="/" />

      {/* Main Content */}
      <main className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              See <span className="text-gradient">isba</span> in Action
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Experience how isba intelligently enhances your workflows with contextual AI assistance across all your tasks.
            </p>
          </div>

          {/* Interactive Demo Preview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative group animate-fade-in">
              <div className="absolute -inset-1 bg-gradient-hero rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative glass-effect rounded-2xl p-8 bg-card/80">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary shadow-glow">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-center text-foreground mb-4">
                  Interactive Demo Coming Soon
                </h2>
                <p className="text-center text-muted-foreground mb-8">
                  We're preparing an immersive demo experience. Join our waitlist to be the first to try it.
                </p>
                <div className="flex justify-center">
                  <Link href="/waitlist">
                    <Button className="btn-hero px-8 py-4 text-lg">
                      Join Waitlist for Early Access
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Scenarios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {demoScenarios.map((scenario, index) => {
              const Icon = scenario.icon;
              return (
                <div
                  key={scenario.title}
                  className="group relative overflow-hidden rounded-xl glass-effect card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${scenario.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${scenario.color} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {scenario.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {scenario.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
              <Monitor className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Transform Your Workflow?
              </h3>
              <p className="text-muted-foreground mb-6">
                Don't wait - secure your spot and be among the first to experience isba's revolutionary AI assistance.
              </p>
              <Link href="/waitlist">
                <Button className="btn-hero px-8 py-4 text-lg">
                  Join the Waitlist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;
