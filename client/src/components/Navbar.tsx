import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (id: string) => {
    scrollToElement(id);
    closeMenu();
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-white/95 shadow-sm'}`}>
      <nav className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <a 
            href="#" 
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              closeMenu();
            }}
          >
            <span className="text-primary font-heading font-bold text-2xl">
              SoCal<span className="text-secondary">Saladmaster</span>
            </span>
          </a>
        </div>
        
        <button 
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:w-auto w-full transition-all duration-300`}>
          <ul className="md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 font-medium text-gray-700 mt-4 md:mt-0">
            <li><a href="#home" onClick={() => handleNavClick('home')} className="hover:text-primary transition duration-300">Home</a></li>
            <li><a href="#about" onClick={() => handleNavClick('about')} className="hover:text-primary transition duration-300">About</a></li>
            <li><a href="#benefits" onClick={() => handleNavClick('benefits')} className="hover:text-primary transition duration-300">Health Benefits</a></li>
            <li><a href="#recipes" onClick={() => handleNavClick('recipes')} className="hover:text-primary transition duration-300">Recipes</a></li>
            <li><a href="#videos" onClick={() => handleNavClick('videos')} className="hover:text-primary transition duration-300">Videos</a></li>
            <li><a href="#in-home-demo" onClick={() => handleNavClick('in-home-demo')} className="hover:text-primary transition duration-300">In-Home Demo</a></li>
            <li><a href="#testimonials" onClick={() => handleNavClick('testimonials')} className="hover:text-primary transition duration-300">Testimonials</a></li>
            <li><a href="#contact" onClick={() => handleNavClick('contact')} className="hover:text-primary transition duration-300">Contact</a></li>
            <li>
              <Button 
                onClick={() => handleNavClick('schedule')}
                className="bg-primary hover:bg-primary-dark text-white"
              >
                Schedule Demo
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
