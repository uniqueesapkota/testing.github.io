
"use client";
import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="py-8 border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 md:px-8 text-center text-muted-foreground">
        {currentYear !== null ? (
          <p className="flex items-center justify-center">
            <Sparkles className="h-4 w-4 mr-1.5 text-accent animate-pulse-glow" />
            &copy; {currentYear} PortfolioPro. All rights reserved.
             <Sparkles className="h-4 w-4 ml-1.5 text-accent animate-pulse-glow" />
            </p>
        ) : (
          <p>Loading copyright year...</p>
        )}
        <p className="text-sm mt-1">Designed with passion by Unique Sapkota.</p>
      </div>
    </footer>
  );
}
