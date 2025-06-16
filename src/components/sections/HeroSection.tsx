
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { generatePersonalizedWelcome } from '@/ai/flows/personalized-welcome';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Loader2, Send, ArrowDownCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const PORTFOLIO_OWNER_NAME = "Unique Sapkota";
const PORTFOLIO_OWNER_SKILLS = ["Social Media Management", "Web Development", "Digital Marketing", "Content Creation"];

export function HeroSection() {
  const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageAnimated, setImageAnimated] = useState(false);
  const [nameAnimated, setNameAnimated] = useState(false);
  const [messageAnimated, setMessageAnimated] = useState(false);
  const [buttonsAnimated, setButtonsAnimated] = useState(false);


  useEffect(() => {
    const fetchWelcomeMessage = async () => {
      setIsLoading(true);
      try {
        // For demo purposes, let's assume visitor name is generic.
        // In a real app, this might come from user input or auth.
        const result = await generatePersonalizedWelcome({
          visitorName: "Valued Visitor", 
          portfolioOwnerName: PORTFOLIO_OWNER_NAME,
          portfolioOwnerSkills: PORTFOLIO_OWNER_SKILLS,
        });
        setWelcomeMessage(result.welcomeMessage);
      } catch (error) {
        console.error("Failed to generate welcome message:", error);
        // Fallback message
        setWelcomeMessage(`Welcome to ${PORTFOLIO_OWNER_NAME}'s portfolio! Discover a blend of social media expertise and web development skills, crafting impactful digital experiences.`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWelcomeMessage();

    // Staggered animation triggers
    const timerImg = setTimeout(() => setImageAnimated(true), 50);
    const timer1 = setTimeout(() => setNameAnimated(true), 200); 
    const timer2 = setTimeout(() => setMessageAnimated(true), 500); 
    const timer3 = setTimeout(() => setButtonsAnimated(true), 800);


    return () => {
      clearTimeout(timerImg);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    }

  }, []);

  return (
    <section id="hero" className="py-24 md:py-32 bg-gradient-to-br from-background via-secondary/30 to-primary/10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div 
          className={cn(
            "mb-6",
            "opacity-0 transform scale-90",
            imageAnimated && "animate-scaleIn opacity-100 scale-100"
          )}
          style={{ animationDuration: '0.7s', animationFillMode: 'forwards', animationDelay: '0.05s' }}
        >
          <Image
            src="https://i.postimg.cc/XNypkfWQ/Whats-App-Image-2025-03-10-at-17-12-40.jpg"
            alt="Unique Sapkota - Profile Picture"
            width={160}
            height={160}
            className="rounded-full mx-auto shadow-xl border-4 border-background object-cover"
            priority 
          />
        </div>
        <h1 
          className={cn(
            "font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary hover:text-accent transition-all duration-500 cursor-default text-shadow-primary",
            "opacity-0 transform translate-y-8", 
            nameAnimated && "animate-fadeInDown opacity-100 translate-y-0"
          )}
          style={{ animationDuration: '0.8s', animationFillMode: 'forwards', animationDelay: '0.2s' }}
          >
          {PORTFOLIO_OWNER_NAME}
        </h1>
        <div 
          className={cn(
            "min-h-[60px] md:min-h-[80px] flex items-center justify-center mb-10",
             "opacity-0 transform translate-y-8",
            messageAnimated && "animate-fadeInUp opacity-100 translate-y-0"
            )}
          style={{ animationDuration: '0.8s', animationFillMode: 'forwards', animationDelay: '0.5s' }}
        >
          {isLoading ? (
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
          ) : (
            <p className="text-xl sm:text-2xl md:text-3xl max-w-3xl mx-auto text-foreground leading-relaxed text-balance">
              {welcomeMessage}
            </p>
          )}
        </div>
        <div 
          className={cn(
            "space-x-4",
            "opacity-0 transform translate-y-8",
            buttonsAnimated && "animate-fadeInUp opacity-100 translate-y-0"
          )}
          style={{ animationDuration: '0.8s', animationFillMode: 'forwards', animationDelay: '0.8s' }}
        >
          <Button asChild size="lg" className="font-semibold text-lg px-8 py-6 shadow-lg hover:animate-subtle-glow hover:scale-105 hover:brightness-110 transform transition-all duration-300 ease-in-out group">
            <Link href="#projects">
              <ArrowDownCircle className="mr-2 h-5 w-5 group-hover:animate-wiggle" /> View Projects
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-semibold text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground hover:bg-primary hover:scale-105 hover:animate-subtle-glow hover:brightness-110 transform transition-all duration-300 ease-in-out group">
            <Link href="#contact">
             <Send className="mr-2 h-5 w-5 group-hover:animate-wiggle" /> Get in Touch
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
