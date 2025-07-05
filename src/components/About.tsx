import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Somos la agencia
                <span className="block text-brand-turquoise">
                  que Mar del Plata necesitaba
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-accent rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Fundada por un desarrollador independiente con visión disruptiva, 
                <strong className="text-foreground"> Maredelcode</strong> nace para llevar 
                la modernidad digital a negocios tradicionales que necesitan un salto al futuro.
              </p>
              
              <p>
                Entendemos que muchas pymes, profesionales y emprendimientos familiares 
                se sienten perdidos en el mundo digital. Por eso, nuestro enfoque es 
                <strong className="text-brand-turquoise"> acompañarte paso a paso</strong>, 
                sin tecnicismos, sin vueltas.
              </p>
              
              <p>
                Desde Mar del Plata, trabajamos con clientes de toda Argentina y el mundo. 
                Combinamos la calidez del trato personal con la potencia de la tecnología más avanzada.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-glass border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">Atención personalizada</h3>
                <p className="text-sm text-muted-foreground">
                  Cada proyecto es tratado con dedicación exclusiva
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-glass border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">Tecnología disruptiva</h3>
                <p className="text-sm text-muted-foreground">
                  Usamos las herramientas más modernas del mercado
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button variant="premium" size="lg">
                Conocé nuestro método
              </Button>
            </div>
          </div>
          
          {/* Stats & Visual */}
          <div className="relative">
            <div className="bg-gradient-primary p-8 rounded-2xl shadow-premium text-white">
              <h3 className="text-2xl font-bold mb-6">¿Por qué elegirnos?</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span>Proyectos entregados</span>
                  <span className="text-2xl font-bold text-brand-turquoise">15+</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span>Clientes satisfechos</span>
                  <span className="text-2xl font-bold text-brand-turquoise">100%</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span>Soporte post-entrega</span>
                  <span className="text-2xl font-bold text-brand-turquoise">24/7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tiempo de respuesta</span>
                  <span className="text-2xl font-bold text-brand-turquoise">&lt;2h</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="text-sm italic">
                  "La transformación digital no tiene que ser complicada. 
                  Nosotros nos encargamos de todo."
                </p>
                <p className="text-brand-turquoise font-semibold mt-2">
                  — Equipo Maredelcode
                </p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand-turquoise rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-accent rounded-lg opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;