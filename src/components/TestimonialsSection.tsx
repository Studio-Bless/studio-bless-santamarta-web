import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María Fernanda",
    service: "Manicure y Pedicure",
    rating: 5,
    comment: "Excelente servicio! El personal es muy profesional y el ambiente es súper relajante. Mis uñas quedaron perfectas y el trabajo duró mucho tiempo. Definitivamente regresaré!",
    initials: "MF"
  },
  {
    name: "Carolina López",
    service: "Tratamiento Facial",
    rating: 5,
    comment: "Mi piel se ve radiante después del facial. El tratamiento fue personalizado para mi tipo de piel y los resultados fueron increíbles. Studio Bless es mi lugar favorito para relajarme.",
    initials: "CL"
  },
  {
    name: "Andrea Ramírez",
    service: "Extensiones de Pestañas",
    rating: 5,
    comment: "Las extensiones de pestañas me cambiaron la vida! Se ven muy naturales y el proceso fue cómodo. La técnica es excelente y muy detallista. Súper recomendado!",
    initials: "AR"
  },
  {
    name: "Valentina Torres",
    service: "Corte y Color",
    rating: 5,
    comment: "Amé mi nuevo look! La estilista entendió perfectamente lo que quería y el resultado superó mis expectativas. El salón tiene un ambiente muy acogedor y profesional.",
    initials: "VT"
  },
  {
    name: "Isabella Castro",
    service: "Masaje Relajante",
    rating: 5,
    comment: "El masaje fue increíble, exactamente lo que necesitaba después de una semana estresante. El ambiente es muy zen y la terapeuta es muy profesional. Volveré pronto!",
    initials: "IC"
  },
  {
    name: "Sofía Mendoza",
    service: "Diseño de Cejas",
    rating: 5,
    comment: "Mis cejas nunca se habían visto tan bien! El diseño es perfecto para mi rostro y el proceso fue muy cuidadoso. Studio Bless tiene los mejores profesionales de Santa Marta.",
    initials: "SM"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Lo Que Dicen Nuestras Clientas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La satisfacción de nuestras clientas es nuestra mayor recompensa. 
            Lee lo que opinan sobre su experiencia en Studio Bless.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-soft hover:shadow-elegant transition-bounce"
            >
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
                
                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 shadow-soft">
                    <span className="text-foreground font-semibold text-sm">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-primary">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto shadow-elegant">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Lista para vivir tu propia experiencia?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Únete a nuestras clientas satisfechas y descubre por qué Studio Bless 
              es el salón de belleza favorito en Santa Marta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/573205265969?text=Hola! Me gustaría agendar una cita en Studio Bless', '_blank')}
                className="bg-gradient-primary hover:shadow-glow text-foreground font-semibold py-3 px-8 rounded-xl transition-bounce shadow-soft"
              >
                Agenda tu Cita
              </button>
              <button 
                onClick={() => window.open('https://instagram.com/studiobless.co', '_blank')}
                className="bg-lavender-light hover:bg-lavender-medium text-foreground font-semibold py-3 px-8 rounded-xl transition-bounce shadow-soft"
              >
                Ver Más en Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;