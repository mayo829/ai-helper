"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Zap, Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-width">
        <div className="section-padding">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-primary">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">isba.ai</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Your AI co-pilot for any task on your screen. isba helps you complete work faster with intelligent, contextual assistance.
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <p className="font-medium text-foreground">Stay updated on our launch & updates</p>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter your email" 
                    className="flex-1"
                  />
                  <Button className="btn-hero px-6">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-3">
                {[
                  'Features',
                  'Use Cases',
                  'Pricing',
                  'Demo',
                  'Documentation'
                ].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {[
                  'About',
                  'Blog',
                  'Careers',
                  'Press',
                  'Contact'
                ].map((item) => (
                  <li key={item}>
                    <a 
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Contact Info */}
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@isba.ai</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">For partnerships or press</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a 
                  href="#" 
                  className="p-2 rounded-lg hover:bg-card transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg hover:bg-card transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg hover:bg-card transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-6 mt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                © 2024 isba.ai. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <a 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;