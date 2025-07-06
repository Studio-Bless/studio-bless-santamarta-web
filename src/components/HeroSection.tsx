import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-elegant">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Studio Bless
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-semibold mb-4 animate-fade-in">
            Salón de Belleza & Spa
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
            Tu belleza es nuestro arte. Descubre una experiencia única de cuidado personal 
            en el corazón de Santa Marta, donde cada detalle está pensado para realzar tu belleza natural.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="elegant" 
              size="xl"
              onClick={() => window.open('https://wa.me/573205265969?text=Hola! Me gustaría agendar una cita en Studio Bless', '_blank')}
              className="animate-scale-in"
            >
              Agendar Cita
            </Button>
            <Button 
              variant="soft" 
              size="xl"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="animate-scale-in"
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;