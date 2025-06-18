
"use client";

import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from 'framer-motion';

const YOUR_RESUME_URL = "https://unique-link.tiiny.site/";
const PORTFOLIO_OWNER_NAME = "Unique Sapkota";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: YOUR_RESUME_URL, label: "Resume", isExternal: true },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="mr-6 flex items-center space-x-2 group">
          <Sparkles className="h-7 w-7 text-primary group-hover:text-accent transition-all duration-300 ease-in-out transform group-hover:animate-icon-sparkle-pop" />
          {isScrolled && (
            <motion.span 
              className="font-headline text-xl text-primary ml-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {PORTFOLIO_OWNER_NAME}
            </motion.span>
          )}
           <span className="sr-only">Portfolio of {PORTFOLIO_OWNER_NAME}</span>
           {!isScrolled && <span className="sr-only">{PORTFOLIO_OWNER_NAME}</span>}
        </Link>

        <nav className="hidden md:flex md:items-center md:space-x-6 text-sm font-headline">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative transition-all duration-300 ease-in-out hover:text-accent hover:text-shadow-accent hover:scale-110 transform after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              {...(item.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-accent/20 active:scale-95 transition-transform group h-9 w-9">
                  <Menu className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6 shadow-xl">
                <SheetHeader className="mb-4">
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Main navigation links for the portfolio of {PORTFOLIO_OWNER_NAME}.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-5">
                  <div className="flex justify-between items-center mb-4">
                     <Link href="/" className="flex items-center space-x-2 group" onClick={handleLinkClick}>
                       <Sparkles className="h-6 w-6 text-primary group-hover:text-accent group-hover:animate-icon-sparkle-pop" />
                        <span className="font-headline text-lg text-primary ml-1">
                          {PORTFOLIO_OWNER_NAME}
                        </span>
                       <span className="sr-only">Portfolio of {PORTFOLIO_OWNER_NAME}</span>
                     </Link>
                     <SheetClose asChild>
                        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="hover:bg-accent/20 active:scale-95 transition-transform group h-9 w-9">
                          <X className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                          <span className="sr-only">Close navigation menu</span>
                        </Button>
                      </SheetClose>
                  </div>
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        className="text-lg font-headline transition-all duration-200 hover:text-accent hover:text-shadow-accent py-2 hover:pl-2 ease-in-out"
                        onClick={handleLinkClick}
                        {...(item.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
