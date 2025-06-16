
"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: string; 
  animationType?: 'fadeInUp' | 'scaleIn' | 'slideInRight' | 'fadeInLeft' | 'fadeInDown' | 'fadeIn';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className, 
  delay = '',
  animationType = 'fadeInUp'
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

  const getAnimationClasses = () => {
    if (!isVisible) return 'opacity-0';
    switch(animationType) {
      case 'fadeInUp': return 'animate-fadeInUp opacity-100';
      case 'fadeInDown': return 'animate-fadeInDown opacity-100';
      case 'fadeInLeft': return 'animate-fadeInLeft opacity-100';
      case 'fadeInRight': return 'animate-fadeInRight opacity-100';
      case 'scaleIn': return 'animate-scaleIn opacity-100';
      case 'fadeIn': return 'animate-fadeIn opacity-100';
      default: return 'animate-fadeInUp opacity-100';
    }
  }

  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-opacity duration-1000 ease-out', 
        getAnimationClasses(),
        delay,
        className,
        !isVisible && (animationType === 'fadeInUp' || animationType === 'fadeInDown' ? 'translate-y-10' : ''),
        !isVisible && (animationType === 'fadeInLeft' || animationType === 'fadeInRight' ? 'translate-x-10' : ''),
        !isVisible && animationType === 'scaleIn' && 'scale-90'
      )}
    >
      {children}
    </div>
  );
};
