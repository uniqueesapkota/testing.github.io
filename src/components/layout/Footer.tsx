
"use client";
import { useEffect, useState } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="py-8 border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 md:px-8 text-center text-muted-foreground">
        {currentYear !== null ? (
          <p>&copy; {currentYear} PortfolioPro. All rights reserved.</p>
        ) : (
          <p>Loading copyright year...</p>
        )}
        <p className="text-sm mt-1">Designed with passion by Alex Doe.</p>
      </div>
    </footer>
  );
}
