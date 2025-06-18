
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Send, Instagram, Facebook, MessageSquare } from "lucide-react";
import Link from "next/link";

const YOUR_EMAIL = "uniquesapkota058@gmail.com"; 
const YOUR_LINKEDIN_URL = "https://www.linkedin.com/in/unique-sapkota-420997219/"; 
const YOUR_GITHUB_URL = "https://github.com/uniqueesapkota"; 
const YOUR_INSTAGRAM_URL = "https://www.instagram.com/uniqueesapkota?igsh=NzdzM3ZuaDVuYnF0&utm_source=qr";
const YOUR_FACEBOOK_URL = "https://www.facebook.com/unique.sapkota.1?mibextid=rS40aB7S9Ucbxw6v";
const YOUR_WHATSAPP_NUMBER = "12345678900"; // Replace with your full WhatsApp number including country code (e.g., 1XXXXXXXXXX for US)


export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="mb-10 md:mb-12">
          <Send className="mx-auto h-12 w-12 text-primary animate-subtle-float mb-2" />
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Get in Touch
          </h2>
        </div>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground mb-10 leading-relaxed text-balance">
          I&apos;m always excited to discuss new projects, creative ideas, or opportunities to collaborate.
          Feel free to reach out!
        </p>
        <Button asChild size="lg" className="font-semibold text-lg px-10 py-7 shadow-lg hover:animate-subtle-glow hover:scale-105 hover:brightness-110 transform transition-all duration-300 ease-in-out group">
          <a href={`mailto:${YOUR_EMAIL}`}>
            <Mail className="mr-2.5 h-5 w-5 group-hover:animate-wiggle" /> Send an Email
          </a>
        </Button>

        <div className="mt-16 flex justify-center space-x-3 sm:space-x-4">
            <Link href={YOUR_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 sm:w-14 sm:h-14 border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground hover:bg-primary hover:scale-110 hover:brightness-110 hover:shadow-primary-glow transform transition-all duration-300 ease-in-out group">
                    <Linkedin className="h-6 w-6 sm:h-7 sm:w-7 group-hover:animate-wiggle" />
                </Button>
            </Link>
            <Link href={YOUR_GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                 <Button variant="outline" size="icon" className="rounded-full w-12 h-12 sm:w-14 sm:h-14 border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground hover:bg-primary hover:scale-110 hover:brightness-110 hover:shadow-primary-glow transform transition-all duration-300 ease-in-out group">
                    <Github className="h-6 w-6 sm:h-7 sm:w-7 group-hover:animate-wiggle" />
                </Button>
            </Link>
            <Link href={YOUR_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 sm:w-14 sm:h-14 border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground hover:bg-primary hover:scale-110 hover:brightness-110 hover:shadow-primary-glow transform transition-all duration-300 ease-in-out group">
                    <Instagram className="h-6 w-6 sm:h-7 sm:w-7 group-hover:animate-wiggle" />
                </Button>
            </Link>
            <Link href={YOUR_FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
                 <Button variant="outline" size="icon" className="rounded-full w-12 h-12 sm:w-14 sm:h-14 border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground hover:bg-primary hover:scale-110 hover:brightness-110 hover:shadow-primary-glow transform transition-all duration-300 ease-in-out group">
                    <Facebook className="h-6 w-6 sm:h-7 sm:w-7 group-hover:animate-wiggle" />
                </Button>
            </Link>
            <Link href={`https://wa.me/${YOUR_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                 <Button variant="outline" size="icon" className="rounded-full w-12 h-12 sm:w-14 sm:h-14 border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground hover:bg-primary hover:scale-110 hover:brightness-110 hover:shadow-primary-glow transform transition-all duration-300 ease-in-out group">
                    <MessageSquare className="h-6 w-6 sm:h-7 sm:w-7 group-hover:animate-wiggle" />
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
