
"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: string; // Tailwind class for CSS transition-delay (e.g., 'delay-200')
  animationType?: 'fadeInUp' | 'scaleIn' | 'fadeInLeft' | 'fadeInRight' | 'fadeInDown' | 'fadeIn';
  duration?: string; // Tailwind class for CSS transition-duration (e.g., 'duration-700')
  threshold?: number; // IntersectionObserver threshold
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = '', // Default CSS transition delay
  animationType = 'fadeInUp',
  duration = 'duration-700', // Default CSS transition duration for opacity fade-out
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Set visibility based on intersection status
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Clean up observer on unmount
      }
    };
  }, [threshold]); // Re-run effect if threshold changes

  const getAnimationClass = () => {
    // This function is called when isVisible is true to get the animation class
    switch(animationType) {
      case 'fadeInUp': return 'animate-fadeInUp';
      case 'fadeInDown': return 'animate-fadeInDown';
      case 'fadeInLeft': return 'animate-fadeInLeft';
      case 'fadeInRight': return 'animate-fadeInRight';
      case 'scaleIn': return 'animate-scaleIn';
      case 'fadeIn': return 'animate-fadeIn';
      default: return 'animate-fadeInUp';
    }
  };

  // Defines the starting visual state (transform) for when the element is not visible or before animating in.
  // This state is applied when isVisible is false, allowing a smooth transition out.
  const initialTransformClass =
    animationType === 'fadeInUp' ? 'translate-y-5' :
    animationType === 'fadeInDown' ? '-translate-y-5' : // Simplified starting point for consistency
    animationType === 'fadeInLeft' ? '-translate-x-5' :
    animationType === 'fadeInRight' ? 'translate-x-5' :
    animationType === 'scaleIn' ? 'scale-95' :
    ''; // For 'fadeIn' or default, no specific initial transform beyond opacity

  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-opacity ease-out', // Applies to opacity changes when isVisible toggles
        duration,    // Duration for the opacity transition (e.g., fade-out)
        delay,       // Delay for the opacity transition (e.g., fade-out)
        isVisible ? getAnimationClass() : 'opacity-0', // Apply animation if visible, else set opacity to 0 for fade-out
        isVisible ? '' : initialTransformClass, // If not visible, apply the initial transform state
        className
      )}
    >
      {children}
    </div>
  );
};

    