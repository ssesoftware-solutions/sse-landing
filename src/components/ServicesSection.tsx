import { Code, BookOpen, Bot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t, language } = useLanguage();
  
  const services = [
    {
      icon: Code,
      title: language === 'es' ? "Desarrollo de Software" : "Software Development",
      description: language === 'es' 
        ? "Creamos aplicaciones web y móviles robustas y escalables, diseñadas para cumplir tus objetivos específicos y optimizar la experiencia de usuario."
        : "We create robust and scalable web and mobile applications, designed to meet your specific objectives and optimize user experience.",
      delay: "0ms"
    },
    {
      icon: BookOpen,
      title: language === 'es' ? "Implementaciones Odoo" : "Odoo Implementations",
      description: language === 'es'
        ? "Especialistas en la implementación y personalización de Odoo ERP para optimizar todos los procesos de tu empresa de manera integral."
        : "Specialists in Odoo ERP implementation and customization to comprehensively optimize all your company's processes.",
      delay: "150ms"
    },
    {
      icon: Bot,
      title: language === 'es' ? "Agentes de IA" : "AI Agents",
      description: language === 'es'
        ? "Diseñamos e implementamos agentes inteligentes que automatizan tareas, analizan datos y personalizan la interacción con tus clientes."
        : "We design and implement intelligent agents that automate tasks, analyze data, and personalize interaction with your customers.",
      delay: "300ms"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative inline-block">
            {t('servicesTitle')}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></div>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-center">
            {t('servicesSubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="service-card glass-effect p-8 rounded-xl border border-border slide-up"
                style={{ animationDelay: service.delay }}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 mb-6">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-left">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;