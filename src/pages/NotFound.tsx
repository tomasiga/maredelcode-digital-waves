import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-primary">
      <div className="text-center text-white px-6">
        <div className="mb-8">
          <h1 className="text-8xl font-bold mb-4 text-brand-turquoise">404</h1>
          <h2 className="text-3xl font-bold mb-4">Página no encontrada</h2>
          <p className="text-xl text-white/80 mb-8 max-w-md mx-auto">
            La página que estás buscando no existe o fue movida.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href="/">
              Volver al inicio
            </a>
          </Button>
          <Button variant="glass" size="lg" asChild>
            <a href="#contact">
              Contactanos
            </a>
          </Button>
        </div>
        
        <div className="mt-12 text-white/60">
          <p className="text-sm">
            ¿Necesitás ayuda? Escribinos y te respondemos al toque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
