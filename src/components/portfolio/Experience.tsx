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
}

interface Experience {
  title: string;
  company: string;
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
      location: "Cali - Colombia",
      period: "March 2023 – Today",
      achievements: [
        "Coordinated, developed and installed industrial process automated lines for Pharma and Food of the region",
        "Updates and new components installed, boosted productivity, traceability, diagnosis and reliability",
        "Collaborated closely with customers to successfully define project requirements and designs",
        "Trained operators, maintenance teams, and collaborators in the installed systems and technologies"
      ],
      projects: [
        {
          title: "Pharmaceutical Production Line Automation",
          description: "Complete automation of pharmaceutical packaging line with traceability and quality control systems",
          role: "Project Leader & Lead Engineer",
          outcomes: ["Increased productivity by 40%", "Improved traceability by 100%", "Reduced defects by 60%"]
        },
        {
          title: "Food Processing Automation",
          description: "Automated food processing line with temperature control, packaging and labeling systems",
          role: "Automation Engineer & Team Coordinator",
          outcomes: ["Enhanced food safety compliance", "Reduced processing time by 35%", "Improved consistency"]
        }
      ]
    },
    {
      title: "Process Automation Engineer",
      company: "SGAR - Software de Gestión, Autómatas y Robots, S.L.",
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
          title: "Automotive Assembly Line Vision System",
          description: "Machine vision quality control system for automotive component assembly with robot integration",
          role: "Lead Automation Engineer",
          outcomes: ["Zero-defect quality achieved", "Reduced inspection time by 80%", "Automated robot calibration"]
        },
        {
          title: "Food Packaging Automation",
          description: "Complete packaging automation with weight verification, labeling and traceability systems",
          role: "Automation Engineer",
          outcomes: ["Improved packaging speed by 50%", "Enhanced product traceability", "Reduced material waste"]
        }
      ]
    },
    {
      title: "Process Automation Engineer",
      company: "Ghiggia Ingegneria d'Impianti",
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
          outcomes: ["Automated start-up procedures", "Remote monitoring capabilities", "Increased efficiency by 25%"]
        },
        {
          title: "Automotive Workstation Development",
          description: "Automated assembly workstations with vision inspection and robotic integration",
          role: "Development Engineer",
          outcomes: ["Improved assembly precision", "Reduced cycle time", "Enhanced worker safety"]
        }
      ]
    },
    {
      title: "Process Automation Engineer",
      company: "Bottero SPA",
      location: "Cuneo - Italy",
      period: "March 2014 – February 2016",
      achievements: [
        "Developed cutting optimizer for flat glass production lines within PLC using recursive functions",
        "Synchronized three cross-cutting heads and up to 12 longitudinal cutting heads",
        "Installed flat glass production lines in more than six different countries",
        "Projects lasted approximately five months with excellent international client relationships"
      ],
      projects: [
        {
          title: "Glass Cutting Optimization System",
          description: "Advanced PLC-based cutting optimizer with recursive algorithms for maximum material efficiency",
          role: "Senior Automation Engineer",
          outcomes: ["Reduced material waste by 30%", "Optimized cutting patterns", "Synchronized multi-head operation"]
        },
        {
          title: "International Production Line Installation",
          description: "Complete glass production lines installed across six countries with local team training",
          role: "Installation Engineer & Trainer",
          outcomes: ["100% successful installations", "Local team certification", "Strong client relationships"]
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
                      {exp.company}
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
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Experience;