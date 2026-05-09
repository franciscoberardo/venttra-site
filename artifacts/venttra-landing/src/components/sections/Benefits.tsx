import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  LineChart, 
  BrainCircuit, 
  ShoppingCart, 
  Activity, 
  Users, 
  PackageSearch 
} from "lucide-react";

export function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      title: "Optimización de Ventas",
      description: "Maximiza tus ingresos identificando patrones de compra y oportunidades de cross-selling automáticamente.",
      icon: <LineChart className="w-6 h-6" />
    },
    {
      title: "Predicción de Demanda con IA",
      description: "Anticípate al mercado. Nuestra IA analiza históricos para prever qué productos necesitarás y cuándo.",
      icon: <BrainCircuit className="w-6 h-6" />
    },
    {
      title: "Gestión de Pedidos",
      description: "Flujo de trabajo ágil desde la captura hasta la entrega, reduciendo errores y tiempos de procesamiento.",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "Analítica en Tiempo Real",
      description: "Métricas clave al instante. Toma decisiones informadas basadas en datos actuales, no en reportes del mes pasado.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Gestión de Vendedores",
      description: "Monitorea el desempeño, asigna objetivos, optimiza rutas y empodera a tu fuerza de ventas.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Control de Inventario",
      description: "Visibilidad total de tu stock. Evita quiebres y reduce el capital inmovilizado en mercancía de baja rotación.",
      icon: <PackageSearch className="w-6 h-6" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-card/30 relative border-y border-border">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            ¿En qué te puede ayudar Venttra?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground/80 text-lg"
          >
            Soluciones diseñadas para resolver los cuellos de botella reales de tu operación diaria.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-background border border-border p-8 rounded-xl hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
              data-testid={`benefit-card-${index}`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
