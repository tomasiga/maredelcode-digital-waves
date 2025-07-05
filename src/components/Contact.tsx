import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          project: formData.project || null,
          message: formData.message || null
        }]);

      if (error) {
        throw error;
      }

      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos dentro de las próximas 2 horas.",
      });
      
      setFormData({ name: "", email: "", phone: "", project: "", message: "" });
    } catch (error) {
      console.error('Error saving contact form:', error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema. Por favor intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-primary text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                ¿Listo para empezar
                <span className="block text-brand-turquoise">
                  tu transformación digital?
                </span>
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Agendá una consulta gratuita y charlemos sobre cómo podemos 
                llevar tu negocio al siguiente nivel.
              </p>
              <div className="w-20 h-1 bg-brand-turquoise rounded-full mt-6"></div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-turquoise rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-white/80">hola@maredelcode.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-turquoise rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <p className="text-white/80">+54 9 223 XXX-XXXX</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-turquoise rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold">Ubicación</h3>
                  <p className="text-white/80">Mar del Plata, Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Contacto rápido</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="glass" size="lg" className="flex-1">
                  💬 WhatsApp directo
                </Button>
                <Button variant="glass" size="lg" className="flex-1">
                  📅 Agendar reunión
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <h4 className="font-semibold mb-4">¿Por qué confiar en nosotros?</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                  Respuesta &lt; 2 horas
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                  Consulta sin compromiso
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                  Propuesta personalizada
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                  Soporte post-entrega
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-premium border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Contanos sobre tu proyecto</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-brand-turquoise backdrop-blur-sm text-white placeholder-white/60"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-brand-turquoise backdrop-blur-sm text-white placeholder-white/60"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-brand-turquoise backdrop-blur-sm text-white placeholder-white/60"
                    placeholder="+54 9 XXX XXX-XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de proyecto</label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-brand-turquoise backdrop-blur-sm text-white"
                  >
                    <option value="" className="text-gray-800">Seleccionar...</option>
                    <option value="landing" className="text-gray-800">Landing Page</option>
                    <option value="ecommerce" className="text-gray-800">Tienda Online</option>
                    <option value="corporate" className="text-gray-800">Sitio Corporativo</option>
                    <option value="redesign" className="text-gray-800">Rediseño</option>
                    <option value="other" className="text-gray-800">Otro</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Contanos sobre tu proyecto</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-brand-turquoise backdrop-blur-sm text-white placeholder-white/60 resize-none"
                  placeholder="Describí brevemente qué necesitás, cuáles son tus objetivos y cualquier detalle que consideres importante..."
                />
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar consulta gratuita"}
              </Button>
              
              <p className="text-xs text-white/60 text-center">
                * Te responderemos en menos de 2 horas durante horario laboral
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;