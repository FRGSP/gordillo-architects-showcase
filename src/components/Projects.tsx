import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Casa Moderna Los Altos",
      location: "Los Altos, Madrid",
      year: "2024",
      category: "Residencial",
      description: "Vivienda unifamiliar que integra espacios abiertos con jardines verticales y tecnología sostenible.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    },
    {
      title: "Centro Comercial Nexus",
      location: "Barcelona",
      year: "2023",
      category: "Comercial",
      description: "Complejo comercial de 15,000 m² con diseño bioclimático y espacios de coworking integrados.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    },
    {
      title: "Residencial Eco Park",
      location: "Valencia",
      year: "2023",
      category: "Residencial",
      description: "Desarrollo residencial sostenible con 120 viviendas y certificación LEED Gold.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    },
    {
      title: "Oficinas Tech Hub",
      location: "Bilbao",
      year: "2022",
      category: "Corporativo",
      description: "Torre de oficinas de 25 plantas con fachada inteligente y espacios flexibles de trabajo.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="proyectos" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de nuestros trabajos más representativos que demuestran 
            nuestra capacidad para crear espacios únicos y funcionales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-elegant transition-all duration-500">
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.year}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="group/btn border-accent/30 hover:bg-accent hover:text-accent-foreground"
                >
                  Ver Proyecto
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Ver Todos los Proyectos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;