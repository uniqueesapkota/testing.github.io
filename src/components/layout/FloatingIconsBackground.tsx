
"use client";

import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BackgroundIconConfig {
  id: string;
  lottieSrc: string; 
  wrapperClassName: string; 
  iconClassName: string; 
}

const backgroundIcons: BackgroundIconConfig[] = [
  {
    id: "react",
    lottieSrc: "https://assets3.lottiefiles.com/packages/lf20_g9epds9h.json", // React Lottie
    wrapperClassName: "top-[10%] left-[5%] opacity-[0.15]",
    iconClassName: "w-20 h-20",
  },
  {
    id: "nodejs",
    lottieSrc: "https://assets1.lottiefiles.com/packages/lf20_jGgygT.json", // Node.js Lottie
    wrapperClassName: "top-[12%] right-[8%] opacity-[0.12]",
    iconClassName: "w-24 h-24",
  },
  {
    id: "code",
    lottieSrc: "https://assets6.lottiefiles.com/packages/lf20_SJ5Awm.json", // Example Coding Lottie
    wrapperClassName: "bottom-[8%] left-[15%] opacity-[0.1]",
    iconClassName: "w-16 h-16",
  },
  {
    id: "db",
    lottieSrc: "https://assets1.lottiefiles.com/packages/lf20_c22yG4.json", // Example Database Lottie
    wrapperClassName: "bottom-[15%] right-[10%] opacity-[0.15]",
    iconClassName: "w-16 h-16",
  },
  {
    id: "google",
    lottieSrc: "https://assets7.lottiefiles.com/packages/lf20_zS23T5.json", // Example Google G Lottie
    wrapperClassName: "top-[45%] left-[40%] opacity-[0.08]",
    iconClassName: "w-14 h-14",
  },
  {
    id: "youtube",
    lottieSrc: "https://assets5.lottiefiles.com/packages/lf20_A6M0Gk.json", // Example YouTube Lottie
    wrapperClassName: "top-[65%] left-[2%] opacity-[0.18]",
    iconClassName: "w-20 h-20",
  },
  {
    id: "github",
    lottieSrc: "https://assets8.lottiefiles.com/packages/lf20_6HFXXE.json", // Example GitHub Lottie
    wrapperClassName: "top-[30%] right-[25%] opacity-[0.12]",
    iconClassName: "w-16 h-16",
  },
  {
    id: "javascript",
    lottieSrc: "https://assets9.lottiefiles.com/packages/lf20_y9jw100b.json", // Example JS Lottie
    wrapperClassName: "bottom-[30%] left-[30%] opacity-[0.15]",
    iconClassName: "w-16 h-16",
  },
  {
    id: "api", 
    lottieSrc: "https://assets4.lottiefiles.com/packages/lf20_fjvOTN.json", // Example API/Network Lottie
    wrapperClassName: "top-[50%] right-[45%] opacity-[0.1]",
    iconClassName: "w-16 h-16",
  },
  {
    id: "cloud",
    lottieSrc: "https://assets2.lottiefiles.com/packages/lf20_xN9FNz.json", // Example Cloud Lottie
    wrapperClassName: "top-[80%] right-[20%] opacity-[0.12]",
    iconClassName: "w-20 h-20",
  },
];

export function FloatingIconsBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {backgroundIcons.map(({ id, lottieSrc, wrapperClassName, iconClassName }) => (
        <motion.div
          key={id}
          className={cn(
            "absolute blur-xs",
            wrapperClassName 
          )}
          initial={{ y: 0, x: 0, rotate: 0, scale: 1 }}
          animate={{
            y: [0, -15, 0, 10, 0],
            x: [0, 10, -10, 5, 0],
            rotate: [0, 5, -3, 2, 0],
            scale: [1, 1.05, 1, 0.95, 1],
          }}
          transition={{
            duration: Math.random() * 8 + 12, // Random duration between 12-20s
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5, // Random initial delay up to 5s
          }}
        >
          <Player
            autoplay
            loop
            src={lottieSrc}
            className={cn(iconClassName)} 
          />
        </motion.div>
      ))}
    </div>
  );
}
