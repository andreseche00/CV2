import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EducationItem {
  id: string;
  type: 'degree' | 'certification' | 'course';
  title: string;
  institution: string;
  period: string;
  description?: string;
  details?: string[];
  gpa?: string;
  honors?: string;
}

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      id: "master",
      type: "degree",
      title: "Master of Science in Mechatronics Engineering",
      institution: "Politécnico di Torino (Italy)",
      period: "2008 - 2011",
      description: "Advanced studies in mechatronics systems, automation, and robotics with focus on industrial applications.",
      details: [
        "Specialized in industrial automation and control systems",
        "Advanced robotics and machine vision technologies",
        "Research in automated manufacturing processes",
        "International exchange program with European universities"
      ],
      honors: "Magna Cum Laude"
    },
    {
      id: "bachelor",
      type: "degree", 
      title: "Bachelor in Electronics Engineering",
      institution: "Universidad Javeriana (Colombia)",
      period: "2003 - 2008",
      description: "Comprehensive foundation in electronics, control systems, and automation technologies.",
      details: [
        "Strong foundation in electronics and control theory",
        "Hands-on experience with PLC programming",
        "Digital signal processing and embedded systems",
        "Final thesis on industrial automation systems"
      ],
      gpa: "4.2/5.0"
    },
    {
      id: "google-data",
      type: "certification",
      title: "Google Data Analytics Professional Certificate",
      institution: "Coursera.org",
      period: "May 2024",
      description: "Comprehensive data analytics program covering data collection, processing, analysis, and visualization.",
      details: [
        "Data cleaning and preparation techniques",
        "Statistical analysis and data visualization",
        "SQL for data analysis",
        "R programming for statistical computing",
        "Tableau for business intelligence"
      ]
    },
    {
      id: "microsoft-python",
      type: "certification",
      title: "Microsoft Python Development Professional Certificate",
      institution: "Coursera.org", 
      period: "July 2024",
      description: "Professional-level Python programming with focus on automation and data analysis applications.",
      details: [
        "Advanced Python programming concepts",
        "Data manipulation with pandas and numpy",
        "Automation scripting for industrial applications",
        "API development and integration",
        "Testing and debugging methodologies"
      ]
    },
    {
      id: "plc-advanced",
      type: "course",
      title: "Advanced PLC Programming & SCADA Integration",
      institution: "Siemens Training Center",
      period: "2019",
      description: "Advanced training in Siemens PLC programming and SCADA system integration."
    },
    {
      id: "machine-vision",
      type: "course",
      title: "Industrial Machine Vision Systems",
      institution: "Cognex Training Institute",
      period: "2018",
      description: "Comprehensive training in machine vision technology for quality control and automation."
    },
    {
      id: "project-management",
      type: "course",
      title: "International Project Management",
      institution: "PMI Barcelona Chapter",
      period: "2017",
      description: "Project management methodologies for international automation projects."
    },
    {
      id: "robotics",
      type: "course",
      title: "Industrial Robotics Integration",
      institution: "ABB Robotics Academy",
      period: "2016",
      description: "Robot programming, integration, and safety in industrial environments."
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'degree':
        return GraduationCap;
      case 'certification':
        return Award;
      case 'course':
        return BookOpen;
      default:
        return BookOpen;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'degree':
        return 'bg-primary/10 text-primary';
      case 'certification':
        return 'bg-blue-munsell/10 text-blue-munsell';
      case 'course':
        return 'bg-paynes-gray/10 text-paynes-gray';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'degree':
        return 'Degree';
      case 'certification':
        return 'Certification';
      case 'course':
        return 'Professional Course';
      default:
        return 'Education';
    }
  };

  const degreeCount = educationItems.filter(item => item.type === 'degree').length;
  const certificationCount = educationItems.filter(item => item.type === 'certification').length;
  const courseCount = educationItems.filter(item => item.type === 'course').length;

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Education & Learning</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development through formal education, certifications, 
            and specialized training programs in automation and emerging technologies.
          </p>
        </div>

        {/* Education Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center shadow-card border-0">
            <CardContent className="p-6">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">{degreeCount}</div>
              <div className="text-muted-foreground">Advanced Degrees</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card border-0">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-blue-munsell mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-munsell mb-2">{certificationCount}</div>
              <div className="text-muted-foreground">Professional Certifications</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card border-0">
            <CardContent className="p-6">
              <BookOpen className="h-12 w-12 text-paynes-gray mx-auto mb-4" />
              <div className="text-3xl font-bold text-paynes-gray mb-2">{courseCount}</div>
              <div className="text-muted-foreground">Specialized Courses</div>
            </CardContent>
          </Card>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationItems.map((item, index) => {
            const Icon = getIcon(item.type);
            return (
              <div key={item.id} className="timeline-item">
                <Card className="shadow-card border-0 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getTypeColor(item.type)}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                            <p className="text-primary font-medium">{item.institution}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-sm">
                              {getTypeLabel(item.type)}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{item.period}</span>
                          </div>
                        </div>

                        {item.description && (
                          <p className="text-muted-foreground mb-4">{item.description}</p>
                        )}

                        <div className="flex flex-wrap gap-4 text-sm">
                          {item.gpa && (
                            <div className="flex items-center gap-1">
                              <span className="font-medium text-foreground">GPA:</span>
                              <span className="text-primary">{item.gpa}</span>
                            </div>
                          )}
                          {item.honors && (
                            <div className="flex items-center gap-1">
                              <span className="font-medium text-foreground">Honors:</span>
                              <span className="text-primary">{item.honors}</span>
                            </div>
                          )}
                        </div>

                        {item.details && (
                          <div className="mt-4">
                            <h4 className="font-medium text-foreground mb-2">Key Learning Areas:</h4>
                            <div className="grid md:grid-cols-2 gap-2">
                              {item.details.map((detail, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm text-muted-foreground">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;