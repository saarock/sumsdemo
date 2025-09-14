import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="glass-subtle rounded-full p-2">
              <span className="text-lg bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">JXK</span>
            </div>
            <span className="text-white hidden md:block">Junction X Kathmandu</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Button 
              variant="ghost" 
              className="text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => scrollToSection('home')}
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              className="text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => scrollToSection('about')}
            >
              About
            </Button>
            {/* <Button 
              variant="ghost" 
              className="text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => scrollToSection('tracks')}
            >
              Tracks
            </Button> */}
            {/* <Button 
              variant="ghost" 
              className="text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => scrollToSection('apply')}
            >
              Partner 
            </Button> */}
            <Button 
              variant="ghost" 
              className="text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => scrollToSection('partners')}
            >
              Partner With Us
            </Button>
            <Button 
              variant="ghost" 
              className="text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => scrollToSection('hackers')}
            >
              For Hackers
            </Button>
            <Button 
              variant="ghost" 
              className="text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Button>
            <Button 
              className="glass-button border-0 text-white hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('apply')}
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-card rounded-2xl mt-2 p-4 space-y-2">
            <Button 
              variant="ghost" 
              className="w-full text-white/80 hover:text-white hover:bg-white/10 justify-start"
              onClick={() => scrollToSection('home')}
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white/80 hover:text-white hover:bg-white/10 justify-start"
              onClick={() => scrollToSection('about')}
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white/80 hover:text-white hover:bg-white/10 justify-start"
              onClick={() => scrollToSection('tracks')}
            >
              Tracks
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white/80 hover:text-white hover:bg-white/10 justify-start"
              onClick={() => scrollToSection('apply')}
            >
              Apply
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white/80 hover:text-white hover:bg-white/10 justify-start"
              onClick={() => scrollToSection('partners')}
            >
              Partners
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white/80 hover:text-white hover:bg-white/10 justify-start"
              onClick={() => scrollToSection('hackers')}
            >
              For Hackers
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white/80 hover:text-white hover:bg-white/10 justify-start"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Button>
            <Button 
              className="w-full glass-button border-0 text-white hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('apply')}
            >
              Apply Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}