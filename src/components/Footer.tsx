const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">
                Maredelcode
                <span className="text-brand-turquoise">.</span>
              </h3>
              <p className="text-white/80 leading-relaxed max-w-md">
                Agencia de desarrollo web disruptiva. Transformamos negocios 
                tradicionales en potencias digitales desde Mar del Plata hacia el mundo.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-turquoise transition-colors duration-300"
              >
                <span className="text-sm">📧</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-turquoise transition-colors duration-300"
              >
                <span className="text-sm">📱</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-turquoise transition-colors duration-300"
              >
                <span className="text-sm">💼</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-turquoise transition-colors duration-300"
              >
                <span className="text-sm">📷</span>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#services" className="hover:text-brand-turquoise transition-colors duration-300">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-turquoise transition-colors duration-300">
                  Diseño UX/UI
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-turquoise transition-colors duration-300">
                  Asesoría Digital
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-turquoise transition-colors duration-300">
                  Automatización
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-turquoise transition-colors duration-300">
                  SEO & Marketing
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#about" className="hover:text-brand-turquoise transition-colors duration-300">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand-turquoise transition-colors duration-300">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-turquoise transition-colors duration-300">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-turquoise transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-turquoise transition-colors duration-300">
                  Recursos
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h5 className="font-semibold mb-2">📧 Email</h5>
              <p className="text-white/80">hola@maredelcode.com</p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">📱 WhatsApp</h5>
              <p className="text-white/80">+54 9 223 XXX-XXXX</p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">📍 Ubicación</h5>
              <p className="text-white/80">Mar del Plata, Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
        
        {/* CTA Banner */}
        <div className="bg-brand-turquoise/20 rounded-xl p-6 text-center mb-8">
          <h4 className="font-bold text-xl mb-2">¿Listo para transformar tu negocio?</h4>
          <p className="text-white/90 mb-4">
            Agendá una consulta gratuita y charlemos sobre tu proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center bg-brand-turquoise text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-turquoise/80 transition-colors duration-300"
            >
              Consulta gratuita
            </a>
            <a 
              href="https://wa.me/5492235XXXXXX" 
              className="inline-flex items-center justify-center bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300"
            >
              WhatsApp directo
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              © 2024 Maredelcode. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-brand-turquoise transition-colors duration-300">
                Términos y Condiciones
              </a>
              <a href="#" className="hover:text-brand-turquoise transition-colors duration-300">
                Política de Privacidad
              </a>
            </div>
          </div>
          <p className="mt-4 text-xs">
            Desarrollamos webs que rompen el molde. Desde Mar del Plata al mundo. 🌊💻
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;