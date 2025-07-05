import { Button } from "@/components/ui/button";

const Booking = () => {
  const calendlyUrl = "https://calendly.com/maredelcode/consulta-gratuita"; // Replace with your actual Calendly URL

  const handleBookCall = () => {
    window.open(calendlyUrl, '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-gradient-accent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-white/10 backdrop-blur-md p-12 rounded-3xl shadow-premium border border-white/20">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para el próximo paso?
              <span className="block text-brand-turquoise mt-2">
                Agendá tu consulta gratuita
              </span>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Charlamos 30 minutos sobre tu proyecto, analizamos tus necesidades 
              y te damos una propuesta personalizada. Sin compromiso.
            </p>
            <div className="w-20 h-1 bg-brand-turquoise rounded-full mx-auto mt-6"></div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-semibold text-white mb-2">Análisis personalizado</h3>
              <p className="text-white/80 text-sm">Evaluamos tu situación actual y definimos objetivos claros</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="font-semibold text-white mb-2">Estrategia a medida</h3>
              <p className="text-white/80 text-sm">Diseñamos el plan perfecto para tu transformación digital</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="font-semibold text-white mb-2">Propuesta inmediata</h3>
              <p className="text-white/80 text-sm">Te entregamos un presupuesto detallado al finalizar la llamada</p>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <Button 
              onClick={handleBookCall}
              variant="hero" 
              size="xl" 
              className="text-lg px-12 py-4"
            >
              📅 Agendar consulta gratuita
            </Button>
            <p className="text-white/60 text-sm">
              * Disponibilidad en horario laboral (Lun-Vie 9:00-18:00 ART)
            </p>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                30 minutos de duración
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                Totalmente gratuito
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                Sin compromiso
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;