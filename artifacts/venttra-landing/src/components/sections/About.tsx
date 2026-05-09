import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, TrendingUp, BarChart3, Users, Route } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, text: "Integra IA para predicción de demanda" },
    { icon: <BarChart3 className="w-5 h-5 text-primary" />, text: "Analítica en tiempo real" },
    { icon: <Users className="w-5 h-5 text-primary" />, text: "Gestión de pedidos y vendedores" },
    { icon: <Route className="w-5 h-5 text-primary" />, text: "Optimización de rutas de venta" }
  ];

  return (
    <section id="que-es" className="py-24 relative">
      <div className="container px-6 md:px-12 mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿Qué es Venttra?</h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Venttra es una plataforma inteligente que unifica la gestión comercial con el poder de la Inteligencia Artificial. Diseñada desde cero para resolver los desafíos específicos de distribuidoras y mayoristas.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              No es solo un CRM o un ERP; es tu socio estratégico que analiza datos históricos para predecir el futuro, optimizando cada aspecto de tu cadena de ventas.
            </p>

            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                  className="flex items-center gap-3 bg-card border border-border p-4 rounded-lg"
                >
                  <div className="bg-primary/10 p-2 rounded-md">
                    {item.icon}
                  </div>
                  <span className="font-medium text-white">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            {/* Abstract Dashboard Illustration */}
            <div className="relative bg-card border border-border rounded-xl shadow-2xl overflow-hidden p-6">
              <div className="flex items-center gap-2 mb-6 border-b border-border pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-24 w-1/3 bg-muted rounded-lg animate-pulse"></div>
                  <div className="h-24 w-1/3 bg-primary/20 border border-primary/30 rounded-lg flex flex-col justify-center items-center">
                    <TrendingUp className="w-6 h-6 text-primary mb-2" />
                    <div className="h-2 w-12 bg-primary rounded"></div>
                  </div>
                  <div className="h-24 w-1/3 bg-muted rounded-lg animate-pulse delay-75"></div>
                </div>
                
                <div className="h-40 w-full bg-gradient-to-r from-muted to-card border border-border rounded-lg relative overflow-hidden">
                  <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,100 C20,80 40,90 60,40 C80,10 90,50 100,20 L100,100 Z" fill="url(#grad)" opacity="0.5"></path>
                    <path d="M0,100 C20,80 40,90 60,40 C80,10 90,50 100,20" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"></path>
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-12 w-1/2 bg-muted rounded-lg animate-pulse delay-150"></div>
                  <div className="h-12 w-1/2 bg-muted rounded-lg animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
