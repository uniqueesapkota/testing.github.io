
"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: string; 
  animationType?: 'fadeInUp' | 'scaleIn' | 'slideInRight'; // Add animationType
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className, 
  delay = '',
  animationType = 'fadeInUp' // Default animation
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
        threshold: 0.1, 
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
  }, []);

  const animationClasses = {
    fadeInUp: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
    scaleIn: isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90',
    slideInRight: isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10',
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-all duration-1000 ease-out', 
        animationClasses[animationType],
        delay,
        className
      )}
    >
      {children}
    </div>
  );
};
