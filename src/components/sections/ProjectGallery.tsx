
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, Layers, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  liveLink?: string;
  repoLink?: string;
  tags: string[];
}

const projectsData: Project[] = [
  {
    id: "1",
    title: "Quick Commerce",
    description: "A full-featured online store with modern UI, secure payments, and robust inventory management. Built with Next.js, Tailwind CSS, and Stripe.",
    imageUrl: "https://i.postimg.cc/RVYcPX4G/Screenshot-2025-06-1-imresizer.jpg",
    imageHint: "online store",
    liveLink: "https://commerce-next-cic5.vercel.app/",
    repoLink: "#",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "E-commerce"]
  },
  {
    id: "2",
    title: "AI visualization - Visualytica",
    description: "A dynamic data visualization dashboard providing real-time analytics and customizable reports. Designed for optimal user experience.",
    imageUrl: "https://i.postimg.cc/ZncMkbGh/Screenshot-2025-06-18-171812.png",
    imageHint: "data dashboard",
    liveLink: "https://vizualytica.vercel.app/",
    tags: ["React", "D3.js", "UI/UX", "Analytics"]
  },
  {
    id: "3",
    title: "Collaborative Task Manager",
    description: "A web application designed to streamline team workflows with features like task assignment, progress tracking, and real-time updates.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "task management",
    repoLink: "https://vizualytica.vercel.app/",
    tags: ["Vue.js", "Firebase", "Productivity", "Team Tool"]
  },
   {
    id: "4",
    title: "AI-Powered Content Generator",
    description: "A tool that leverages generative AI to create engaging marketing copy, blog posts, and social media updates based on user prompts.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "ai writing",
    liveLink: "#",
    tags: ["Python", "GenAI", "NLP", "Content Creation"]
  }
];

const titleParentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.5, 
    },
  },
};

const titleChildVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.6 },
  },
};

const initialProjectsToShow = 2;

export function ProjectGallery() {
  const [isGalleryExpanded, setIsGalleryExpanded] = useState(false);

  const projectsToDisplay = isGalleryExpanded ? projectsData : projectsData.slice(0, initialProjectsToShow);

  const cardHoverEffect = {
    scale: 1.03,
    boxShadow: "0px 15px 25px -8px hsl(var(--primary)/0.25)",
    transition: { type: "spring", stiffness: 250, damping: 15 }
  };

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-10 md:mb-14"
          variants={titleParentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={titleChildVariants}>
            <Layers className="mx-auto h-12 w-12 text-primary animate-subtle-float mb-2" />
          </motion.div>
          <motion.h2
            variants={titleChildVariants}
            className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={titleChildVariants}
            className="text-muted-foreground mt-3 text-lg"
          >
            A glimpse into my development journey and capabilities.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" style={{ perspective: '1000px' }}>
          <AnimatePresence initial={false}>
            {projectsToDisplay.map((project) => (
              <motion.div
                key={project.id}
                layout // Animates layout changes (size, position)
                initial={{ opacity: 0, height: 0, y: 20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.5, type: 'spring', bounce: 0.1 }}
                whileHover={cardHoverEffect}
                className="flex flex-col" // Added to ensure motion.div takes up card space correctly
              >
                <Card
                  className="group flex flex-col overflow-hidden shadow-xl bg-card border-2 border-transparent hover:border-primary/30" // Removed h-full
                >
                  <CardHeader className="p-0">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{objectFit: "cover"}}
                        data-ai-hint={project.imageHint}
                        className="transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110"
                      />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 flex-grow flex flex-col">
                    <CardTitle className="font-headline text-lg mb-1.5 text-primary-foreground group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                    {isGalleryExpanded && (
                      <>
                        <CardDescription className="text-muted-foreground text-sm mb-3 leading-relaxed text-balance flex-grow">{project.description}</CardDescription>
                        <div className="flex flex-wrap gap-1.5 mb-1 mt-auto">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-medium bg-accent/20 text-accent-foreground px-2.5 py-1 rounded-full transition-all duration-300 ease-in-out group-hover:bg-primary/80 group-hover:text-primary-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </CardContent>
                  {isGalleryExpanded && (
                    <CardFooter className="p-4 bg-card/50 border-t border-border/50 rounded-b-lg">
                      <div className="flex space-x-2.5">
                        {project.liveLink && (
                          <motion.div whileHover={{scale: 1.08}} transition={{type: "spring", stiffness: 300}}>
                            <Button asChild variant="default" size="sm" className="font-semibold group/button text-xs px-3 py-1.5 h-auto">
                              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                Live Demo <ExternalLink className="ml-1 h-3.5 w-3.5 group-hover/button:animate-wiggle" />
                              </Link>
                            </Button>
                          </motion.div>
                        )}
                        {project.repoLink && (
                          <motion.div whileHover={{scale: 1.08}} transition={{type: "spring", stiffness: 300}}>
                            <Button asChild variant="outline" size="sm" className="font-semibold border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground hover:bg-primary group/button text-xs px-3 py-1.5 h-auto">
                              <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                                View Code <ExternalLink className="ml-1 h-3.5 w-3.5 group-hover/button:animate-wiggle" />
                              </Link>
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </CardFooter>
                  )}
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {projectsData.length > initialProjectsToShow && (
          <div className="mt-10 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setIsGalleryExpanded(!isGalleryExpanded)}
                variant="outline"
                size="lg"
                className="font-semibold group"
              >
                {isGalleryExpanded ? "Show Fewer Projects" : "View All Projects"}
                {isGalleryExpanded ? (
                  <ChevronUp className="ml-2 h-5 w-5 group-hover:animate-wiggle" />
                ) : (
                  <ChevronDown className="ml-2 h-5 w-5 group-hover:animate-wiggle" />
                )}
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
