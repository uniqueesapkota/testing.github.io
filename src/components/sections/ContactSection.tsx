
"use client";

import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Send, Instagram, Facebook, MessageSquare } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from 'framer-motion';

const cinematicEasing = [0.6, 0.01, -0.05, 0.95];

const YOUR_EMAIL = "uniquesapkota058@gmail.com"; 
const YOUR_LINKEDIN_URL = "https://www.linkedin.com/in/unique-sapkota-420997219/"; 
const YOUR_GITHUB_URL = "https://github.com/uniqueesapkota"; 
const YOUR_INSTAGRAM_URL = "https://www.instagram.com/uniqueesapkota?igsh=NzdzM3ZuaDVuYnF0&utm_source=qr";
const YOUR_FACEBOOK_URL = "https://www.facebook.com/unique.sapkota.1?mibextid=rS40aB7S9Ucbxw6v";
const YOUR_WHATSAPP_NUMBER = "9779806089328"; 

const titleParentVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1, ease: cinematicEasing } },
};

const titleChildVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: cinematicEasing } },
};

const iconButtonVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.15, 
    y: -3,
    boxShadow: "0px 8px 15px hsl(var(--primary)/0.3)",
    transition: { type: "spring", stiffness: 300, damping: 10 }
  }
};

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div 
          className="mb-10 md:mb-12"
          variants={titleParentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={titleChildVariants}>
            <Send className="mx-auto h-12 w-12 text-primary animate-subtle-float mb-2" />
          </motion.div>
          <motion.h2 
            variants={titleChildVariants}
            className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary"
          >
            Get in Touch
          </motion.h2>
        </motion.div>
        <motion.p 
          className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground mb-10 leading-relaxed text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: cinematicEasing, delay: 0.2 }}
        >
          I&apos;m always excited to discuss new projects, creative ideas, or opportunities to collaborate.
          Feel free to reach out!
        </motion.p>
        <motion.div 
            className="inline-block"
            initial="initial"
            whileHover="hover"
            variants={iconButtonVariants} // Reuse for general button hover
        >
            <Button asChild size="lg" className="font-semibold text-lg px-10 py-7 shadow-lg group">
            <a href={`mailto:${YOUR_EMAIL}`}>
                <Mail className="mr-2.5 h-5 w-5 group-hover:animate-wiggle" /> Send an Email
            </a>
            </Button>
        </motion.div>

        <motion.div 
          className="mt-16 flex justify-center space-x-3 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: cinematicEasing, delay: 0.4, staggerChildren: 0.1 }}
        >
            {[
                { href: YOUR_LINKEDIN_URL, label: "LinkedIn Profile", Icon: Linkedin },
                { href: YOUR_GITHUB_URL, label: "GitHub Profile", Icon: Github },
                { href: YOUR_INSTAGRAM_URL, label: "Instagram Profile", Icon: Instagram },
                { href: YOUR_FACEBOOK_URL, label: "Facebook Profile", Icon: Facebook },
                { href: `https://wa.me/${YOUR_WHATSAPP_NUMBER}`, label: "WhatsApp", Icon: MessageSquare }
            ].map((item, index) => (
                <motion.div
                    key={item.label}
                    initial={{y: 20, opacity: 0}}
                    animate={{y:0, opacity: 1}}
                    variants={iconButtonVariants} // Apply hover effect to the wrapper
                    whileHover="hover" // Trigger 'hover' variant
                    transition={{type: "spring", stiffness: 400, damping:10}}
                >
                    <Link href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                        <Button variant="outline" size="icon" className="rounded-full w-12 h-12 sm:w-14 sm:h-14 border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground hover:bg-primary group">
                            <item.Icon className="h-6 w-6 sm:h-7 sm:w-7 group-hover:animate-wiggle" />
                        </Button>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
