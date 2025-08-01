import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Nos encantaría conocer tus ideas y 
            ayudarte a transformarlas en realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-semibold text-card-foreground mb-6">
              Cuéntanos tu proyecto
            </h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Nombre
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Tu nombre"
                    className="border-border focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="tu@email.com"
                    className="border-border focus:border-accent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                  Teléfono
                </label>
                <Input 
                  id="phone" 
                  placeholder="Tu teléfono"
                  className="border-border focus:border-accent"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-card-foreground mb-2">
                  Tipo de proyecto
                </label>
                <Input 
                  id="project" 
                  placeholder="Ej: Casa unifamiliar, oficinas, etc."
                  className="border-border focus:border-accent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Mensaje
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Cuéntanos más detalles sobre tu proyecto..."
                  rows={4}
                  className="border-border focus:border-accent"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-accent hover:opacity-90 transition-opacity"
              >
                Enviar Mensaje
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Email</h4>
                  <p className="text-muted-foreground">info@gordilloarquitectos.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Teléfono</h4>
                  <p className="text-muted-foreground">+34 91 234 56 78</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Oficina</h4>
                  <p className="text-muted-foreground">
                    Calle Serrano 123, 4º<br />
                    28006 Madrid, España
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Horario</h4>
                  <p className="text-muted-foreground">
                    Lun - Vie: 9:00 - 18:00<br />
                    Sáb: 10:00 - 14:00
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;