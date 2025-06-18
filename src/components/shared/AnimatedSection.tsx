
"use client";

import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

// Cinematic easing as a string for direct WAAPI compatibility
const cinematicEasingString = "cubic-bezier(0.6, 0.01, -0.05, 0.95)";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Delay in seconds
  staggerChildren?: number;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "tween",
      delay,
      duration: 0.8,
      ease: cinematicEasingString,
      when: "beforeChildren",
    }
  })
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  staggerChildren,
}) => {
  return (
    <motion.section
      className={cn(className)}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={delay}
      {...(staggerChildren && { transition: { ...sectionVariants.visible(delay).transition, staggerChildren } })}
    >
      {children}
    </motion.section>
  );
};
