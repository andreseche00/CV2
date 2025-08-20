import { Cog, Users, Lightbulb, Globe, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const services = [
    {
      icon: Cog,
      title: "Industrial Process Automation",
      description: "Definition, design, development and implementation of automated production lines using PLC, HMI and SCADA systems for enhanced productivity and reliability."
    },
    {
      icon: Users,
      title: "Project Leadership & Training",
      description: "Leading development teams and providing comprehensive training to operators and maintenance personnel on automated systems and new technologies."
    },
    {
      icon: Lightbulb,
      title: "Data Driven",
      description: "Data extraction and analysis from production lines for backup, safety and performance analysis (OEE, KPIs), implementing continuous improvement strategies."
    },
    {
      icon: Globe,
      title: "International Project Management",
      description: "Extensive experience managing multicultural teams across multiple countries including USA, Italy, Spain, China, Brasil, Colombia, and more."
    },
    {
      icon: TrendingUp,
      title: "Technology Integration",
      description: "Integration of cutting-edge technologies including machine vision, robotics, ultrasonic welding, laser engraving, advanced measurement systems, etc."
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Comprehensive maintenance strategies and support systems for automated production lines and hydroelectric power plants to ensure optimal performance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          <b>Mechatronics Engineer specialized in Industrial Process Automation Projects and Maintenance.</b><br></br>
            More than 14 years of experience designing, developing and leading process automation projects. 
            PLC + HMI + SCADA design & programming, installation, test, start-up and maintenance of automated 
            production lines, assembly stations, and hydroelectric power plants worldwide. Experience 
            leading development teams, training operators and training maintenance teams. Lately, I have been 
            focusing and studying about data extraction and data analysis of automated production lines, for 
            backup, safety and performance analysis(OEE). As well as in the adoption of high-level languages 
            and no-code AI tools like n8n.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;