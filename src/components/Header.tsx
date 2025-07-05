import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              Maredelcode
              <span className="text-brand-turquoise">.</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white/90 hover:text-brand-turquoise transition-colors duration-300">
              Nosotros
            </a>
            <a href="#services" className="text-white/90 hover:text-brand-turquoise transition-colors duration-300">
              Servicios
            </a>
            <a href="#projects" className="text-white/90 hover:text-brand-turquoise transition-colors duration-300">
              Proyectos
            </a>
            <a href="#contact" className="text-white/90 hover:text-brand-turquoise transition-colors duration-300">
              Contacto
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="glass" size="sm">
              Consulta gratuita
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white/10 backdrop-blur-md border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-white/90 hover:text-brand-turquoise transition-colors duration-300">
                Nosotros
              </a>
              <a href="#services" className="text-white/90 hover:text-brand-turquoise transition-colors duration-300">
                Servicios
              </a>
              <a href="#projects" className="text-white/90 hover:text-brand-turquoise transition-colors duration-300">
                Proyectos
              </a>
              <a href="#contact" className="text-white/90 hover:text-brand-turquoise transition-colors duration-300">
                Contacto
              </a>
              <Button variant="glass" size="sm" className="w-fit">
                Consulta gratuita
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;