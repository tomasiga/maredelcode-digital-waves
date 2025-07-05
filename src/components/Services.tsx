import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Sitios web modernos, responsivos y optimizados para conversión. Desde landing pages hasta tiendas online completas.",
      features: ["Diseño mobile-first", "Optimización SEO", "Carga ultrarrápida", "Panel administrativo"],
      icon: "🚀",
      highlight: true
    },
    {
      title: "Diseño UX/UI",
      description: "Interfaces que enamoran y convierten. Diseñamos experiencias digitales que tus clientes amarán.",
      features: ["Prototipado interactivo", "Diseño responsive", "Identidad visual", "Testing de usuarios"],
      icon: "🎨",
      highlight: false
    },
    {
      title: "Asesoría Digital",
      description: "Te acompañamos en todo el proceso de digitalización. Desde la estrategia hasta la implementación.",
      features: ["Auditoría digital", "Estrategia de contenidos", "Capacitación", "Soporte continuo"],
      icon: "💡",
      highlight: false
    },
    {
      title: "Automatización",
      description: "Integramos herramientas que automatizan procesos y potencian tu productividad con IA.",
      features: ["WhatsApp Business", "Formularios inteligentes", "CRM integrado", "Reportes automáticos"],
      icon: "⚡",
      highlight: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Servicios que
            <span className="block text-brand-turquoise">
              transforman negocios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desde la concepción hasta el lanzamiento, nos encargamos de todo 
            para que puedas enfocarte en lo que mejor sabés hacer.
          </p>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-premium ${
                service.highlight 
                  ? 'bg-gradient-primary text-white shadow-premium' 
                  : 'bg-card shadow-glass border border-border/50 hover:shadow-floating'
              }`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>
              
              {/* Content */}
              <h3 className={`text-2xl font-bold mb-4 ${
                service.highlight ? 'text-white' : 'text-foreground'
              }`}>
                {service.title}
              </h3>
              
              <p className={`mb-6 leading-relaxed ${
                service.highlight ? 'text-white/90' : 'text-muted-foreground'
              }`}>
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-center gap-3 ${
                    service.highlight ? 'text-white/80' : 'text-muted-foreground'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      service.highlight ? 'bg-brand-turquoise' : 'bg-brand-turquoise'
                    }`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <Button 
                variant={service.highlight ? "glass" : "premium"} 
                size="sm"
                className="w-full"
              >
                Consultar precio
              </Button>
              
              {/* Decorative Elements */}
              {service.highlight && (
                <>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-turquoise rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/20 rounded-lg animate-pulse"></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className="bg-card p-8 rounded-2xl shadow-glass border border-border/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Nuestro proceso de trabajo
            </h3>
            <p className="text-muted-foreground">
              Metodología probada que garantiza resultados excepcionales
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consulta inicial", desc: "Analizamos tu negocio y definimos objetivos" },
              { step: "02", title: "Propuesta", desc: "Diseñamos la solución perfecta para vos" },
              { step: "03", title: "Desarrollo", desc: "Creamos tu proyecto con seguimiento constante" },
              { step: "04", title: "Lanzamiento", desc: "Publicamos y te capacitamos para el éxito" }
            ].map((phase, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-gradient-accent text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="xl">
            Empezá tu transformación digital
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;