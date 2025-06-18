
'use client';

import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ScrollAwareNav } from '@/components/layout/ScrollAwareNav';
// import { FloatingIconsBackground } from '@/components/layout/FloatingIconsBackground'; // Removed static import
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic'; // Import dynamic

// Dynamically import FloatingIconsBackground with SSR turned off
const FloatingIconsBackground = dynamic(
  () => import('@/components/layout/FloatingIconsBackground').then(mod => mod.FloatingIconsBackground),
  { ssr: false }
);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Unique Sapkota - Social Media Handler & Web Developer</title>
        <meta name="description" content="Portfolio of Unique Sapkota, an experienced Social Media Handler and Web Developer specializing in engagement, web development, and digital marketing." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Belleza&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <FloatingIconsBackground />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{
                type: "tween", 
                duration: 0.5
              }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
          <ScrollAwareNav />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
