
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const YOUR_EMAIL = "alex.doe.portfolio@example.com"; // Replace with your actual email
const YOUR_LINKEDIN_URL = "https://www.linkedin.com/in/alexdoe"; // Replace with your LinkedIn URL
const YOUR_GITHUB_URL = "https://github.com/alexdoe"; // Replace with your GitHub URL


export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground mb-10 leading-relaxed">
          I&apos;m always excited to discuss new projects, creative ideas, or opportunities to collaborate.
          Feel free to reach out!
        </p>
        <Button asChild size="lg" className="font-semibold text-lg px-8 py-6">
          <a href={`mailto:${YOUR_EMAIL}`}>
            <Mail className="mr-2 h-5 w-5" /> Send an Email
          </a>
        </Button>

        <div className="mt-12 flex justify-center space-x-6">
            <Link href={YOUR_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Button variant="outline" size="icon" className="rounded-full border-primary text-primary hover:bg-primary/10">
                    <Linkedin className="h-6 w-6" />
                </Button>
            </Link>
            <Link href={YOUR_GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                 <Button variant="outline" size="icon" className="rounded-full border-primary text-primary hover:bg-primary/10">
                    <Github className="h-6 w-6" />
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
