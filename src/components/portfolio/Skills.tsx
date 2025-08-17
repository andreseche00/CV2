import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills: Skill[] = [
    // Technical Skills
    { name: "PLC Programming", level: 95, category: "Technical" },
    { name: "SCADA Systems", level: 90, category: "Technical" },
    { name: "HMI Development", level: 90, category: "Technical" },
    { name: "Industrial Networks", level: 85, category: "Technical" },
    { name: "Machine Vision", level: 80, category: "Technical" },
    { name: "Robotics Integration", level: 85, category: "Technical" },
    { name: "Data Analysis", level: 75, category: "Technical" },
    { name: "Python Programming", level: 70, category: "Technical" },
    
    // Soft Skills
    { name: "Project Leadership", level: 95, category: "Leadership" },
    { name: "Team Management", level: 90, category: "Leadership" },
    { name: "Client Relations", level: 90, category: "Leadership" },
    { name: "Cross-cultural Communication", level: 95, category: "Leadership" },
    { name: "Training & Mentoring", level: 90, category: "Leadership" },
    { name: "Problem Solving", level: 95, category: "Leadership" },
    
    // Languages
    { name: "Spanish", level: 100, category: "Languages" },
    { name: "English", level: 85, category: "Languages" },
    { name: "Italian", level: 80, category: "Languages" },
  ];

  const certifications = [
    "Google Data Analytics Professional Certificate",
    "Microsoft Python Development Professional Certificate",
    "Siemens PLC Programming Certification",
    "Rockwell Automation ControlLogix",
    "Industrial Network Security",
    "Project Management Professional (PMP) - In Progress"
  ];

  const skillCategories = {
    Technical: skills.filter(skill => skill.category === "Technical"),
    Leadership: skills.filter(skill => skill.category === "Leadership"),
    Languages: skills.filter(skill => skill.category === "Languages"),
  };

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <Progress 
        value={isVisible ? skill.level : 0} 
        className="h-2"
      />
    </div>
  );

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skillset built through 14+ years of international experience in industrial automation,
            project leadership, and cross-cultural team management.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <Card key={category} className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{category} Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Certifications & Training</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience Summary */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Experience Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Years of Experience</span>
                <span className="text-2xl font-bold text-primary">14+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Countries Worked</span>
                <span className="text-2xl font-bold text-primary">6+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Projects Completed</span>
                <span className="text-2xl font-bold text-primary">50+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Teams Led</span>
                <span className="text-2xl font-bold text-primary">20+</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;