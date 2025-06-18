
"use client";

import type { ElementType } from 'react';
import { CodeXml, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

// Simplified SVG Icons as React Components
const SvgReact = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 105 91.4" fill="currentColor" {...props}>
    <ellipse ry="45.3" rx="11" transform="rotate(90)" cy="0" cx="45.7"></ellipse>
    <ellipse ry="45.3" rx="11" transform="rotate(30)" cy="0" cx="45.7"></ellipse>
    <ellipse ry="45.3" rx="11" transform="rotate(-30)" cy="0" cx="45.7"></ellipse>
    <circle r="10.1" cy="45.7" cx="52.5"></circle>
  </svg>
);

const SvgNodeJs = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" fill="currentColor" {...props}>
    <path d="M128 0L0 73.9v147.8L128 295.6l128-73.9V73.9L128 0zM76.2 210.6l-34-19.6v-39.2l34 19.6v39.2zm0-49l-34-19.6v-39.2l34 19.6v39.2zm103.6 49l-34 19.6v-39.2l34-19.6v39.2zm0-49l-34 19.6v-39.2l34-19.6v39.2zm0-49l-34 19.6V73.4l34-19.6v39.2zM128 147.8l-34-19.6V89l34-19.6 34 19.6v39.2l-34 19.6z"></path>
  </svg>
);

const SvgGoogleG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5.03001 16.37 5.03001 12.55C5.03001 8.73 8.34001 5.82 12.19 5.82C14.04 5.82 15.33 6.57 16.03 7.27L18.25 5.08C16.36 3.27 14.13 2.28 12.19 2.28C6.91001 2.28 2.73001 6.78 2.73001 12.55C2.73001 18.32 6.91001 22.82 12.19 22.82C17.8 22.82 21.52 18.81 21.52 12.75C21.52 11.92 21.45 11.49 21.35 11.1V11.1Z"></path>
  </svg>
);

const SvgYouTubePlay = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 28 20" fill="currentColor" {...props}>
    <path d="M27.363 3.033C27.003 1.839 26.013.833 24.833.495 22.646 0 14 0 14 0S5.354 0 3.167.495C1.987.833.997 1.839.637 3.033A31.043 31.043 0 0 0 0 10a31.043 31.043 0 0 0 .637 6.967c.36 1.194 1.35 2.2 2.53 2.538C5.354 20 14 20 14 20s8.646 0 10.833-.495a3.776 3.776 0 0 0 2.53-2.538A31.043 31.043 0 0 0 28 10a31.043 31.043 0 0 0-.637-6.967zM11.2 14.286V5.714L18.4 10l-7.2 4.286z"></path>
  </svg>
);

interface BackgroundIconConfig {
  id: string;
  Icon: ElementType;
  wrapperClassName: string; 
  iconClassName: string; 
  animationClassName: string;
}

const backgroundIcons: BackgroundIconConfig[] = [
  { id: "react", Icon: SvgReact, wrapperClassName: "top-[10%] left-[10%] opacity-[0.2]", iconClassName: "w-16 h-16 text-primary/70", animationClassName: "[animation-duration:18s] [animation-delay:-2s]" },
  { id: "nodejs", Icon: SvgNodeJs, wrapperClassName: "top-[15%] right-[12%] opacity-[0.22]", iconClassName: "w-20 h-20 text-accent/70", animationClassName: "[animation-duration:22s] [animation-delay:-5s]" },
  { id: "code", Icon: CodeXml, wrapperClassName: "bottom-[10%] left-[20%] opacity-[0.2]", iconClassName: "w-16 h-16 text-primary/70", animationClassName: "[animation-duration:20s] [animation-delay:-8s]" },
  { id: "db", Icon: Database, wrapperClassName: "bottom-[20%] right-[15%] opacity-[0.22]", iconClassName: "w-14 h-14 text-accent/70", animationClassName: "[animation-duration:17s] [animation-delay:-3s]" },
  { id: "google", Icon: SvgGoogleG, wrapperClassName: "top-[50%] left-[45%] opacity-[0.18]", iconClassName: "w-12 h-12 text-primary/60", animationClassName: "[animation-duration:25s] [animation-delay:-10s]" },
  { id: "youtube", Icon: SvgYouTubePlay, wrapperClassName: "top-[70%] left-[5%] opacity-[0.25]", iconClassName: "w-20 h-20 text-red-500/70", animationClassName: "[animation-duration:19s] [animation-delay:-6s]" },
  // Add more icons as needed, for example:
  // { id: "microsoft", Icon: SvgMicrosoft, wrapperClassName: "top-[30%] left-[60%] opacity-[0.2]", iconClassName: "w-14 h-14 text-blue-500/70", animationClassName: "[animation-duration:23s] [animation-delay:-4s]" },
  // { id: "tailwind", Icon: SvgTailwind, wrapperClassName: "bottom-[30%] right-[40%] opacity-[0.19]", iconClassName: "w-18 h-18 text-sky-500/70", animationClassName: "[animation-duration:16s] [animation-delay:-7s]" },
];

export function FloatingIconsBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {backgroundIcons.map(({ id, Icon, wrapperClassName, iconClassName, animationClassName }) => (
        <div
          key={id}
          className={cn(
            "absolute animate-hero-bg-icon-float blur-xs",
            wrapperClassName,
            animationClassName
          )}
        >
          <Icon className={cn(iconClassName)} />
        </div>
      ))}
    </div>
  );
}
