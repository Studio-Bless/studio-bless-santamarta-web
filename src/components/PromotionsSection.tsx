import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Clock, Star, Heart } from "lucide-react";

const promotions = [
  {
    title: "Paquete de Bienvenida",
    description: "¡Perfecto para nuevas clientas! Incluye manicure, pedicure y limpieza facial básica.",
    originalPrice: "120.000",
    discountPrice: "80.000",
    discount: "33% OFF",
    icon: <Heart className="w-8 h-8 text-pink-medium" />,
    validUntil: "Válido hasta fin de mes",
    includes: ["Manicure completo", "Pedicure relajante", "Limpieza facial", "Masaje de manos"]
  },
  {
    title: "Combo Belleza Total",
    description: "Transformación completa: diseño de cejas, extensiones de pestañas y manicure.",
    originalPrice: "200.000",
    discountPrice: "150.000",
    discount: "25% OFF", 
    icon: <Star className="w-8 h-8 text-lavender-deep" />,
    validUntil: "Oferta especial del mes",
    includes: ["Diseño de cejas", "Extensiones de pestañas", "Manicure semipermanente", "Hidratación facial"]
  },
  {
    title: "Día de Spa Relajante",
    description: "Desconéctate del estrés con nuestro paquete completo de relajación y belleza.",
    originalPrice: "300.000",
    discountPrice: "220.000",
    discount: "27% OFF",
    icon: <Gift className="w-8 h-8 text-primary" />,
    validUntil: "Disponible los fines de semana",
    includes: ["Masaje relajante 60min", "Facial anti-edad", "Manicure y pedicure", "Tratamiento capilar"]
  }
];

const PromotionsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Promociones Especiales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aprovecha nuestras ofertas exclusivas y vive la experiencia Studio Bless 
            con increíbles descuentos. ¡Tu belleza merece lo mejor!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {promotions.map((promo, index) => (
            <Card 
              key={index} 
              className="relative bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-bounce overflow-hidden"
            >
              {/* Discount Badge */}
              <div className="absolute top-4 right-4 bg-pink-deep text-white px-3 py-1 rounded-full text-sm font-bold shadow-soft">
                {promo.discount}
              </div>
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    {promo.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {promo.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {promo.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Pricing */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-2xl font-bold text-primary">
                      ${promo.discountPrice}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ${promo.originalPrice}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {promo.validUntil}
                  </p>
                </div>
                
                {/* Includes */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Incluye:</h4>
                  <ul className="space-y-1">
                    {promo.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA Button */}
                <Button 
                  variant="elegant" 
                  className="w-full mt-6"
                  onClick={() => window.open(`https://wa.me/573205265969?text=Hola! Me interesa la promoción: ${promo.title}`, '_blank')}
                >
                  Reservar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="bg-gradient-primary rounded-3xl p-8 text-center shadow-elegant">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Buscas algo específico?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            También creamos paquetes personalizados según tus necesidades. 
            Contacta con nosotros y diseñaremos la experiencia perfecta para ti.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="elegant" 
              size="lg"
              onClick={() => window.open('https://wa.me/573205265969?text=Hola! Me gustaría información sobre paquetes personalizados', '_blank')}
            >
              Crear Paquete Personalizado
            </Button>
            <Button 
              variant="soft" 
              size="lg"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Todos los Servicios
            </Button>
          </div>
          
          <div className="mt-6 text-sm text-muted-foreground">
            <p>
              💝 <span className="font-semibold">¡Referir amigas tiene premio!</span> 
              Por cada amiga que traigas, ambas reciben 10% de descuento en su próxima cita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;