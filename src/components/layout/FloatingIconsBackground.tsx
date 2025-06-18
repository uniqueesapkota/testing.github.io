
"use client";

import { motion, useScroll } from 'framer-motion'; // useTransform is no longer directly used in map here
import { cn } from '@/lib/utils';
import { useRef, useState, useEffect } from 'react';
import { FloatingIconItem } from './FloatingIconItem'; // Import the new component

interface BaseIconConfig {
  id: string;
  lottieSrc: string;
  wrapperClassName: string;
  iconClassName: string;
  parallaxSpeed: number;
}

const baseBackgroundIcons: BaseIconConfig[] = [
  {
    id: "react",
    lottieSrc: "https://assets3.lottiefiles.com/packages/lf20_g9epds9h.json",
    wrapperClassName: "top-[10%] left-[5%] opacity-[0.12]",
    iconClassName: "w-20 h-20",
    parallaxSpeed: 0.1,
  },
  {
    id: "nodejs",
    lottieSrc: "https://assets1.lottiefiles.com/packages/lf20_jGgygT.json",
    wrapperClassName: "top-[12%] right-[8%] opacity-[0.1]",
    iconClassName: "w-24 h-24",
    parallaxSpeed: 0.15,
  },
  {
    id: "code",
    lottieSrc: "https://assets6.lottiefiles.com/packages/lf20_SJ5Awm.json",
    wrapperClassName: "bottom-[8%] left-[15%] opacity-[0.08]",
    iconClassName: "w-16 h-16",
    parallaxSpeed: 0.05,
  },
  {
    id: "db",
    lottieSrc: "https://assets1.lottiefiles.com/packages/lf20_c22yG4.json",
    wrapperClassName: "bottom-[15%] right-[10%] opacity-[0.12]",
    iconClassName: "w-16 h-16",
    parallaxSpeed: 0.18,
  },
  {
    id: "google",
    lottieSrc: "https://assets7.lottiefiles.com/packages/lf20_zS23T5.json",
    wrapperClassName: "top-[45%] left-[40%] opacity-[0.07]",
    iconClassName: "w-14 h-14",
    parallaxSpeed: 0.2,
  },
  {
    id: "youtube",
    lottieSrc: "https://assets5.lottiefiles.com/packages/lf20_A6M0Gk.json",
    wrapperClassName: "top-[65%] left-[2%] opacity-[0.15]",
    iconClassName: "w-20 h-20",
    parallaxSpeed: 0.12,
  },
  {
    id: "github",
    lottieSrc: "https://assets8.lottiefiles.com/packages/lf20_6HFXXE.json",
    wrapperClassName: "top-[30%] right-[25%] opacity-[0.1]",
    iconClassName: "w-16 h-16",
    parallaxSpeed: 0.08,
  },
  {
    id: "javascript",
    lottieSrc: "https://assets9.lottiefiles.com/packages/lf20_y9jw100b.json",
    wrapperClassName: "bottom-[30%] left-[30%] opacity-[0.12]",
    iconClassName: "w-16 h-16",
    parallaxSpeed: 0.16,
  },
  {
    id: "api",
    lottieSrc: "https://assets4.lottiefiles.com/packages/lf20_fjvOTN.json",
    wrapperClassName: "top-[50%] right-[45%] opacity-[0.08]",
    iconClassName: "w-16 h-16",
    parallaxSpeed: 0.1,
  },
  {
    id: "cloud",
    lottieSrc: "https://assets2.lottiefiles.com/packages/lf20_xN9FNz.json",
    wrapperClassName: "top-[80%] right-[20%] opacity-[0.1]",
    iconClassName: "w-20 h-20",
    parallaxSpeed: 0.13,
  },
];

interface ClientSideIconConfig extends BaseIconConfig {
  animationDuration: number;
  animationDelay: number;
}

export function FloatingIconsBackground() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const [clientSideIcons, setClientSideIcons] = useState<ClientSideIconConfig[]>([]);

  useEffect(() => {
    setClientSideIcons(
      baseBackgroundIcons.map(icon => ({
        ...icon,
        animationDuration: Math.random() * 10 + 15,
        animationDelay: Math.random() * 7,
      }))
    );
  }, []);

  if (clientSideIcons.length === 0) {
    return null;
  }

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {clientSideIcons.map((iconConfig) => (
        <FloatingIconItem
          key={iconConfig.id}
          {...iconConfig}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}
