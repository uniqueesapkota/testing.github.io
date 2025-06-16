
"use client";

import { useState, useEffect, type FC } from 'react';
import Link from 'next/link';
import { UserRound, BrainCircuit, FolderKanban, Mail, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { href: '#about', label: 'About', icon: UserRound },
  { href: '#about', label: 'Skills', icon: BrainCircuit }, // Skills are within the About section
  { href: '#projects', label: 'Projects', icon: FolderKanban },
  { href: '#contact', label: 'Contact', icon: Mail },
  { href: '#hero', label: 'Random', icon: Lightbulb }, // "Random" links to top for now
];

const SCROLL_THRESHOLD = 300; // Pixels to scroll before nav appears

export const ScrollAwareNav: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check on initial load

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <nav
      className={cn(
        'fixed bottom-5 left-1/2 z-50 flex w-auto -translate-x-1/2 transform items-center justify-center transition-all duration-300 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'
      )}
      aria-label="Floating site navigation"
    >
      <div className="bg-background/80 p-2 shadow-xl rounded-full backdrop-blur-md border border-border/30">
        <div className="flex items-center justify-center space-x-1 sm:space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'group flex flex-col items-center justify-center rounded-full px-3 py-2 sm:px-4 sm:py-2.5 text-xs font-medium text-muted-foreground transition-all duration-200 ease-in-out',
                'hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background/80'
              )}
              aria-label={item.label}
            >
              <item.icon className="mb-0.5 h-5 w-5 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:scale-110 group-hover:animate-wiggle" aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
