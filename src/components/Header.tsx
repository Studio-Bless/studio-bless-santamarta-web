import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
            <span className="text-foreground font-bold text-xl">SB</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Studio Bless</h1>
            <p className="text-sm text-muted-foreground">Salón de Belleza & Spa</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-foreground hover:text-primary transition-smooth">
            Inicio
          </a>
          <a href="#servicios" className="text-foreground hover:text-primary transition-smooth">
            Servicios
          </a>
          <a href="#contacto" className="text-foreground hover:text-primary transition-smooth">
            Contacto
          </a>
          <a href="#testimonios" className="text-foreground hover:text-primary transition-smooth">
            Testimonios
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <a
            href="https://instagram.com/studiobless.co"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gradient-primary hover:shadow-glow transition-bounce"
          >
            <Instagram className="w-5 h-5 text-foreground" />
          </a>
          
          <Button 
            variant="whatsapp" 
            size="sm"
            onClick={() => window.open('https://wa.me/573205265969?text=Hola! Me gustaría agendar una cita en Studio Bless', '_blank')}
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;