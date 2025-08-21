import { useState } from 'react';
import { Calendar, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  role: string;
  outcomes: string[];
  image?: string;
  FinalCustomer: string;
}

interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  achievements: string[];
  projects: Project[];
}

const Experience = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const experiences: Experience[] = [
    {
      title: "Process Automation Engineer & Team Leader",
      company: "SANTECHS Soluciones Tecnológicas",
      companyUrl: "https://santechs.com.co",
      location: "Cali - Colombia",
      period: "March 2023 – Today",
      achievements: [
        "Coordinated, developed and installed industrial process automated lines for Pharma and Food of the region.",
        "Updates and new components installed, boosted productivity, traceability, diagnosis and reliability.",
        "Collaborated closely with customers to successfully define project requirements and designs.",
        "Trained operators, maintenance teams, and collaborators in the installed systems and technologies."
      ],
      projects: [
        {
          title: "6 Pharma reactors + 3 filling stations + CIP Automation",
          description: "Complete automation of 6 pharmaceutical production reactors + automated product transfer to 3 different filling lines + automated centralized cleaning CIP procedure. All processes included traceability, user security and quality control systems",
          role: "Project Leader & Lead Engineer",
          outcomes: ["Increased productivity by 30% (before, production transfer to filling lines was done manually). ", "Improved traceability by 100%.", "Reduced cleaning time by 60% (CIP procedures were done manually, connecting pipes to each tank)."],
          FinalCustomer: "Tecnoquímicas Colombia",
        },
        {
          title: "Liquid Food Essence Automated Filling Machine",
          description: "Automated filling machine, processing 10 containers at a time. Multi format/volume capability. ",
          role: "Automation Engineer & PLC + HMI designer",
          outcomes: ["Enhanced food safety compliance", "Reduced processing time by 20%", "Improved consistency", "OEE Measurement by day and by shift, for further analysis" ],
          FinalCustomer: "Fleischmann Colombia",
        },
        {
          title: "Rockwell MCC Installation and startup",
          description: "Installation and startup of 20 MCC columns in total for the lipid industry. Pumps and motors control, protection and automation ",
          role: "Automation Engineer & Lead Engineer",
          outcomes: ["Enhanced food safety compliance", "Full plant automation", "Production start-up", "Maintenance team and operators training " ],
          FinalCustomer: "Allianza Team USA",
        }
      ]
    },
    {
      title: "Process Automation Engineer",
      company: "SGAR - Software de Gestión, Autómatas y Robots, S.L.",
      companyUrl: "https://sgarsl.net/",
      location: "Barcelona - Spain",
      period: "May 2018 – August 2022",
      achievements: [
        "Developed industrial automation projects using the latest technology for major companies in automotive and food sectors",
        "Used machine vision technology, distance and strain gauge measurements, robot interfaces, data export to databases",
        "Implemented ultrasonic welding, laser engraving, and advanced measurement systems",
        "Installed production lines at client facilities, from initial assembly to continuous production stabilization"
      ],
      projects: [
        {
          title: "Mercedes Benz e-Vito automated battery installation station",
          description: "PLC & HMI SW development and installation for battery pack assembly station in the Mercedes Benz Vitoria production line",
          role: "Lead Automation Engineer & SW Developer",
          outcomes: ["Zero-defect quality achieved", "Reduced inspection time by 80%", "Automated robot calibration"],
          FinalCustomer: "Mercedes Benz Spain",
        },
        {
          title: "Food Packaging Automation",
          description: "Complete packaging automation with weight verification, labeling and traceability systems",
          role: "Automation Engineer",
          outcomes: ["Improved packaging speed by 50%", "Enhanced product traceability", "Reduced material waste"],
          FinalCustomer: "Allianza Team USA",
        }
      ]
    },
    {
      title: "Process Automation Engineer",
      company: "Ghiggia Ingegneria d'Impianti",
      companyUrl: "http://www.ghiggiaeng.com/it/home/",
      location: "Scarmagno - Italy",
      period: "March 2016 – July 2017",
      achievements: [
        "Developed automatic start-up and automated production management of small hydroelectric power plants (0.5MW - 1.5MW)",
        "Projects implemented in Italy and international locations",
        "Developed workstations and assembly lines for automotive manufacturers worldwide",
        "Integrated artificial vision, ultrasonic welding, robot interfaces, and user-friendly HMIs"
      ],
      projects: [
        {
          title: "Hydroelectric Plant Automation",
          description: "Complete automation system for small hydroelectric power plants with remote monitoring",
          role: "Automation Engineer",
          outcomes: ["Automated start-up procedures", "Remote monitoring capabilities", "Increased efficiency by 25%"],
          FinalCustomer: "Allianza Team USA",
        },
        {
          title: "Automotive Workstation Development",
          description: "Automated assembly workstations with vision inspection and robotic integration",
          role: "Development Engineer",
          outcomes: ["Improved assembly precision", "Reduced cycle time", "Enhanced worker safety"],
          FinalCustomer: "Allianza Team USA",
        }
      ]
    },
    {
      title: "Process Automation Engineer",
      company: "Bottero SPA",
      companyUrl: "https://www.bottero.com/",
      location: "Cuneo - Italy",
      period: "September 2011 – November 2015",
      achievements: [
        "Developed cutting optimizer for flat glass production lines within PLC, using recursive functions",
        "Synchronized three cross-cutting heads and up to 12 longitudinal cutting heads, to produce the customer's requested formats",
        "Installed flat glass production lines in more than six different countries",
        "Projects lasted approximately five months with excellent international client relationships"
      ],
      projects: [
        {
          title: "Multiple Float Glass automated production lines",
          description: "Automated, non stop, float glass production line and production startup. Glass optimization and cutting system using PLC, that coordinates X-Y cutting heads, defect detection, measurenment systems, unloading systems, etc.  ",
          role: "PLC + HMI Programmar and Installer",
          outcomes: [],
          FinalCustomer: "Vivix Vidrios Planos Brasil - Guardian Glass Thailand - SiseCam Glass Bulgaria - Xinyi Glass China - El Nasr Glass Egypt ",
        },
        {
          title: "Ultra-thin Float Glass automated production line",
          description: "Ultra-thin glass production lines for electronic devices usage",
          role: "PLC + HMI Programmar and Installer",
          outcomes: [],
          FinalCustomer: "Xinyi Glass China",
        }
      ]
    }
  ];

  const ProjectGrid = ({ projects }: { projects: Project[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {projects.map((project, idx) => (
        <Card 
          key={idx}
          className="project-card cursor-pointer group"
          onClick={() => setSelectedProject(project)}
        >
          <CardContent className="p-4">
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h4>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
              {project.description}
            </p>
            <div className="flex items-center justify-between mt-3">
              <Badge variant="secondary" className="text-xs">
                {project.role}
              </Badge>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Over 14 years of international experience in industrial automation, from Italy to Spain to Colombia,
            leading complex projects and teams across diverse industries.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <Card className="shadow-card border-0">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                      <div className="flex items-center gap-4 text-muted-foreground mt-2">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-1"
                        >
                          {exp.company}
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <ArrowRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Projects</h4>
                    <ProjectGrid projects={exp.projects} />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            </DialogHeader>
            {selectedProject && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Project Description</h4>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">My Role</h4>
                  <Badge variant="secondary">{selectedProject.role}</Badge>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Results & Outcomes</h4>
                  <ul className="space-y-2">
                    {selectedProject.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <ArrowRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Final Customer</h4>
                  <Badge variant="secondary">{selectedProject.FinalCustomer}</Badge>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Experience;