import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Ideal para pequeñas distribuidoras.",
      price: isAnnual ? 49 * 12 * 0.8 : 49,
      monthlyPrice: 49,
      period: isAnnual ? "/año" : "/mes",
      features: [
        "Hasta 5 usuarios",
        "500 pedidos/mes",
        "Dashboard básico",
        "Soporte por email"
      ],
      highlighted: false,
      buttonText: "Comenzar gratis"
    },
    {
      name: "Professional",
      description: "Para distribuidoras en crecimiento.",
      price: isAnnual ? 149 * 12 * 0.8 : 149,
      monthlyPrice: 149,
      period: isAnnual ? "/año" : "/mes",
      features: [
        "Hasta 20 usuarios",
        "Pedidos ilimitados",
        "IA predictiva",
        "Analítica avanzada",
        "Integración de sistemas",
        "Soporte prioritario"
      ],
      highlighted: true,
      buttonText: "Prueba gratuita 14 días"
    },
    {
      name: "Enterprise",
      description: "Para grandes distribuidoras.",
      price: "Consultar",
      period: "",
      features: [
        "Usuarios ilimitados",
        "Pedidos ilimitados",
        "IA avanzada personalizada",
        "Reportes a medida",
        "API completa",
        "Gerente de cuenta dedicado",
        "SLA garantizado"
      ],
      highlighted: false,
      buttonText: "Contactar ventas"
    }
  ];

  return (
    <section id="planes" className="py-24 bg-card/50 border-t border-border">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Elige el plan ideal para tu empresa
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-3"
          >
            <span className={`text-sm ${!isAnnual ? 'text-white font-medium' : 'text-foreground/60'}`}>Mensual</span>
            <Switch 
              checked={isAnnual} 
              onCheckedChange={setIsAnnual} 
              data-testid="billing-toggle"
            />
            <span className={`text-sm ${isAnnual ? 'text-white font-medium' : 'text-foreground/60'}`}>
              Anual <span className="text-primary text-xs ml-1 bg-primary/10 px-2 py-0.5 rounded-full">-20%</span>
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl border ${
                plan.highlighted 
                  ? 'border-primary shadow-[0_0_30px_-10px_rgba(30,107,255,0.4)] bg-background scale-105 z-10' 
                  : 'border-border bg-card hover:border-border/80'
              } p-8 flex flex-col h-full`}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Más Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-foreground/70 h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  {typeof plan.price === "number" ? (
                    <>
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-foreground/60">{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                  )}
                </div>
                {isAnnual && typeof plan.price === "number" && (
                  <p className="text-sm text-primary mt-1">Facturado anualmente (${plan.monthlyPrice}/mes)</p>
                )}
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? 'text-primary' : 'text-primary/70'}`} />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.highlighted ? "default" : "outline"} 
                className={`w-full ${plan.highlighted ? 'bg-primary hover:bg-primary/90 text-white' : ''}`}
                size="lg"
                data-testid={`btn-select-plan-${plan.name.toLowerCase()}`}
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
