
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

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
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-primary">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={project.imageHint}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-2xl mb-2 text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 bg-secondary/30 border-t">
                <div className="flex space-x-4">
                  {project.liveLink && (
                    <Button asChild variant="default" className="font-semibold">
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {project.repoLink && (
                    <Button asChild variant="outline" className="font-semibold border-primary text-primary hover:bg-primary/10">
                      <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        View Code <ExternalLink className="ml-2 h-4 w-4" />
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
