import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Compass, Ruler, PenTool, TreePine, Camera, Hammer, Wrench, Sofa, MapPin, Key, Shield, Paintbrush2, Droplets, Calendar } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "Proyectos",
      description: "Diseño y conceptualización arquitectónica integral",
      services: [
        {
          icon: Ruler,
          title: "Diseño Arquitectónico",
          description: "Proyectos arquitectónicos completos desde la conceptualización hasta los planos ejecutivos."
        },
        {
          icon: Sofa,
          title: "Interiores",
          description: "Diseño de espacios interiores funcionales y estéticamente excepcionales."
        },
        {
          icon: Camera,
          title: "Fotografía Arquitectónica",
          description: "Documentación profesional de proyectos para redes sociales y portafolio."
        }
      ]
    },
    {
      title: "Construcción",
      description: "Cotizamos con el mejor precio",
      highlight: true,
      services: [
        {
          icon: Building2,
          title: "Construcción en General",
          description: "Servicios integrales de construcción para todo tipo de proyectos."
        },
        {
          icon: Home,
          title: "Construcción Nueva",
          description: "Construcción de viviendas y edificaciones desde cero con los más altos estándares."
        },
        {
          icon: Hammer,
          title: "Remodelaciones",
          description: "Renovación y modernización de espacios existentes."
        },
        {
          icon: Wrench,
          title: "Talleres Especializados",
          description: "Vidrio, aluminio y herrería con acabados de alta calidad."
        },
        {
          icon: TreePine,
          title: "Construcción Residencial",
          description: "Especialistas en viviendas unifamiliares y desarrollos residenciales."
        }
      ]
    },
    {
      title: "Urbanizaciones",
      description: "Desarrollo y planificación urbana sostenible",
      services: [
        {
          icon: MapPin,
          title: "Planificación Urbana",
          description: "Desarrollo de planes maestros para urbanizaciones y complejos residenciales."
        },
        {
          icon: Compass,
          title: "Desarrollo de Proyectos",
          description: "Gestión integral de desarrollos urbanos desde la conceptualización hasta la entrega."
        }
      ]
    },
    {
      title: "Servicios Especializados",
      description: "Soluciones complementarias para tu proyecto",
      services: [
        {
          icon: PenTool,
          title: "Muebles a Medida",
          description: "Diseño y fabricación de mobiliario personalizado para cada espacio."
        },
        {
          icon: Key,
          title: "Bienes Raíces",
          description: "Compra, venta y administración de propiedades inmobiliarias."
        }
      ]
    },
    {
      title: "Mantenimiento",
      description: "Programas mensuales de mantenimiento especializado",
      services: [
        {
          icon: Shield,
          title: "Mantenimiento de Edificios",
          description: "Programas mensuales de mantenimiento preventivo y correctivo."
        },
        {
          icon: Droplets,
          title: "Plomería Especializada",
          description: "Servicios de plomería residencial y comercial con garantía."
        },
        {
          icon: Paintbrush2,
          title: "Servicios Integrales",
          description: "Pintura, impermeabilización, herrería y vidrio con mantenimiento programado."
        },
        {
          icon: Calendar,
          title: "Planes de Mantenimiento",
          description: "Contrata servicios de mantenimiento programado para tu propiedad."
        }
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios arquitectónicos, construcción, 
            y mantenimiento para satisfacer todas las necesidades de tu proyecto.
          </p>
        </div>

        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative">
              {/* Category Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-primary mb-3">
                  {category.title}
                </h3>
                <p className={`text-lg ${category.highlight ? 'text-accent font-semibold' : 'text-muted-foreground'} max-w-2xl mx-auto`}>
                  {category.description}
                </p>
                {category.highlight && (
                  <div className="mt-4">
                    <Button 
                      size="lg"
                      className="bg-gradient-accent hover:opacity-90 transition-opacity"
                    >
                      Solicitar Cotización
                    </Button>
                  </div>
                )}
              </div>

              {/* Services Grid */}
              <div className={`grid gap-6 ${
                category.services.length <= 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' :
                category.services.length === 3 ? 'md:grid-cols-3' :
                'md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {category.services.map((service, serviceIndex) => (
                  <Card 
                    key={serviceIndex} 
                    className="p-6 hover:shadow-elegant transition-all duration-300 group border-border/50 hover:border-accent/30"
                  >
                    <div className="flex items-center justify-center w-14 h-14 bg-accent/10 rounded-lg mb-4 group-hover:bg-accent/20 transition-colors">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-card-foreground mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h4>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </Card>
                ))}
              </div>

              {/* Separator */}
              {categoryIndex < serviceCategories.length - 1 && (
                <div className="mt-16 flex justify-center">
                  <div className="w-24 h-px bg-border"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-lg shadow-card border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              ¿Necesitas una cotización personalizada?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contacta con nosotros y recibe una propuesta ajustada a tus necesidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-accent hover:opacity-90 transition-opacity"
              >
                Contactar Ahora
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Ver Portafolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;