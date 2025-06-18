
"use client";

import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

const cinematicEasingString = "cubic-bezier(0.23, 1, 0.32, 1)"; // Valid easeOutQuint - Kept for reference, but not used in transition

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number; 
  staggerAmount?: number; 
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: ({ delay = 0, staggerAmount = 0 } : { delay?: number; staggerAmount?: number }) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "tween",
      delay,
      duration: 0.8,
      // ease: cinematicEasingString, // Removed
      staggerChildren: staggerAmount,
      when: "beforeChildren",
    }
  })
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  staggerAmount = 0,
}) => {
  return (
    <motion.section
      className={cn(className)}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={{ delay, staggerAmount }}
    >
      {children}
    </motion.section>
  );
};
