import { Mail, MapPin, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import headshot from '@/assets/headshot.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 overlay-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in">
          {/* Professional Headshot */}
          <div className="mb-8">
            <img
              src={headshot}
              alt="Andres Echeverri E."
              className="w-48 h-48 rounded-full mx-auto border-4 border-white/20 shadow-floating object-cover"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading">
            ANDRES ECHEVERRI E.
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-white/90">
            PROCESS AUTOMATION ENGINEER & PROJECT LEADER
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Mechatronics Engineer specialized in Industrial Process Automation Projects and Maintenance.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-white/90">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Cali - Colombia – 760041</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-gray-700 hover:bg-white/10 font-semibold px-8 py-3"
              onClick={() => window.open('https://www.linkedin.com/in/andresecheverriescobar/?locale=en_US', '_blank')}
            >
              <Linkedin className="mr-2" size={20} />
              Connect on LinkedIn
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/*<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default Hero;