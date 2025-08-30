"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface HeaderProps {
  title?: string;
  showBackLink?: boolean;
  backHref?: string;
}

const PageHeader: React.FC<HeaderProps> = ({
  title = "isba.ai",
  showBackLink = true,
  backHref = "/",
}) => {
  return (
    <header className="glass-effect border-b border-border">
      <div className="container-width px-6 py-4">
        <div className="flex items-center justify-between">
          {showBackLink && (
            <Link
              href={backHref}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          )}
          <div className="flex items-center">
            <div className="w-6 h-6 rounded bg-gradient-primary"></div>
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-primary">
                <img src="/favicon.ico" alt="ISBA Logo" className="w-5 h-5" />
            </div>
            <span className="font-bold text-foreground">{title}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
