import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para atenderte. Agenda tu cita o comunícate con nosotros 
            para cualquier consulta sobre nuestros servicios.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Carrera 18 #22-35<br />
                  Santa Marta, Colombia
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-semibold">Lunes a Sábado:</span> 9:00 a.m. - 7:00 p.m.
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Domingos y Festivos:</span> 10:00 a.m. en adelante
                </p>
                <p className="text-sm text-primary font-medium">
                  *Domingos y festivos solo con cita previa
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-muted-foreground font-medium">WhatsApp</p>
                  <p className="text-foreground text-lg">+57 320 526 5969</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-medium">Instagram</p>
                  <p className="text-foreground text-lg">@studiobless.co</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Call to Action */}
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center shadow-elegant">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¡Agenda tu Cita Ahora!
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Reserva tu espacio de relajación y belleza. Nuestro equipo de profesionales 
              está listo para brindarte la mejor experiencia de cuidado personal.
            </p>
            
            <div className="space-y-4">
              <Button 
                variant="elegant" 
                size="xl" 
                className="w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/573205265969?text=Hola! Me gustaría agendar una cita en Studio Bless', '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar por WhatsApp
              </Button>
              
              <div className="flex justify-center">
                <Button 
                  variant="soft" 
                  size="lg"
                  onClick={() => window.open('https://instagram.com/studiobless.co', '_blank')}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Síguenos en Instagram
                </Button>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-card/50 rounded-2xl">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">💡 Tip:</span> Síguenos en Instagram para ver nuestros últimos trabajos 
                y promociones especiales. ¡No te pierdas nuestras ofertas exclusivas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;