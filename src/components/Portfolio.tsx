import { Button } from "@/components/ui/button";

const Portfolio = () => {
  // Placeholder projects - ready for real content
  const projects = [
    {
      title: "Restaurante El Marinero",
      category: "Gastronomía",
      description: "Sitio web completo con reservas online y carta digital para un restaurante tradicional de Mar del Plata.",
      technologies: ["React", "Tailwind", "Formularios", "WhatsApp API"],
      image: "🍽️",
      status: "Próximamente",
      results: ["300% más reservas", "Presencia digital desde cero", "Sistema de pedidos integrado"]
    },
    {
      title: "Studio Belleza Integral",
      category: "Servicios",
      description: "Landing page optimizada para conversión con sistema de turnos automático.",
      technologies: ["Landing Page", "SEO", "Calendly", "Instagram Feed"],
      image: "💅",
      status: "Próximamente", 
      results: ["150% más clientes", "Automatización completa", "Integración con redes sociales"]
    },
    {
      title: "Inmobiliaria Costa Atlántica",
      category: "Inmobiliaria",
      description: "Portal inmobiliario con filtros avanzados y tour virtual de propiedades.",
      technologies: ["Portal Web", "Filtros", "Tours 360°", "CRM"],
      image: "🏠",
      status: "Próximamente",
      results: ["Portal moderno", "Gestión automatizada", "Tour virtual integrado"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Proyectos que
            <span className="block text-brand-turquoise">
              transforman vidas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada proyecto es una historia de éxito. Acá vas a ver algunos de los 
            trabajos que cambiaron la realidad digital de nuestros clientes.
          </p>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl shadow-glass border border-border/50 overflow-hidden hover:shadow-premium transition-all duration-300 hover:scale-105"
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-primary flex items-center justify-center">
                <span className="text-6xl">{project.image}</span>
                <div className="absolute top-4 right-4">
                  <span className="bg-brand-turquoise text-white text-xs px-3 py-1 rounded-full font-medium">
                    {project.status}
                  </span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="glass" size="sm">
                    Ver detalles
                  </Button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-brand-turquoise text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold text-foreground mt-1 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground text-sm mb-2">Resultados:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-brand-turquoise rounded-full"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA */}
                <Button variant="outline" size="sm" className="w-full">
                  Proyecto similar
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary text-white p-8 rounded-2xl shadow-premium text-center">
          <h3 className="text-2xl font-bold mb-4">
            ¿Tu proyecto puede ser el próximo?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Cada mes ayudamos a más negocios a transformar su presencia digital. 
            No importa el tamaño de tu empresa, tenemos la solución perfecta para vos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg">
              Ver más proyectos
            </Button>
            <Button variant="hero" size="lg">
              Empezar mi proyecto
            </Button>
          </div>
        </div>

        {/* Testimonials Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Lo que dicen nuestros clientes
          </h3>
          <div className="bg-card p-8 rounded-2xl shadow-glass border border-border/50 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground italic mb-4">
              "Increíble el trabajo de Maredelcode. En 3 semanas tenía mi sitio web 
              funcionando y los clientes empezaron a llegar por internet. 
              La inversión se pagó sola en el primer mes."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">María González</p>
                <p className="text-sm text-muted-foreground">Propietaria, Boutique Miralmar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;