import { Heart, ArrowUp, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-outer-space text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2 flex flex-col md:flex-row justify-between items-center">AE²</div>
            <p className="text-white/70">
              © 2025 Andres Echeverri E. All rights reserved. Updated 25/09
            </p>
          </div>

          {/* Made with love */}
          <div className="mb-6 md:mb-0">
            <p className="flex items-center gap-2 text-white/70">
              Made with <Heart size={16} className="text-red-400" fill="currentColor" /> & lots of <Coffee size={16} className="text-white-400" fill="currentColor" /> in Colombia
            </p>
          </div>

          {/* Back to top button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="border-white/30 text-white hover:bg-white/10"
          >
            <ArrowUp size={20} />
          </Button>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-white/60 text-sm">
            Built with React, TypeScript, and Tailwind CSS • Process Automation Engineer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;