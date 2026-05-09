import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { SiWhatsapp } from "react-icons/si";

const formSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  empresa: z.string().min(2, { message: "El nombre de la empresa es requerido" }),
  email: z.string().email({ message: "Email inválido" }),
  telefono: z.string().min(8, { message: "Teléfono inválido" }),
  mensaje: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" })
});

export function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      mensaje: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Mensaje enviado con éxito",
      description: "Nos pondremos en contacto contigo a la brevedad.",
    });
    form.reset();
  }

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent -z-10 pointer-events-none"></div>
      
      <div className="container px-6 md:px-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿Listo para transformar tu operación?</h2>
            <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
              Déjanos tus datos y un especialista se pondrá en contacto contigo para coordinar una demo personalizada de Venttra adaptada a tu negocio.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground/60">Email</h4>
                  <p className="text-white font-medium">info@venttra.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground/60">Ubicación</h4>
                  <p className="text-white font-medium">Argentina</p>
                </div>
              </div>
            </div>

            <Button 
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center gap-2 h-12 px-6" 
              onClick={() => window.open('https://wa.me/5491100000000', '_blank')}
              data-testid="contact-whatsapp"
            >
              <SiWhatsapp className="w-5 h-5" />
              Escríbenos por WhatsApp
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Solicitar Demo</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" className="bg-background border-border" {...field} data-testid="input-nombre" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="empresa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Empresa</FormLabel>
                        <FormControl>
                          <Input placeholder="Nombre de tu distribuidora" className="bg-background border-border" {...field} data-testid="input-empresa" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Email profesional</FormLabel>
                        <FormControl>
                          <Input placeholder="correo@empresa.com" className="bg-background border-border" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="+54 9 11 0000-0000" className="bg-background border-border" {...field} data-testid="input-telefono" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="mensaje"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80">Mensaje</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Cuéntanos brevemente sobre tus necesidades..." 
                          className="bg-background border-border min-h-[120px]" 
                          {...field} 
                          data-testid="input-mensaje"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white mt-4 h-12" data-testid="btn-submit-contact">
                  <Send className="w-4 h-4 mr-2" /> Solicitar Demo
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
