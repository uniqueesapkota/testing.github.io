
"use client";

import { Player } from '@lottiefiles/react-lottie-player';
import { cn } from '@/lib/utils';

interface BackgroundIconConfig {
  id: string;
  lottieSrc: string; // URL to the Lottie JSON file
  wrapperClassName: string; // For positioning, opacity, and overall animation control
  iconClassName: string; // For sizing the Lottie player
  animationClassName: string; // For custom animation timing of the floating effect
}

// PLEASE REPLACE THESE LOTTIE SRC URLS WITH YOUR PREFERRED ANIMATIONS
// You can find many free and premium Lottie animations on LottieFiles.com
const backgroundIcons: BackgroundIconConfig[] = [
  { 
    id: "react", 
    lottieSrc: "https://assets3.lottiefiles.com/packages/lf20_g9epds9h.json", // Example React Lottie
    wrapperClassName: "top-[10%] left-[5%] opacity-[0.15]", 
    iconClassName: "w-20 h-20", 
    animationClassName: "[animation-duration:18s] [animation-delay:-2s]" 
  },
  { 
    id: "nodejs", 
    lottieSrc: "https://assets1.lottiefiles.com/packages/lf20_jGgygT.json", // Example Node.js Lottie
    wrapperClassName: "top-[12%] right-[8%] opacity-[0.12]", 
    iconClassName: "w-24 h-24", 
    animationClassName: "[animation-duration:22s] [animation-delay:-5s]" 
  },
  { 
    id: "code", 
    lottieSrc: "https://assets6.lottiefiles.com/packages/lf20_SJ5Awm.json", // Example Coding Lottie
    wrapperClassName: "bottom-[8%] left-[15%] opacity-[0.1]", 
    iconClassName: "w-16 h-16", 
    animationClassName: "[animation-duration:20s] [animation-delay:-8s]" 
  },
  { 
    id: "db", 
    lottieSrc: "https://assets1.lottiefiles.com/packages/lf20_c22yG4.json", // Example Database Lottie
    wrapperClassName: "bottom-[15%] right-[10%] opacity-[0.15]", 
    iconClassName: "w-16 h-16", 
    animationClassName: "[animation-duration:17s] [animation-delay:-3s]" 
  },
  { 
    id: "google", 
    lottieSrc: "https://assets7.lottiefiles.com/packages/lf20_zS23T5.json", // Example Google G Lottie
    wrapperClassName: "top-[45%] left-[40%] opacity-[0.08]", 
    iconClassName: "w-14 h-14", 
    animationClassName: "[animation-duration:25s] [animation-delay:-10s]" 
  },
  { 
    id: "youtube", 
    lottieSrc: "https://assets5.lottiefiles.com/packages/lf20_A6M0Gk.json", // Example YouTube Lottie
    wrapperClassName: "top-[65%] left-[2%] opacity-[0.18]", 
    iconClassName: "w-20 h-20", 
    animationClassName: "[animation-duration:19s] [animation-delay:-6s]" 
  },
  { 
    id: "github", 
    lottieSrc: "https://assets8.lottiefiles.com/packages/lf20_6HFXXE.json", // Example GitHub Lottie
    wrapperClassName: "top-[30%] right-[25%] opacity-[0.12]", 
    iconClassName: "w-16 h-16", 
    animationClassName: "[animation-duration:21s] [animation-delay:-4s]" 
  },
  { 
    id: "javascript", 
    lottieSrc: "https://assets9.lottiefiles.com/packages/lf20_y9jw100b.json", // Example JS Lottie
    wrapperClassName: "bottom-[30%] left-[30%] opacity-[0.15]", 
    iconClassName: "w-16 h-16", 
    animationClassName: "[animation-duration:16s] [animation-delay:-7s]" 
  },
  { 
    id: "api", // Placeholder for Postman or general API
    lottieSrc: "https://assets4.lottiefiles.com/packages/lf20_fjvOTN.json", // Example API/Network Lottie
    wrapperClassName: "top-[50%] right-[45%] opacity-[0.1]", 
    iconClassName: "w-16 h-16", 
    animationClassName: "[animation-duration:23s] [animation-delay:-9s]" 
  },
  { 
    id: "cloud", 
    lottieSrc: "https://assets2.lottiefiles.com/packages/lf20_xN9FNz.json", // Example Cloud Lottie
    wrapperClassName: "top-[80%] right-[20%] opacity-[0.12]", 
    iconClassName: "w-20 h-20", 
    animationClassName: "[animation-duration:15s] [animation-delay:-1s]" 
  },
];

export function FloatingIconsBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {backgroundIcons.map(({ id, lottieSrc, wrapperClassName, iconClassName, animationClassName }) => (
        <div
          key={id}
          className={cn(
            "absolute animate-hero-bg-icon-float blur-xs", // Maintained blur and float animation
            wrapperClassName // Handles position and opacity
          )}
          style={{ animationDuration: animationClassName.match(/animation-duration:(\S+)/)?.[1], animationDelay: animationClassName.match(/animation-delay:(\S+)/)?.[1] }}
        >
          <Player
            autoplay
            loop
            src={lottieSrc}
            className={cn(iconClassName)} // Handles size of the Lottie player
          />
        </div>
      ))}
    </div>
  );
}
