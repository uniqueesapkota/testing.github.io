
"use client";

import { useEffect, useState } from 'react';
import { generatePersonalizedWelcome } from '@/ai/flows/personalized-welcome';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Loader2, Send, ArrowDownCircle } from 'lucide-react';

const PORTFOLIO_OWNER_NAME = "Unik Sapkota";
const PORTFOLIO_OWNER_SKILLS = ["Social Media Management", "Web Development", "Digital Marketing", "Content Creation"];

export function HeroSection() {
  const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWelcomeMessage = async () => {
      setIsLoading(true);
      try {
        const result = await generatePersonalizedWelcome({
          visitorName: "Valued Visitor", 
          portfolioOwnerName: PORTFOLIO_OWNER_NAME,
          portfolioOwnerSkills: PORTFOLIO_OWNER_SKILLS,
        });
        setWelcomeMessage(result.welcomeMessage);
      } catch (error) {
        console.error("Failed to generate welcome message:", error);
        setWelcomeMessage(`Welcome to ${PORTFOLIO_OWNER_NAME}'s portfolio! Discover a blend of social media expertise and web development skills, crafting impactful digital experiences.`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWelcomeMessage();
  }, []);

  return (
    <section id="hero" className="py-24 md:py-40 bg-gradient-to-br from-background via-secondary/30 to-primary/10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary hover:text-accent transition-colors duration-300 cursor-default animate-bounce-light text-shadow-primary">
          {PORTFOLIO_OWNER_NAME}
        </h1>
        <div className="min-h-[60px] md:min-h-[80px] flex items-center justify-center mb-10">
          {isLoading ? (
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
          ) : (
            <p className="text-xl sm:text-2xl md:text-3xl max-w-3xl mx-auto text-foreground leading-relaxed animate-fadeIn [animation-fill-mode:forwards] [animation-delay:0.4s] text-balance">
              {welcomeMessage}
            </p>
          )}
        </div>
        <div className="space-x-4 animate-fadeInUp [animation-fill-mode:forwards] [animation-delay:0.8s]">
          <Button asChild size="lg" className="font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-primary-glow hover:scale-105 transform transition-all duration-300 ease-in-out group">
            <Link href="#projects">
              <ArrowDownCircle className="mr-2 h-5 w-5 group-hover:animate-wiggle" /> View Projects
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-semibold text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground hover:bg-primary hover:scale-105 hover:shadow-primary-glow transform transition-all duration-300 ease-in-out group">
            <Link href="#contact">
             <Send className="mr-2 h-5 w-5 group-hover:animate-wiggle" /> Get in Touch
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
