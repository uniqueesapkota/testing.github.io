
import { Briefcase, CodeXmlIcon, PaletteIcon, LightbulbIcon, UsersIcon, Share2Icon, BarChartIcon, FileTextIcon, NetworkIcon, TrendingUpIcon, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

export function AboutMeSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
           <Briefcase className="mx-auto h-12 w-12 text-primary animate-subtle-float mb-2" />
           <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
             About Me
           </h2>
            <p className="text-muted-foreground mt-2 text-lg">My journey, skills, and professional background.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <h3 className="font-headline text-2xl md:text-3xl font-semibold mb-8 text-foreground">Work Experience</h3>
            <div className="space-y-8 relative pl-6 before:absolute before:inset-y-0 before:w-1 before:bg-primary/30 before:left-0 before:rounded-full">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-[-28px] before:top-1.5 before:w-4 before:h-4 before:bg-primary before:rounded-full before:ring-4 before:ring-background shadow-primary-glow/30">
                  <Card className="shadow-lg hover:shadow-xl hover:shadow-primary-glow hover:border-primary/70 transform hover:-translate-y-1.5 transition-all duration-300 ease-in-out rounded-lg group">
                    <CardHeader>
                      <CardTitle className="font-headline text-xl text-primary group-hover:text-accent transition-colors">{exp.title}</CardTitle>
                      <p className="text-sm text-muted-foreground font-semibold">{exp.company} | {exp.duration}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground mb-3 text-balance">{exp.description}</p>
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
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-headline text-2xl md:text-3xl font-semibold mb-8 text-foreground">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <Card key={skill.name} className="group shadow-lg hover:shadow-xl hover:shadow-accent-glow hover:border-accent/70 transform hover:-translate-y-1.5 transition-all duration-300 ease-in-out rounded-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <skill.icon className="h-10 w-10 text-accent flex-shrink-0 mt-1 transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:text-primary group-hover:rotate-[8deg] group-hover:animate-wiggle" aria-hidden="true" />
                      <div>
                        <h4 className="font-headline text-lg font-medium text-foreground group-hover:text-accent transition-colors">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground text-balance">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
         <div className="mt-16 text-center animate-fadeInUp [animation-delay:0.5s]">
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground leading-relaxed text-balance">
                I am an experienced professional with a strong background in social media, web development, management, content creation, and digital marketing strategies. Known for dependability and a results-focused approach, I thrive in collaborative environments and adapt quickly to changing needs.
            </p>
        </div>
      </div>
    </section>
  );
}
