"use client";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import UseCases from '@/components/UseCases';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};