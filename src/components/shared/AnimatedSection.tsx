
"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: string; // e.g., 'delay-200', 'delay-300'
  animationType?: 'fadeInUp' | 'scaleIn' | 'fadeInLeft' | 'fadeInRight' | 'fadeInDown' | 'fadeIn';
  duration?: string; // e.g., 'duration-700', 'duration-1000'
  threshold?: number; // IntersectionObserver threshold
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className, 
  delay = '',
  animationType = 'fadeInUp',
  duration = 'duration-700', // Default duration
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
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
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClasses = () => {
    if (!isVisible) return 'opacity-0'; // Keep it initially transparent
    
    // Return animation class which will be applied once visible
    // The 'forwards' fill mode for animations is handled by tailwind.config.ts
    switch(animationType) {
      case 'fadeInUp': return 'animate-fadeInUp';
      case 'fadeInDown': return 'animate-fadeInDown';
      case 'fadeInLeft': return 'animate-fadeInLeft';
      case 'fadeInRight': return 'animate-fadeInRight';
      case 'scaleIn': return 'animate-scaleIn';
      case 'fadeIn': return 'animate-fadeIn';
      default: return 'animate-fadeInUp';
    }
  }
  
  // Initial transform states are now part of the keyframes themselves or applied if not visible yet
  // and animation fill mode 'forwards' will keep the final state.
  const initialTransformClass = !isVisible ? 
    (animationType === 'fadeInUp' || animationType === 'fadeInDown' ? 'translate-y-5' : 
    (animationType === 'fadeInLeft' || animationType === 'fadeInRight' ? 'translate-x-5' : 
    (animationType === 'scaleIn' ? 'scale-95' : '')))
    : '';


  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-opacity ease-out',
        duration, // Apply duration
        delay,    // Apply delay
        isVisible ? getAnimationClasses() : 'opacity-0', // Apply animation or remain hidden
        isVisible ? '' : initialTransformClass, // Apply initial transform if not visible
        className
      )}
    >
      {children}
    </div>
  );
};
