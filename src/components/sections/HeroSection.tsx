
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { generatePersonalizedWelcome } from '@/ai/flows/personalized-welcome';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Loader2, Send, ArrowDownCircle } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const PORTFOLIO_OWNER_NAME = "Unique Sapkota";
const PORTFOLIO_OWNER_SKILLS = ["Social Media Management", "Web Development", "Digital Marketing", "Content Creation"];
const cinematicEasingString = "cubic-bezier(0.23, 1, 0.32, 1)"; // Valid easeOutQuint

const heroParentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      staggerChildren: 0.2,
      delayChildren: 0.1,
      ease: cinematicEasingString, 
      duration: 0.5, 
    },
  },
};

const heroChildVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "tween",
      ease: cinematicEasingString,
      duration: 0.7,
    },
  },
};

const nameVariants: Variants = {
  hidden: { opacity: 0, y: -50, rotate: -5 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "tween",
      ease: cinematicEasingString,
      duration: 0.8,
    },
  },
};


export function HeroSection() {
  const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isHeroNameScrolledOut, setIsHeroNameScrolledOut] = useState(false);


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

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeroNameScrolledOut(true);
      } else {
        setIsHeroNameScrolledOut(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, []);

  const nameAnimateProps = isHeroNameScrolledOut ?
    { opacity: 0, scale: 0.9, y: -20, transition: { type: "tween", duration: 0.4, ease: cinematicEasingString } } :
    { opacity: 1, scale: 1, y: 0, transition: { type: "tween", duration: 0.4, ease: cinematicEasingString } };


  return (
    <motion.section
      id="hero"
      className="relative py-24 md:py-32 overflow-hidden min-h-[80vh] flex flex-col items-center justify-center"
      variants={heroParentVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <motion.div variants={heroChildVariants}>
          <Image
            src="https://i.postimg.cc/XNypkfWQ/Whats-App-Image-2025-03-10-at-17-12-40.jpg"
            alt="Unique Sapkota - Profile Picture"
            width={160}
            height={160}
            className="rounded-full mx-auto border-4 border-background object-cover animate-heroImageGlow"
            priority
            data-ai-hint="profile man"
          />
        </motion.div>
        <motion.h1
          variants={nameVariants} 
          animate={nameAnimateProps} 
          className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold my-6 text-primary hover:text-accent transition-colors duration-300 cursor-default text-shadow-primary"
        >
          {PORTFOLIO_OWNER_NAME}
        </motion.h1>
        <motion.div
          variants={heroChildVariants}
          className="min-h-[60px] md:min-h-[80px] flex items-center justify-center mb-10"
        >
          {isLoading ? (
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
          ) : (
            <p className="text-xl sm:text-2xl md:text-3xl max-w-3xl mx-auto text-foreground leading-relaxed text-balance">
              {welcomeMessage}
            </p>
          )}
        </motion.div>
        <motion.div
          variants={heroChildVariants}
          className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row items-center justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -2, rotateX: 3, rotateY: -3, boxShadow: "0px 10px 20px -8px hsl(var(--primary)/0.25)" }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Button asChild size="lg" className="font-semibold text-lg px-8 py-6 shadow-lg group w-full sm:w-auto">
              <Link href="#projects">
                <ArrowDownCircle className="mr-2 h-5 w-5 group-hover:animate-wiggle" /> View Projects
              </Link>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03, y: -2, rotateX: 3, rotateY: -3, boxShadow: "0px 10px 20px -8px hsl(var(--accent)/0.25)"}}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Button asChild variant="outline" size="lg" className="font-semibold text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground hover:bg-primary group w-full sm:w-auto">
              <Link href="#contact">
               <Send className="mr-2 h-5 w-5 group-hover:animate-wiggle" /> Get in Touch
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
