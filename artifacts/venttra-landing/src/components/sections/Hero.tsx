import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24">
      {/* Background with grid and gradients */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
      </div>

      <div className="container relative z-10 px-6 md:px-12 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Plataforma de gestión comercial con IA
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight"
          >
            Gestiona clientes, productos y pedidos en <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">un solo lugar</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto"
          >
            Centraliza tu operación comercial, analiza datos en tiempo real y optimiza decisiones con inteligencia artificial.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" onClick={() => scrollTo("contacto")} className="w-full sm:w-auto text-base h-14 px-8 bg-primary hover:bg-primary/90" data-testid="hero-btn-demo">
              Solicitar Demo
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("que-es")} className="w-full sm:w-auto text-base h-14 px-8 border-border hover:bg-card" data-testid="hero-btn-more">
              Ver Más
            </Button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
