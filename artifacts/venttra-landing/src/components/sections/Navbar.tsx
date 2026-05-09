import { useState } from "react";
import { motion } from "framer-motion";
import venttraLogo from "@assets/logo.png";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Update on scroll
  if (typeof window !== "undefined") {
    window.onscroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("inicio")} data-testid="nav-logo">
          <img src={venttraLogo} alt="Venttra Logo" className="h-8 object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("inicio")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" data-testid="nav-link-inicio">Inicio</button>
          <button onClick={() => scrollTo("que-es")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" data-testid="nav-link-que-es">¿Qué es Venttra?</button>
          <button onClick={() => scrollTo("funcionalidades")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" data-testid="nav-link-funcionalidades">Funcionalidades</button>
          <button onClick={() => scrollTo("planes")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" data-testid="nav-link-planes">Planes</button>
          <button onClick={() => scrollTo("contacto")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" data-testid="nav-link-contacto">Contacto</button>
        </div>

        <div className="flex items-center">
          <Button onClick={() => scrollTo("contacto")} className="bg-primary hover:bg-primary/90 text-white font-medium" data-testid="nav-btn-demo">
            Solicitar Demo
          </Button>
        </div>
      </div>
    </nav>
  );
}
