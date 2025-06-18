
"use client";

import { Player } from '@lottiefiles/react-lottie-player';
import { motion, useTransform, type MotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatingIconItemProps {
  id: string;
  lottieSrc: string;
  wrapperClassName: string;
  iconClassName: string;
  parallaxSpeed: number;
  animationDuration: number;
  animationDelay: number;
  scrollYProgress: MotionValue<number>;
}

export function FloatingIconItem({
  lottieSrc,
  wrapperClassName,
  iconClassName,
  parallaxSpeed,
  animationDuration,
  animationDelay,
  scrollYProgress,
}: FloatingIconItemProps) {
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-50 * parallaxSpeed * 5, 50 * parallaxSpeed * 5]
  );

  return (
    <motion.div
      className={cn("absolute", wrapperClassName)}
      style={{ y }}
      initial={{ y: 0, x: 0, rotate: 0, scale: 1 }}
      animate={{
        y: [0, -15, 0, 10, 0], // This will be combined with the parallax y from style prop
        x: [0, 10, -10, 5, 0],
        rotate: [0, 5, -3, 2, 0],
        scale: [1, 1.05, 1, 0.95, 1],
      }}
      transition={{
        duration: animationDuration,
        repeat: Infinity,
        ease: "linear",
        delay: animationDelay,
      }}
    >
      <Player
        autoplay
        loop
        src={lottieSrc}
        className={cn(iconClassName)}
      />
    </motion.div>
  );
}
