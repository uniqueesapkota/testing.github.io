
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, Layers } from 'lucide-react';

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

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform Pro",
    description: "A full-featured online store with modern UI, secure payments, and robust inventory management. Built with Next.js, Tailwind CSS, and Stripe.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    liveLink: "#",
    repoLink: "#",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "E-commerce"]
  },
  {
    id: "2",
    title: "Insightful Dashboard UI",
    description: "A dynamic data visualization dashboard providing real-time analytics and customizable reports. Designed for optimal user experience.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "data dashboard",
    liveLink: "#",
    tags: ["React", "D3.js", "UI/UX", "Analytics"]
  },
  {
    id: "3",
    title: "Collaborative Task Manager",
    description: "A web application designed to streamline team workflows with features like task assignment, progress tracking, and real-time updates.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "task management",
    repoLink: "#",
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

export function ProjectGallery() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Layers className="mx-auto h-12 w-12 text-primary animate-subtle-float mb-2" />
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-2 text-lg">A glimpse into my development journey and capabilities.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group flex flex-col overflow-hidden shadow-lg hover:animate-card-hover-lift transition-all duration-300 ease-in-out rounded-xl border border-transparent hover:border-primary/50"
            >
              <CardHeader className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-xl">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={project.imageHint}
                    className="transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-110"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/50 transition-all duration-300"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-2xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed text-balance">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium bg-accent/20 text-accent-foreground px-3 py-1.5 rounded-full transition-all duration-300 ease-in-out group-hover:bg-primary/80 group-hover:text-primary-foreground group-hover:animate-tag-hover-pop group-hover:shadow-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 bg-card border-t rounded-b-xl">
                <div className="flex space-x-4">
                  {project.liveLink && (
                    <Button asChild variant="default" className="font-semibold hover:scale-105 hover:brightness-110 transform transition-transform duration-200 hover:shadow-md hover:bg-primary/90 group-hover:animate-subtle-glow group/button">
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink className="ml-2 h-4 w-4 group-hover/button:animate-wiggle" />
                      </Link>
                    </Button>
                  )}
                  {project.repoLink && (
                    <Button asChild variant="outline" className="font-semibold border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground hover:bg-primary hover:scale-105 hover:brightness-110 transform transition-transform duration-200 hover:shadow-md group-hover:animate-subtle-glow group/button">
                      <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        View Code <ExternalLink className="ml-2 h-4 w-4 group-hover/button:animate-wiggle" />
                      </Link>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
