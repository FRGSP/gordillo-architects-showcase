import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Building } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full">
                <Award className="w-4 h-4 text-accent mr-2" />
                <span className="text-sm font-medium text-accent">Arquitectura de Excelencia</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Diseñamos
                <span className="block text-accent">Espacios</span>
                <span className="block">Extraordinarios</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Transformamos ideas en arquitectura funcional y estética. Cada proyecto es una oportunidad 
                única para crear espacios que inspiren y perduren en el tiempo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-accent hover:opacity-90 transition-opacity group"
              >
                Ver Proyectos
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Contactar
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3 mx-auto">
                  <Building className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3 mx-auto">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary">25</div>
                <div className="text-sm text-muted-foreground">Años</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3 mx-auto">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary">15</div>
                <div className="text-sm text-muted-foreground">Premios</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img
                src={heroImage}
                alt="Arquitectura moderna minimalista"
                className="w-full h-[600px] lg:h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-card border border-border max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">En construcción</p>
                  <p className="text-xs text-muted-foreground">Residencial Los Pinos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;