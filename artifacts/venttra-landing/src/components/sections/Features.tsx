import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  LayoutDashboard, 
  ListChecks, 
  Brain, 
  Map, 
  Boxes, 
  FileText, 
  Unplug, 
  Smartphone, 
  Contact
} from "lucide-react";

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Dashboard Inteligente",
      description: "KPIs centralizados con visualizaciones claras y personalizables.",
      icon: <LayoutDashboard className="w-5 h-5" />,
      size: "large"
    },
    {
      title: "Analítica Predictiva con IA",
      description: "Modelos que aprenden de tus datos para pronosticar tendencias.",
      icon: <Brain className="w-5 h-5" />,
      size: "small"
    },
    {
      title: "Gestión de Vendedores y Zonas",
      description: "Mapeo y optimización de territorios comerciales.",
      icon: <Map className="w-5 h-5" />,
      size: "small"
    },
    {
      title: "Gestión de Pedidos",
      description: "Ciclo de vida completo del pedido automatizado.",
      icon: <ListChecks className="w-5 h-5" />,
      size: "medium"
    },
    {
      title: "Control de Inventario",
      description: "Sincronización en tiempo real de existencias.",
      icon: <Boxes className="w-5 h-5" />,
      size: "medium"
    },
    {
      title: "App Móvil para Vendedores",
      description: "Toma de pedidos offline y online en la calle.",
      icon: <Smartphone className="w-5 h-5" />,
      size: "large"
    },
    {
      title: "Gestión de Clientes (CRM)",
      description: "Historial, scoring y segmentación avanzada.",
      icon: <Contact className="w-5 h-5" />,
      size: "medium"
    },
    {
      title: "Reportes Automáticos",
      description: "Exportación y envío programado de métricas.",
      icon: <FileText className="w-5 h-5" />,
      size: "small"
    },
    {
      title: "Integración con Sistemas",
      description: "API robusta para conectar con tu ERP actual.",
      icon: <Unplug className="w-5 h-5" />,
      size: "small"
    }
  ];

  return (
    <section id="funcionalidades" className="py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-1/4 -z-10 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]"></div>
      
      <div className="container px-6 md:px-12 mx-auto">
        <div className="mb-16 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Funcionalidades que te permiten gestionar tu negocio de forma práctica y eficiente
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary rounded-full"
          ></motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[160px] gap-4">
          {features.map((feature, index) => {
            // Determine sizing classes based on 'size' property
            let spanClasses = "col-span-1 row-span-1";
            if (feature.size === "large") spanClasses = "col-span-1 md:col-span-2 row-span-2";
            if (feature.size === "medium") spanClasses = "col-span-1 md:col-span-2 row-span-1";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-card border border-border rounded-xl p-6 flex flex-col group hover:border-primary/40 transition-colors ${spanClasses}`}
                data-testid={`feature-card-${index}`}
              >
                <div className="bg-background w-10 h-10 rounded-lg flex items-center justify-center text-primary border border-border mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div className="mt-auto">
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/70">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
