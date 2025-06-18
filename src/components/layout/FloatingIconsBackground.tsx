
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

const SvgGitHub = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const SvgJavaScript = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="currentColor" {...props}>
    <rect width="64" height="64" rx="8" ry="8" fill="#F7DF1E"/>
    <path d="M20.48 49.27H27.37V33.68H20.48V49.27ZM43.14 49.07C46.25 49.07 48.5 47.58 49.55 45.2L43.9 42.7C43.61 43.57 42.83 44.12 41.83 44.12C40.73 44.12 39.92 43.43 39.92 42.12V33.68H46.8V28.8H39.92V23.85H34.05V28.8H31.07V33.68H34.05V42.57C34.05 46.42 36.61 49.07 40.68 49.07C41.78 49.07 42.65 48.83 43.14 49.07Z" fill="#000"/>
  </svg>
);

const SvgPostman = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.66 3.52a.75.75 0 00-1.05-.21l-5.75 3.5a.75.75 0 000 1.28l5.75 3.5a.75.75 0 001.05-.21.75.75 0 00-.21-1.05L13.76 7.5l4.69-2.93a.75.75 0 00.21-1.05zM12.41 9.92a.75.75 0 00-1.05.21l-1.5 2.5a.75.75 0 000 .74l1.5 2.5a.75.75 0 101.26-.76L11.7 13.5l.92-1.54a.75.75 0 00-.21-1.04zm-1.16 7.56a.75.75 0 001.05.21l5.75-3.5a.75.75 0 000-1.28l-5.75-3.5a.75.75 0 10-.84 1.5L16.24 13.5l-4.69 2.93a.75.75 0 00-.21 1.05zM5.13 3.52a.75.75 0 00-.84 1.5L8.98 7.5l-4.69 2.93a.75.75 0 10.84 1.5l5.75-3.5a.75.75 0 000-1.28L5.13 3.52zm0 10.96a.75.75 0 00-.84 1.5l4.69 2.93-4.69 2.93a.75.75 0 10.84 1.5l5.75-3.5a.75.75 0 000-1.28l-5.75-3.5z"/>
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
  { id: "react", Icon: SvgReact, wrapperClassName: "top-[10%] left-[5%] opacity-[0.2]", iconClassName: "w-14 h-14 text-sky-400/70", animationClassName: "[animation-duration:18s] [animation-delay:-2s]" },
  { id: "nodejs", Icon: SvgNodeJs, wrapperClassName: "top-[12%] right-[8%] opacity-[0.22]", iconClassName: "w-16 h-16 text-green-500/70", animationClassName: "[animation-duration:22s] [animation-delay:-5s]" },
  { id: "code", Icon: CodeXml, wrapperClassName: "bottom-[8%] left-[15%] opacity-[0.18]", iconClassName: "w-14 h-14 text-primary/60", animationClassName: "[animation-duration:20s] [animation-delay:-8s]" },
  { id: "db", Icon: Database, wrapperClassName: "bottom-[15%] right-[10%] opacity-[0.2]", iconClassName: "w-12 h-12 text-accent/60", animationClassName: "[animation-duration:17s] [animation-delay:-3s]" },
  { id: "google", Icon: SvgGoogleG, wrapperClassName: "top-[45%] left-[40%] opacity-[0.15]", iconClassName: "w-10 h-10 text-blue-500/70", animationClassName: "[animation-duration:25s] [animation-delay:-10s]" },
  { id: "youtube", Icon: SvgYouTubePlay, wrapperClassName: "top-[65%] left-[2%] opacity-[0.23]", iconClassName: "w-16 h-16 text-red-600/80", animationClassName: "[animation-duration:19s] [animation-delay:-6s]" },
  { id: "github", Icon: SvgGitHub, wrapperClassName: "top-[30%] right-[25%] opacity-[0.2]", iconClassName: "w-14 h-14 text-neutral-400/70", animationClassName: "[animation-duration:21s] [animation-delay:-4s]" },
  { id: "javascript", Icon: SvgJavaScript, wrapperClassName: "bottom-[30%] left-[30%] opacity-[0.22]", iconClassName: "w-12 h-12", animationClassName: "[animation-duration:16s] [animation-delay:-7s]" }, // JS icon uses its own fill
  { id: "postman", Icon: SvgPostman, wrapperClassName: "top-[50%] right-[45%] opacity-[0.18]", iconClassName: "w-14 h-14 text-orange-500/70", animationClassName: "[animation-duration:23s] [animation-delay:-9s]" },
  { id: "code2", Icon: CodeXml, wrapperClassName: "top-[80%] right-[20%] opacity-[0.17]", iconClassName: "w-10 h-10 text-primary/50", animationClassName: "[animation-duration:15s] [animation-delay:-1s]" },
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

    