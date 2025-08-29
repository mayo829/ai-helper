"use client";

import { Code, Mail, FileText, BarChart, Search } from 'lucide-react';
import Link from 'next/link';

const UseCases = () => {
  const useCases = [
    {
      icon: Code,
      title: 'Code Smarter, Not Harder',
      description: 'isba auto-suggests functions, detects bugs, and even writes whole modules based on screen context.',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: Mail,
      title: 'Inbox Zero in Half the Time',
      description: 'Drafts replies, categorizes emails, and even summarizes threads on-screen.',
      gradient: 'from-green-500 to-teal-600',
    },
    {
      icon: FileText,
      title: 'Document & Report Generation',
      description: 'Turns notes, data, and outlines into full documents or presentations instantly.',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: BarChart,
      title: 'Spreadsheets with Superpowers',
      description: 'Analyzes data as you view it, generates formulas, and builds dashboards with a click.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: Search,
      title: 'Research & Summarization',
      description: 'Reads on-screen content and fetches summaries, context, or next steps without switching tabs.',
      gradient: 'from-indigo-500 to-blue-600',
    },
  ];

  return (
    <section id="use-cases" className="section-padding relative overflow-hidden">
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Made for <span className="text-white">Real Work</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Whatever you're doing, isba is one step ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border card-hover animate-fade-in ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-6 md:p-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.gradient} mb-4`}>
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {useCase.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/demo">
            <button className="btn-hero px-8 py-3 rounded-xl font-medium transition-all hover:scale-105">
              Explore All Use Cases
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UseCases;