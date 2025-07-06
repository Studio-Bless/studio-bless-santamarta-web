import { MapPin, Clock, Phone, Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <span className="text-foreground font-bold text-xl">SB</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Studio Bless</h3>
                <p className="text-pink-soft">Salón de Belleza & Spa</p>
              </div>
            </div>
            <p className="text-pink-soft leading-relaxed mb-6">
              En Studio Bless, transformamos tu belleza natural en arte. 
              Ubicados en el corazón de Santa Marta, ofrecemos servicios de alta calidad 
              en un ambiente acogedor y profesional.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/studiobless.co"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-medium/20 hover:bg-pink-medium/40 rounded-full flex items-center justify-center transition-smooth hover:shadow-glow"
              >
                <Instagram className="w-5 h-5 text-pink-soft" />
              </a>
              <a
                href="https://wa.me/573205265969"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500/20 hover:bg-green-500/40 rounded-full flex items-center justify-center transition-smooth hover:shadow-glow"
              >
                <Phone className="w-5 h-5 text-green-400" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-pink-soft">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-medium flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Ubicación</p>
                  <p className="text-pink-soft text-sm">Carrera 18 #22-35<br />Santa Marta, Colombia</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-pink-medium flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-pink-soft text-sm">+57 320 526 5969</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Instagram className="w-5 h-5 text-pink-medium flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Instagram</p>
                  <p className="text-pink-soft text-sm">@studiobless.co</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-pink-soft">Horarios</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-pink-medium flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Lunes - Sábado</p>
                  <p className="text-pink-soft text-sm">9:00 a.m. - 7:00 p.m.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-pink-medium flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Domingos y Festivos</p>
                  <p className="text-pink-soft text-sm">10:00 a.m. en adelante</p>
                  <p className="text-pink-medium text-xs">*Solo con cita previa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-pink-medium/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-pink-soft">
              <span>© 2024 Studio Bless. Hecho con</span>
              <Heart className="w-4 h-4 text-pink-medium fill-current" />
              <span>en Santa Marta, Colombia</span>
            </div>
            
            <div className="flex space-x-6 text-sm text-pink-soft">
              <button 
                onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-pink-medium transition-smooth"
              >
                Inicio
              </button>
              <button 
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-pink-medium transition-smooth"
              >
                Servicios
              </button>
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-pink-medium transition-smooth"
              >
                Contacto
              </button>
              <button 
                onClick={() => document.getElementById('testimonios')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-pink-medium transition-smooth"
              >
                Testimonios
              </button>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-pink-soft">
            <p>
              🌟 ¡Síguenos en Instagram para ver nuestros trabajos más recientes y promociones exclusivas! 🌟
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;