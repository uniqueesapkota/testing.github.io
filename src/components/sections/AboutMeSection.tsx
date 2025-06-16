
import { Briefcase, CodeXmlIcon, PaletteIcon, LightbulbIcon, UsersIcon, MessageSquareIcon, DatabaseIcon, AwardIcon, TrendingUpIcon } from 'lucide-react';
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
  { name: "Web Development", icon: CodeXmlIcon, description: "Building responsive and performant web applications using modern frameworks like React, Next.js, and Vue." },
  { name: "UI/UX Design", icon: PaletteIcon, description: "Crafting intuitive and visually appealing user interfaces with a focus on user-centered design principles." },
  { name: "Problem Solving", icon: LightbulbIcon, description: "Analyzing complex challenges and developing innovative, effective solutions." },
  { name: "Agile Methodologies", icon: TrendingUpIcon, description: "Experienced in Scrum and Kanban, fostering iterative development and continuous improvement." },
  { name: "Database Management", icon: DatabaseIcon, description: "Proficient in SQL and NoSQL databases, ensuring data integrity and efficient querying." },
  { name: "Team Collaboration", icon: UsersIcon, description: "Working effectively within diverse teams to achieve common goals and deliver high-quality products." },
];

const experiences: Experience[] = [
  {
    title: "Senior Full-Stack Developer",
    company: "Innovatech Solutions Ltd.",
    duration: "2021 - Present",
    description: "Led the development of cutting-edge web applications, mentored junior developers, and contributed to architectural decisions.",
    highlights: [
      "Successfully launched three major client projects, resulting in a 25% increase in user engagement.",
      "Implemented a new microservices architecture, improving system scalability and reducing downtime by 15%.",
      "Championed the adoption of TypeScript across projects, enhancing code quality and developer productivity."
    ]
  },
  {
    title: "UX/UI Designer & Frontend Developer",
    company: "Creative Digital Agency",
    duration: "2019 - 2021",
    description: "Designed and developed user interfaces for various clients, focusing on creating seamless and engaging digital experiences.",
    highlights: [
        "Redesigned a key client's e-commerce platform, leading to a 40% improvement in conversion rates.",
        "Developed a comprehensive design system, ensuring consistency and efficiency across multiple projects."
    ]
  },
  {
    title: "Junior Web Developer",
    company: "Tech Start Co.",
    duration: "2017 - 2019",
    description: "Contributed to the development and maintenance of company websites and internal tools, gaining foundational experience in web technologies.",
     highlights: [
        "Assisted in migrating legacy systems to modern JavaScript frameworks.",
        "Received 'Rising Star' award for proactive learning and contribution to team projects."
    ]
  }
];

export function AboutMeSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-primary">
          About Me
        </h2>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <h3 className="font-headline text-2xl md:text-3xl font-semibold mb-8 text-foreground">Work Experience</h3>
            <div className="space-y-8 relative pl-6 before:absolute before:inset-y-0 before:w-0.5 before:bg-border before:left-0">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-[-26px] before:top-1 before:w-3 before:h-3 before:bg-primary before:rounded-full before:ring-4 before:ring-background">
                  <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="font-headline text-xl text-primary">{exp.title}</CardTitle>
                      <p className="text-sm text-muted-foreground font-semibold">{exp.company} | {exp.duration}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground mb-3">{exp.description}</p>
                      {exp.highlights && (
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {exp.highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
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
                <Card key={skill.name} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <skill.icon className="h-8 w-8 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <h4 className="font-headline text-lg font-medium text-foreground">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
         <div className="mt-16 text-center">
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground leading-relaxed">
                I am a passionate and results-driven professional with a knack for creating elegant and effective digital solutions. My journey in tech has been fueled by a love for learning and a commitment to excellence. I thrive in collaborative environments and am always eager to take on new challenges that push the boundaries of innovation.
            </p>
        </div>
      </div>
    </section>
  );
}
