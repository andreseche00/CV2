import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import hobbiesCollage from '@/assets/hobbies-collage.jpg';

interface Hobby {
  id: string;
  title: string;
  description: string;
  image: string;
}

const Hobbies = () => {
  const [hoveredHobby, setHoveredHobby] = useState<string | null>(null);

  const hobbies: Hobby[] = [
    {
      id: "hiking",
      title: "Mountain Hiking",
      description: "Exploring nature trails and mountain peaks across different countries. It helps me stay physically fit and provides mental clarity for tackling complex engineering challenges.",
      image: hobbiesCollage
    },
    {
      id: "reading",
      title: "Technical Reading",
      description: "Staying updated with the latest developments in automation, AI, and emerging technologies. I particularly enjoy reading about Industry 4.0 and data analytics applications.",
      image: hobbiesCollage
    },
    {
      id: "soccer",
      title: "Soccer",
      description: "Playing soccer has taught me valuable teamwork skills that I apply in my professional life. It's also a great way to connect with people from different cultures during international projects.",
      image: hobbiesCollage
    },
    {
      id: "travel",
      title: "Cultural Travel", 
      description: "Having worked in multiple countries, I've developed a passion for experiencing different cultures, languages, and engineering approaches. Each culture brings unique perspectives to problem-solving.",
      image: hobbiesCollage
    },
    {
      id: "electronics",
      title: "Personal Projects",
      description: "Working on personal electronics and automation projects in my spare time. Currently exploring IoT applications and home automation using microcontrollers and sensors.",
      image: hobbiesCollage
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Hobbies & Interests</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Beyond engineering, I believe in maintaining a balanced lifestyle that fuels creativity and 
            provides fresh perspectives for professional challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {hobbies.map((hobby) => (
            <Card 
              key={hobby.id}
              className="relative overflow-hidden hover-lift cursor-pointer group"
              onMouseEnter={() => setHoveredHobby(hobby.id)}
              onMouseLeave={() => setHoveredHobby(null)}
            >
              <CardContent className="p-0 relative h-64">
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-outer-space/80 via-outer-space/40 to-transparent" />
                
                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{hobby.title}</h3>
                  
                  {/* Description - shown on hover */}
                  <div className={`transition-all duration-300 ${
                    hoveredHobby === hobby.id 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-4'
                  }`}>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {hobby.description}
                    </p>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className={`absolute top-4 right-4 w-3 h-3 bg-primary rounded-full transition-all duration-300 ${
                  hoveredHobby === hobby.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`} />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Philosophy Card */}
        <Card className="shadow-card border-0 max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Work-Life Balance Philosophy</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe that diverse experiences outside of engineering make me a better professional. 
              Whether it's the strategic thinking from soccer, the problem-solving persistence from hiking, 
              or the cultural adaptability from travel, each hobby contributes to my effectiveness as an 
              automation engineer and project leader. The creativity and fresh perspectives gained from 
              these activities often lead to innovative solutions in complex industrial challenges.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hobbies;