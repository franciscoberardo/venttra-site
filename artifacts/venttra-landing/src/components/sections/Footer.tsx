import { SiInstagram, SiFacebook, SiX, SiWhatsapp } from "react-icons/si";
import { Linkedin } from "lucide-react";
import venttraLogo from "@assets/image_1778333895370.png";

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Logo & Tagline */}
          <div>
            <img src={venttraLogo} alt="Venttra Logo" className="h-8 object-contain mb-4" />
            <p className="text-foreground/60 max-w-xs">
              Sistema de Gestión de Pedidos. Optimizando operaciones comerciales para distribuidores del futuro.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:items-center">
            <div>
              <h4 className="text-white font-semibold mb-4">Plataforma</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollTo("inicio")} className="text-foreground/60 hover:text-primary transition-colors">Inicio</button></li>
                <li><button onClick={() => scrollTo("que-es")} className="text-foreground/60 hover:text-primary transition-colors">¿Qué es Venttra?</button></li>
                <li><button onClick={() => scrollTo("funcionalidades")} className="text-foreground/60 hover:text-primary transition-colors">Funcionalidades</button></li>
                <li><button onClick={() => scrollTo("planes")} className="text-foreground/60 hover:text-primary transition-colors">Planes</button></li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col md:items-end">
            <div>
              <h4 className="text-white font-semibold mb-4">Conecta con nosotros</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground/80 hover:text-white hover:bg-primary/20 hover:border-primary transition-all" data-testid="social-linkedin">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground/80 hover:text-white hover:bg-primary/20 hover:border-primary transition-all" data-testid="social-instagram">
                  <SiInstagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground/80 hover:text-white hover:bg-primary/20 hover:border-primary transition-all" data-testid="social-facebook">
                  <SiFacebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground/80 hover:text-white hover:bg-primary/20 hover:border-primary transition-all" data-testid="social-twitter">
                  <SiX className="w-4 h-4" />
                </a>
                <a href="https://wa.me/5491100000000" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground/80 hover:text-white hover:bg-[#25D366]/20 hover:border-[#25D366] transition-all" data-testid="social-whatsapp">
                  <SiWhatsapp className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/50">
            &copy; {currentYear} Venttra. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-foreground/50">
            <a href="#" className="hover:text-white transition-colors">Términos de servicio</a>
            <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
