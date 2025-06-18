
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { generatePersonalizedWelcome } from '@/ai/flows/personalized-welcome';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Loader2, Send, ArrowDownCircle, CodeXml, Layers, ToyBrick, GitFork, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

const PORTFOLIO_OWNER_NAME = "Unique Sapkota";
const PORTFOLIO_OWNER_SKILLS = ["Social Media Management", "Web Development", "Digital Marketing", "Content Creation"];

const backgroundIcons = [
  { Icon: CodeXml, className: "top-[10%] left-[15%] w-16 h-16 text-primary/20 [animation-duration:18s] [animation-delay:-2s]" },
  { Icon: Layers, className: "top-[20%] right-[10%] w-20 h-20 text-accent/15 [animation-duration:22s] [animation-delay:-5s]" },
  { Icon: ToyBrick, className: "bottom-[15%] left-[25%] w-14 h-14 text-primary/20 [animation-duration:20s] [animation-delay:-8s]" },
  { Icon: GitFork, className: "bottom-[25%] right-[20%] w-16 h-16 text-accent/15 [animation-duration:17s] [animation-delay:-3s]" },
  { Icon: Database, className: "top-[50%] left-[45%] w-12 h-12 text-primary/15 [animation-duration:25s] [animation-delay:-10s]" },
];

export function HeroSection() {
  const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageAnimated, setImageAnimated] = useState(false);
  const [nameAnimated, setNameAnimated] = useState(false);
  const [messageAnimated, setMessageAnimated] = useState(false);
  const [buttonsAnimated, setButtonsAnimated] = useState(false);
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

    const timerImg = setTimeout(() => setImageAnimated(true), 50); 
    const timerNameAnimation = setTimeout(() => setNameAnimated(true), 250); 
    const timerMsgAnimation = setTimeout(() => setMessageAnimated(true), 700);
    const timerBtnsAnimation = setTimeout(() => setButtonsAnimated(true), 950);

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
      clearTimeout(timerImg);
      clearTimeout(timerNameAnimation);
      clearTimeout(timerMsgAnimation);
      clearTimeout(timerBtnsAnimation);
      window.removeEventListener('scroll', handleScroll);
    }

  }, []);

  return (
    <section id="hero" className="relative py-24 md:py-32 bg-gradient-to-br from-background via-secondary/30 to-primary/10 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {backgroundIcons.map(({ Icon, className }, index) => (
          <div
            key={index}
            className={cn(
              "absolute opacity-5 blur-md animate-hero-bg-icon-float",
              className
            )}
          >
            <Icon />
          </div>
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
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
            className={cn(
                "rounded-full mx-auto border-4 border-background object-cover",
                imageAnimated ? "animate-heroImageGlow" : ""
            )}
            priority
          />
        </div>
        <h1
          className={cn(
            "font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary hover:text-accent transition-all duration-500 cursor-default text-shadow-primary",
            !nameAnimated && !isHeroNameScrolledOut && "opacity-0",
            nameAnimated && !isHeroNameScrolledOut && "animate-name-fall-settle",
            isHeroNameScrolledOut && "animate-hero-name-scroll-out"
          )}
          style={{
            animationDelay: (nameAnimated && !isHeroNameScrolledOut) ? '0.25s' : '0s',
            animationFillMode: 'forwards'
          }}
          >
          {PORTFOLIO_OWNER_NAME}
        </h1>
        <div
          className={cn(
            "min-h-[60px] md:min-h-[80px] flex items-center justify-center mb-10",
             "opacity-0 transform translate-y-8", 
            messageAnimated && "animate-fadeInUp opacity-100 translate-y-0" 
            )}
          style={{ animationDuration: '0.8s', animationFillMode: 'forwards', animationDelay: '0.7s' }}
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
          style={{ animationDuration: '0.8s', animationFillMode: 'forwards', animationDelay: '0.95s' }}
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
