
"use client";
import { Briefcase, CodeXmlIcon, PaletteIcon, LightbulbIcon, UsersIcon, Share2Icon, BarChartIcon, FileTextIcon, NetworkIcon, TrendingUpIcon, CheckCircle, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const cinematicEasing = [0.6, 0.01, -0.05, 0.95];

interface Skill {
  name: string;
  icon: React.ElementType;
  description: string;
}

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  highlights?: string[];
}

const skills: Skill[] = [
  { name: "Web Development", icon: CodeXmlIcon, description: "Building responsive web applications using HTML, CSS, JavaScript, PHP, and modern front-end frameworks." },
  { name: "Social Media Management", icon: Share2Icon, description: "Developing and executing strategies to drive engagement and brand presence across diverse platforms." },
  { name: "Digital Marketing", icon: TrendingUpIcon, description: "Implementing campaigns, including SEO/PPC, keyword research, and ROI optimization." },
  { name: "Content Creation", icon: FileTextIcon, description: "Crafting branded communications and engaging content for social media and web." },
  { name: "Networking & IT", icon: NetworkIcon, description: "Designing, evaluating, and supporting WAN/LAN connectivity and network security." },
  { name: "Team Collaboration & Agile", icon: UsersIcon, description: "Working effectively in collaborative teams using Agile methodologies for timely project delivery." },
];

const experiences: Experience[] = [
  {
    title: "Social Media Assistant & Developer",
    company: "STEP TWO SOLUTIONS",
    duration: "Jan 2019 - Current",
    description: "Managed online social presence, created branded communications, and contributed to web development tasks.",
    highlights: [
      "Maintained company's online social presence and created branded communications.",
      "Organized webinars/live chats to engage with customers.",
      "Met 80% of deadlines in a time-sensitive role.",
      "Managed Facebook, Instagram, and Twitter content for brand consistency.",
      "Monitored KPIs and analyzed performance for social media strategy.",
      "A-B tested ad campaigns, improving ROI.",
      "Conducted keyword research and competitor SEO/PPC analysis.",
    ]
  },
  {
    title: "Full Stack Developer (Intern)",
    company: "PRATHAM IT SYSTEM",
    duration: "Jan 2024 - Jun 2024",
    description: "Gained hands-on experience in full-stack development, working on software implementation and web services.",
    highlights: [
        "Worked with senior developers/designers on software using HTML, CSS, JavaScript, PHP.",
        "Streamlined development workflows with Git and Agile methodologies.",
        "Assisted in creating cross-platform UI web components and built 3 responsive applications.",
        "Planned and engineered RESTful web services for dynamic datasets."
    ]
  },
  {
    title: "Networking Assistant",
    company: "NOBLE TECHNOLOGY",
    duration: "Jan 2022 - Jan 2024",
    description: "Provided support in network design, vendor management, and IT operations, ensuring optimal performance and security.",
     highlights: [
        "Collaborated on designing and implementing networking strategies.",
        "Assisted in vendor management and equipment procurement.",
        "Designed and evaluated WAN/LAN connectivity.",
        "Performed network security design and integration duties.",
        "Worked with cross-functional teams on technical requirements during project planning."
    ]
  }
];

const YOUR_RESUME_URL = "https://unique-link.tiiny.site/";

const titleParentVariants: Variants = {
  hidden: {},
  visible: { transition: { type: "tween", staggerChildren: 0.1, delayChildren: 0.1, ease: cinematicEasing } },
};

const titleChildVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "tween", duration: 0.6, ease: cinematicEasing } },
};

const cardHover = {
  scale: 1.03,
  boxShadow: "0px 10px 20px -8px hsl(var(--primary)/0.25)",
  transition: { type: "spring", stiffness: 300, damping: 12 }
};

export function AboutMeSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          variants={titleParentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
           <motion.div variants={titleChildVariants}>
            <Briefcase className="mx-auto h-12 w-12 text-primary animate-subtle-float mb-2" />
           </motion.div>
           <motion.h2 
            variants={titleChildVariants}
            className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary"
           >
             About Me
           </motion.h2>
            <motion.p 
              variants={titleChildVariants}
              className="text-muted-foreground mt-3 text-lg"
            >
              My journey, skills, and professional background.
            </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "tween", duration: 0.7, ease: cinematicEasing, delay: 0.2 }}
          >
            <h3 className="font-headline text-2xl md:text-3xl font-semibold mb-8 text-foreground">Work Experience</h3>
            <div className="space-y-8 relative pl-6 before:absolute before:inset-y-0 before:w-1 before:bg-primary/30 before:left-0 before:rounded-full">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="relative pl-8 before:absolute before:left-[-28px] before:top-1.5 before:w-4 before:h-4 before:bg-primary before:rounded-full before:ring-4 before:ring-background"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "tween", duration: 0.5, delay: index * 0.15, ease: cinematicEasing }}
                >
                  <motion.div whileHover={cardHover}>
                    <Card className="shadow-lg group bg-card border border-border/30 hover:border-primary/50 transition-colors duration-300">
                      <CardHeader>
                        <CardTitle className="font-headline text-xl text-primary group-hover:text-accent transition-colors">{exp.title}</CardTitle>
                        <p className="text-sm text-muted-foreground font-semibold">{exp.company} | {exp.duration}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-card-foreground mb-3 text-balance">{exp.description}</p>
                        {exp.highlights && (
                          <ul className="space-y-1.5 text-sm text-muted-foreground">
                            {exp.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start">
                                 <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0 group-hover:text-accent group-hover:scale-125 transition-all duration-300" />
                                 <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "tween", duration: 0.7, ease: cinematicEasing, delay: 0.3 }}
          >
            <h3 className="font-headline text-2xl md:text-3xl font-semibold mb-8 text-foreground">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "tween", duration: 0.5, delay: index * 0.15, ease: cinematicEasing }}
                >
                  <motion.div whileHover={cardHover}>
                    <Card className="group shadow-lg bg-card border border-border/30 hover:border-accent/50 transition-colors duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <skill.icon className="h-10 w-10 text-accent flex-shrink-0 mt-1 transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:text-primary group-hover:rotate-[8deg] group-hover:animate-wiggle" aria-hidden="true" />
                          <div>
                            <h4 className="font-headline text-lg font-medium text-primary-foreground group-hover:text-accent transition-colors">{skill.name}</h4>
                            <p className="text-sm text-muted-foreground text-balance">{skill.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
         <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "tween", duration: 0.7, ease: cinematicEasing, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground leading-relaxed text-balance">
                I am an experienced professional with a strong background in social media, web development, management, content creation, and digital marketing strategies. Known for dependability and a results-focused approach, I thrive in collaborative environments and adapt quickly to changing needs.
            </p>
            <motion.div 
              className="mt-10 inline-block"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 20px -5px hsl(var(--primary)/0.3)" }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Button asChild size="lg" className="font-semibold text-lg px-8 py-6 shadow-lg group">
                <Link href={YOUR_RESUME_URL} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2.5 h-5 w-5 group-hover:animate-wiggle" /> Download Resume
                </Link>
              </Button>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

