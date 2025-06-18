'use client';

import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ScrollAwareNav } from '@/components/layout/ScrollAwareNav';
import { FloatingIconsBackground } from '@/components/layout/FloatingIconsBackground';
import { motion } from 'framer-motion';

// Removed metadata export as it's not allowed in client components.
// Title and description are now set directly in the <head> below.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Unique Sapkota - Social Media Handler & Web Developer</title>
        <meta name="description" content="Portfolio of Unique Sapkota, an experienced Social Media Handler and Web Developer specializing in engagement, web development, and digital marketing." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Belleza&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <FloatingIconsBackground />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
        <ScrollAwareNav />
        <Toaster />
      </body>
    </html>
  );
}
