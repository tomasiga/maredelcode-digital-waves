import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-maredelcode.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Maredelcode workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Floating Glass Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-glass rounded-full shadow-glass backdrop-blur-sm animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-glass rounded-lg shadow-glass backdrop-blur-sm animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Llevamos tu negocio al
            <span className="block bg-gradient-to-r from-brand-turquoise to-white bg-clip-text text-transparent">
              mundo digital
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Desarrollamos webs que rompen el molde. Desde Mar del Plata al mundo.
            <span className="block mt-2 text-brand-turquoise font-medium">
              Sin vueltas. Sin complicaciones.
            </span>
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="hero" 
            size="xl"
            className="transform hover:scale-105 transition-all duration-300"
          >
            Agendá una reunión gratuita
          </Button>
          <Button 
            variant="glass" 
            size="xl"
            className="transform hover:scale-105 transition-all duration-300"
          >
            Ver nuestros proyectos
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-white/70">
          <p className="text-sm mb-6">Especialistas en digitalización para pymes</p>
          <div className="flex justify-center items-center gap-8 text-xs">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
              Mar del Plata, Argentina
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
              Soporte personalizado
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
              Resultados garantizados
            </span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;