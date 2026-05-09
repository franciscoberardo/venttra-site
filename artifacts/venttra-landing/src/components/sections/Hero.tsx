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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
              Plataforma Inteligente para Distribuidores
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Plataforma de gestión comercial con <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">analítica e inteligencia artificial</span> para optimizar ventas y pedidos
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto"
          >
            Unifica tu operación, predice la demanda y potencia a tu equipo de ventas con la solución diseñada específicamente para la complejidad de la distribución moderna.
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

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-white mb-2">+500</h3>
            <p className="text-sm text-foreground/70 uppercase tracking-wider font-medium">Empresas Confían</p>
          </div>
          <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-6 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-3xl font-bold text-white mb-2">+2M</h3>
            <p className="text-sm text-foreground/70 uppercase tracking-wider font-medium">Pedidos Gestionados</p>
          </div>
          <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-white mb-2">98%</h3>
            <p className="text-sm text-foreground/70 uppercase tracking-wider font-medium">Satisfacción</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
