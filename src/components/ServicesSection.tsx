import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import serviceNails from "@/assets/service-nails.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceBrows from "@/assets/service-brows.jpg";

const services = [
  {
    title: "Cuidado de Uñas",
    description: "Manicure, pedicure, nail art y tratamientos especializados para uñas perfectas.",
    image: serviceNails,
    features: ["Manicure clásico y spa", "Pedicure relajante", "Nail art personalizado", "Esmaltado semipermanente"]
  },
  {
    title: "Peluquería",
    description: "Cortes, peinados, tratamientos capilares y coloración con productos de alta calidad.",
    image: serviceHair,
    features: ["Cortes de cabello", "Peinados para eventos", "Coloración profesional", "Tratamientos capilares"]
  },
  {
    title: "Cejas y Pestañas",
    description: "Diseño de cejas, extensiones de pestañas y tratamientos para realzar tu mirada.",
    image: serviceBrows,
    features: ["Diseño de cejas", "Micropigmentación", "Extensiones de pestañas", "Tinte de cejas y pestañas"]
  },
  {
    title: "Tratamientos Faciales",
    description: "Faciales personalizados, limpieza profunda y tratamientos anti-edad.",
    image: serviceFacial,
    features: ["Limpieza facial profunda", "Tratamientos anti-edad", "Hidratación intensiva", "Mascarillas especializadas"]
  },
  {
    title: "Masajes Terapéuticos",
    description: "Masajes relajantes y terapéuticos para liberar tensiones y renovar energías.",
    image: serviceFacial,
    features: ["Masaje relajante", "Masaje terapéutico", "Masaje con piedras calientes", "Aromaterapia"]
  },
  {
    title: "Tratamientos Corporales",
    description: "Exfoliaciones, envolturas y tratamientos reductivos para cuidar tu cuerpo.",
    image: serviceFacial,
    features: ["Exfoliación corporal", "Envolturas reductivas", "Tratamientos reafirmantes", "Hidratación corporal"]
  },
  {
    title: "Depilación",
    description: "Servicios de depilación con cera y técnicas especializadas para una piel suave.",
    image: serviceFacial,
    features: ["Depilación con cera", "Depilación facial", "Depilación corporal", "Cuidado post-depilación"]
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios de belleza y bienestar, 
            cada uno diseñado para brindarte la mejor experiencia de cuidado personal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card hover:shadow-elegant transition-bounce overflow-hidden border-0"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-10 transition-smooth"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;