
"use client";

import { useEffect, useState } from 'react';
import { generatePersonalizedWelcome } from '@/ai/flows/personalized-welcome';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

// Portfolio owner's details - consider moving to a config file or environment variables
const PORTFOLIO_OWNER_NAME = "Alex Doe";
const PORTFOLIO_OWNER_SKILLS = ["Full-Stack Development", "UI/UX Design", "Creative Problem Solving", "Agile Methodologies"];

export function HeroSection() {
  const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWelcomeMessage = async () => {
      setIsLoading(true);
      try {
        const result = await generatePersonalizedWelcome({
          visitorName: "Valued Visitor", // This could be dynamic in a real app
          portfolioOwnerName: PORTFOLIO_OWNER_NAME,
          portfolioOwnerSkills: PORTFOLIO_OWNER_SKILLS,
        });
        setWelcomeMessage(result.welcomeMessage);
      } catch (error) {
        console.error("Failed to generate welcome message:", error);
        // Fallback message
        setWelcomeMessage(`Welcome to ${PORTFOLIO_OWNER_NAME}'s creative space! Explore a collection of innovative projects and discover a passion for crafting exceptional digital experiences.`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWelcomeMessage();
  }, []);

  return (
    <section id="hero" className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">
          {PORTFOLIO_OWNER_NAME}
        </h1>
        <div className="min-h-[60px] md:min-h-[80px] flex items-center justify-center mb-8">
          {isLoading ? (
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          ) : (
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-foreground leading-relaxed">
              {welcomeMessage}
            </p>
          )}
        </div>
        <div className="space-x-4">
          <Button asChild size="lg" className="font-semibold">
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-semibold border-primary text-primary hover:bg-primary/10">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
