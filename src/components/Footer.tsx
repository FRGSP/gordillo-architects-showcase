import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Gordillo Arquitectos</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Transformamos espacios en experiencias arquitectónicas únicas. 
              Con más de 25 años de experiencia, creamos diseños que perduran 
              en el tiempo y enriquecen la vida de las personas.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-3 text-accent" />
                <span>info@gordilloarquitectos.com</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-3 text-accent" />
                <span>+34 91 234 56 78</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-3 text-accent" />
                <span>Calle Serrano 123, 4º, 28006 Madrid</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Arquitectura Residencial</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Arquitectura Comercial</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Planificación Urbana</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Diseño de Interiores</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Consultoría</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#inicio" className="hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#proyectos" className="hover:text-accent transition-colors">Proyectos</a></li>
              <li><a href="#servicios" className="hover:text-accent transition-colors">Servicios</a></li>
              <li><a href="#estudio" className="hover:text-accent transition-colors">Estudio</a></li>
              <li><a href="#contacto" className="hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-primary-foreground/60">
            © 2024 Gordillo Arquitectos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;