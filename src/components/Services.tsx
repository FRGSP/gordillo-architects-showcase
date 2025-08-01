import { Card } from "@/components/ui/card";
import { Home, Building2, Compass, Ruler, PenTool, TreePine } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Arquitectura Residencial",
      description: "Diseño de viviendas unifamiliares y multifamiliares que combinan funcionalidad y estética contemporánea.",
    },
    {
      icon: Building2,
      title: "Arquitectura Comercial",
      description: "Proyectos comerciales e institucionales que reflejan la identidad de marca y optimizan la experiencia del usuario.",
    },
    {
      icon: Compass,
      title: "Planificación Urbana",
      description: "Desarrollo de planes maestros y proyectos urbanos sostenibles que integran comunidades y entornos.",
    },
    {
      icon: Ruler,
      title: "Diseño de Interiores",
      description: "Espacios interiores que maximizan la funcionalidad mientras crean ambientes acogedores y sofisticados.",
    },
    {
      icon: PenTool,
      title: "Consultoría",
      description: "Asesoramiento especializado en todas las fases del proyecto, desde la conceptualización hasta la ejecución.",
    },
    {
      icon: TreePine,
      title: "Arquitectura Sostenible",
      description: "Diseños eco-friendly que minimizan el impacto ambiental y maximizan la eficiencia energética.",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos un servicio integral de arquitectura, desde la concepción inicial 
            hasta la finalización del proyecto, con un enfoque en la excelencia y la innovación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-elegant transition-all duration-300 group border-border/50 hover:border-accent/30"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;