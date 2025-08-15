import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Header
    inicio: "Inicio",
    agentesIA: "Agentes IA",
    contactar: "Contactar",
    
    // Hero Section
    heroTitle: "Transformamos Ideas en Realidad Digital",
    heroSubtitle: "Desarrollamos software a medida y sistemas de inteligencia artificial que impulsan el crecimiento de tu negocio con innovación y precisión.",
    heroButton: "Comenzar Proyecto",
    heroDemoButton: "Prueba Demo IA",
    
    // Services Section
    servicesTitle: "Nuestros Servicios",
    servicesSubtitle: "Ofrecemos soluciones tecnológicas integrales que transforman la manera en que tu empresa opera y crece.",
    
    // Individual Service Sections
    softwareDevelopmentTitle: 'Desarrollo de Software',
    softwareDevelopmentSubtitle: 'Aplicaciones robustas y escalables',
    softwareDevelopmentDescription: 'Creamos aplicaciones web y móviles robustas y escalables, diseñadas para cumplir tus objetivos específicos y optimizar la experiencia de usuario.',
    
    odooImplementationTitle: 'Implementaciones Odoo',
    odooImplementationSubtitle: 'ERP personalizado para tu empresa',
    odooImplementationDescription: 'Especialistas en la implementación y personalización de Odoo ERP para optimizar todos los procesos de tu empresa de manera integral.',
    
    aiAgentsTitle: 'Agentes de IA',
    aiAgentsSubtitle: 'Automatización inteligente personalizada',
    aiAgentsDescription: 'Diseñamos e implementamos agentes inteligentes que automatizan tareas, analizan datos y personalizan la interacción con tus clientes.',
    
    digitalAnalyticsTitle: 'Analítica Digital Estratégica',
    digitalAnalyticsSubtitle: 'Tus datos son tu activo más valioso. Nosotros los hacemos hablar.',
    digitalAnalyticsDescription: 'Transformamos flujos de datos complejos en insights claros y accionables. Medimos, interpretamos y optimizamos cada interacción digital para que tomes decisiones basadas en evidencia, no en suposiciones, maximizando tu ROI.',
    
    cloudInfrastructureTitle: 'Cloud & Infraestructura',
    cloudInfrastructureSubtitle: 'Escalabilidad, seguridad y flexibilidad sin fronteras.',
    cloudInfrastructureDescription: 'Diseñamos e implementamos arquitecturas en la nube robustas y eficientes. Ya sea que necesites migrar, optimizar o construir desde cero, te proporcionamos la infraestructura que tu negocio necesita para crecer de forma segura y sin límites.',
    
    // Process Section
    processTitle: "Nuestro Proceso Colaborativo",
    processSubtitle: "Un enfoque transparente y probado para garantizar el éxito de cada proyecto.",
    processStep1: "Descubrimiento",
    processStep1Desc: "Analizamos a fondo tus necesidades y objetivos empresariales.",
    processStep2: "Diseño y Prototipado",
    processStep2Desc: "Creamos prototipos y experiencias de usuario intuitivas.",
    processStep3: "Desarrollo Ágil",
    processStep3Desc: "Construimos la solución con metodologías ágiles y probadas.",
    processStep4: "Despliegue y Soporte",
    processStep4Desc: "Implementamos y ofrecemos soporte continuo para el éxito.",
    
    // Contact Section
    projectContactTitle: "¿Listo para Implementar IA en tu Negocio?",
    projectContactSubtitle: "Creemos un agente personalizado para tu negocio. Cuéntanos tu proyecto y diseñaremos la solución perfecta.",
    contactTitle: "Contacta con Nuestros Expertos",
    contactSubtitle: "Agenda una consulta gratuita para descubrir cómo nuestros agentes de IA pueden transformar tu negocio.",
    email: "Email",
    telefono: "Teléfono",
    horario: "Horario",
    contactEmail: "ventas@ssesoftsolutions.com",
    contactPhone: "+51 961 001 307",
    contactHours: "Lun - Vie: 9AM - 6PM",
    formName: "Tu Nombre",
    formEmail: "Tu Email",
    formPhone: "Número de Teléfono",
    formSubject: "Asunto",
    formMessage: "Cuéntanos sobre tu proyecto...",
    formSubmit: "Enviar Mensaje",
    formSubmitting: "Enviando...",
    formSuccess: "¡Mensaje enviado!",
    formSuccessDesc: "Te contactaremos pronto para discutir tu proyecto.",
    formError: "Error",
    formErrorDesc: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
    
    // Agents page
    agentesIATitle: "Agentes de IA Especializados", 
    agentesIASubtitle: "Descubre nuestros tres agentes de inteligencia artificial diseñados para transformar y automatizar los procesos clave de tu negocio.",
    verDetalles: "Ver detalles",
    verMenos: "Ver menos",
    chateaConAgente: "Chatea con nuestro agente",
    caracteristicasPrincipales: "Características Principales",
    beneficiosClave: "Beneficios Clave",
    tecnologiasUtilizadas: "Tecnologías Utilizadas",
    tiempoImplementacion: "Tiempo de implementación",
    mainFeatures: "Características Principales",
    keyBenefits: "Beneficios Clave",
    technologies: "Tecnologías",
    implementationTime: "Tiempo de implementación",
    chatWithAgent: "Chatear con agente",
    viewDetails: "Ver detalles",
    contactUs: "Contáctanos",
    
    // Agent data
    agentTitle1: "Asistente para Citas de Belleza",
    agentName1: "Zoe, tu Recepcionista Virtual",
    agentDescription1: "Tu recepcionista 24/7. Agenda citas por llamada o mensaje y envía recordatorios automáticos. Así, tu salón siempre está lleno y tú te dedicas a tu arte.",
    agentFeatures1: {
      feature1: "Agendamiento de citas por llamada y WhatsApp/SMS",
      feature2: "Disponibilidad 24/7 para no perder ningún cliente",
      feature3: "Sincronización en tiempo real con tu calendario",
      feature4: "Envío automático de recordatorios y confirmaciones",
      feature5: "Respuesta a preguntas frecuentes (horarios, servicios, etc.)"
    },
    agentBenefits1: {
      benefit1: "Agenda siempre llena: Maximiza tu ocupación capturando citas a toda hora",
      benefit2: "Menos ausentismo: Reduce drásticamente las citas no asistidas gracias a los recordatorios",
      benefit3: "Más tiempo para ti: Dedica tus horas a tus clientes y tu arte, no al teléfono",
      benefit4: "Experiencia profesional: Ofrece a tus clientes una forma moderna y fácil de reservar",
      benefit5: "Cero clientes perdidos: Cada llamada o mensaje es una oportunidad de negocio atendida"
    },
    agentTechnologies1: ["Procesamiento de Lenguaje Natural", "Integración de Calendario", "SMS/WhatsApp API", "Sistema de Recordatorios"],
    
    agentTitle2: "Asistente para Citas Médicas",
    agentName2: "Eva, tu Asistente de Pacientes",
    agentDescription2: "Optimiza tu consultorio. Agenda citas de forma segura, reduce el ausentismo con recordatorios y libera a tu personal para mejorar la atención al paciente.",
    agentFeatures2: {
      feature1: "Gestión profesional de citas para pacientes por llamada y texto",
      feature2: "Confirmación, cancelación y reprogramación de citas de forma automática",
      feature3: "Envío de recordatorios automáticos con indicaciones previas a la consulta",
      feature4: "Plataforma segura que protege la comunicación con el paciente",
      feature5: "Integración con la agenda del consultorio o software médico"
    },
    agentBenefits2: {
      benefit1: "Optimización del consultorio: Agiliza la gestión y reduce la carga administrativa",
      benefit2: "Menos citas fallidas: Disminuye significativamente la tasa de ausentismo (no-shows)",
      benefit3: "Personal más enfocado: Libera a tu equipo para que se concentre en la atención al paciente",
      benefit4: "Mejor experiencia del paciente: Brinda un canal de comunicación eficiente y siempre disponible",
      benefit5: "Imagen de confianza: Proyecta una imagen moderna, organizada y profesional"
    },
    agentTechnologies2: ["HIPAA Compliance", "Sistema de Citas Médicas", "Recordatorios Automatizados", "Integración EHR"],
    
    agentTitle3: "Asistente de Ventas E-commerce",
    agentName3: "Leo, tu Vendedor Estrella",
    agentDescription3: "El vendedor IA que atiende 24/7. Asesora sobre productos, responde dudas al instante y cierra la venta con un link de pago. Convierte cada visita en una venta.",
    agentFeatures3: {
      feature1: "Asesoría interactiva y personalizada sobre tu catálogo de productos",
      feature2: "Respuesta instantánea 24/7 a preguntas frecuentes (envíos, stock, pagos)",
      feature3: "Guía proactiva para ayudar al cliente a tomar la decisión de compra",
      feature4: "Generación de enlaces de pago directos para cerrar la venta en el chat",
      feature5: "Capacidad para calificar leads y entregar los más importantes a un vendedor humano"
    },
    agentBenefits3: {
      benefit1: "Ventas 24/7 garantizadas: Tu tienda vende incluso mientras duermes",
      benefit2: "Mayor conversión: Convierte a los visitantes indecisos en compradores satisfechos",
      benefit3: "Aumento del ticket promedio: Recomienda productos complementarios de forma inteligente",
      benefit4: "Soporte inmediato: Reduce el abandono de carritos por dudas no resueltas",
      benefit5: "Experiencia de compra superior: Ofrece un servicio de atención memorable y eficaz"
    },
    agentTechnologies3: ["E-commerce Integration", "Payment Gateway", "Product Recommendation AI", "Lead Scoring"],
    
    
    // Technologies in Spanish
    techRAG: "Tecnología RAG",
    techNLP: "Procesamiento de Lenguaje Natural",
    techDatabase: "Base de Datos",
    techAPIIntegration: "Integración de APIs",
    techMachineLearning: "Aprendizaje Automático",
    techCRMIntegration: "Integración CRM",
    techVectorDatabase: "Base de Datos Vectorial",
    techLegalAI: "IA Legal",
    techDocumentProcessing: "Procesamiento de Documentos",
    techSecureEncryption: "Cifrado Seguro",
    techPaymentIntegration: "Integración de Pagos",
    techKnowledgeBaseAI: "IA de Base de Conocimiento",
    techCalendarIntegration: "Integración de Calendario",
    techLeadManagement: "Gestión de Leads",
    techCorporateTraining: "Entrenamiento Corporativo",
    techRealTimeScheduling: "Programación en Tiempo Real",
    techCRMSync: "Sincronización CRM",
    
    // CTA Section
    ctaTitle: "¿Listo para Implementar IA en tu Negocio?",
    ctaSubtitle: "Nuestros agentes de IA están diseñados para integrarse perfectamente con tus sistemas existentes y generar resultados inmediatos.",
    ctaButton: "Comenzar mi Proyecto de IA",
    
    // Testimonials
    testimonialsTitle: "Testimonios",
    testimonialsSubtitle: "Lo que dicen nuestros clientes sobre nosotros",
    
    // Trusted companies section
    trustedByTitle: 'Empresas que confían en nosotros',
    trustedBySubtitle: 'Líderes de la industria que han transformado sus procesos con nuestros agentes IA',

    // Testimonials content
    testimonial1Name: "Carlos Rodríguez",
    testimonial1Position: "CEO de Diprosel",
    testimonial1Content: "La implementación de su agente IA transformó completamente nuestro proceso de ventas. Ahora capturamos 3x más leads calificados y reducimos significativamente los tiempos de respuesta.",
    testimonial1Company: "Diprosel",
    
    testimonial2Name: "María González",
    testimonial2Position: "CEO de Yatha", 
    testimonial2Content: "El nivel de personalización y la calidad técnica superaron nuestras expectativas. Nuestros clientes ahora reciben atención 24/7 de manera profesional.",
    testimonial2Company: "Yatha",
    
    testimonial3Name: "Roberto Silva",
    testimonial3Position: "CEO de Nissi",
    testimonial3Content: "En solo 3 semanas teníamos nuestro asistente funcionando. El nivel de automatización que logramos superó nuestras expectativas y el ROI fue inmediato.",
    testimonial3Company: "Nissi",
    
    testimonial4Name: "Ana Martínez",
    testimonial4Position: "CTO, DigitalFlow",
    testimonial4Content: "La integración con nuestros sistemas existentes fue perfecta. Definitivamente recomiendo sus servicios.",
    testimonial4Company: "DigitalFlow",

    // Agent content translations
    agenteDescripcionTecnico: "Especialista técnico-comercial virtual para sectores técnicos exigentes, guiando clientes hacia soluciones exactas.",
    agenteDescripcionLegal: "Asesor legal virtual de alta precisión con tecnología RAG para consultas sobre legislación y documentos privados.",
    agenteDescripcionFAQ: "Guardián del conocimiento empresarial que responde consultas corporativas y agenda citas en tiempo real.",

    // Technical Agent Features and Benefits
    tecnicoFeature1: "Interacción inteligente con base de datos de productos",
    tecnicoFeature2: "Diagnósticos técnicos preliminares automatizados",
    tecnicoFeature3: "Recomendaciones de componentes personalizadas",
    tecnicoFeature4: "Envío instantáneo de documentación técnica",
    tecnicoFeature5: "Pre-calificación automática de leads",
    tecnicoFeature6: "Integración con sistemas de pago directo",

    tecnicoBenefit1: "Soporte técnico experto disponible 24/7",
    tecnicoBenefit2: "Pre-calificación y educación de prospectos",
    tecnicoBenefit3: "Entrega de leads de alta calidad al equipo de ventas",
    tecnicoBenefit4: "Incremento directo en ventas con compras informadas",
    tecnicoBenefit5: "Reducción significativa de costos operativos",
    tecnicoBenefit6: "Filtrado inteligente de consultas complejas",

    // Legal Agent Features and Benefits
    legalFeature1: "Tecnología RAG avanzada para documentos legales",
    legalFeature2: "Base de conocimiento privada y segura",
    legalFeature3: "Consultas sobre legislación específica del cliente",
    legalFeature4: "Respuestas precisas sobre migración empresarial",
    legalFeature5: "Asesoría en constitución de empresas",
    legalFeature6: "Integración con sistemas de contratación directa",

    legalBenefit1: "Asesoría legal confiable e instantánea",
    legalBenefit2: "Respuestas basadas en información verificada",
    legalBenefit3: "Generación de confianza en clientes potenciales",
    legalBenefit4: "Automatización de consultas legales iniciales",
    legalBenefit5: "Calificación de leads de alta intención",
    legalBenefit6: "Reducción de carga de trabajo del equipo legal",

    // FAQ Agent Features and Benefits
    faqFeature1: "Respuestas instantáneas sobre misión y visión empresarial",
    faqFeature2: "Base de conocimiento personalizada de servicios",
    faqFeature3: "Sistema inteligente de preguntas frecuentes",
    faqFeature4: "Registro automatizado de leads calificados",
    faqFeature5: "Agenda de citas con calendarios en tiempo real",
    faqFeature6: "Comunicación corporativa consistente",

    faqBenefit1: "Comunicación corporativa siempre consistente",
    faqBenefit2: "Automatización completa del primer contacto",
    faqBenefit3: "Garantía de respuesta a todos los clientes",
    faqBenefit4: "Optimización del tiempo del equipo interno",
    faqBenefit5: "Mayor captación de leads cualificados",
    faqBenefit6: "Conversión de curiosidad en oportunidades comerciales",
  },
  en: {
    // Header
    inicio: "Home",
    agentesIA: "AI Agents",
    contactar: "Contact",
    
    // Hero Section
    heroTitle: "Transforming Ideas into Digital Reality",
    heroSubtitle: "We develop custom software and artificial intelligence systems that drive your business growth with innovation and precision.",
    heroButton: "Start Project",
    heroDemoButton: "Try AI Demo",
    
    // Services Section
    servicesTitle: "Our Services",
    servicesSubtitle: "We offer comprehensive technological solutions that transform the way your company operates and grows.",
    
    // Individual Service Sections
    softwareDevelopmentTitle: 'Software Development',
    softwareDevelopmentSubtitle: 'Robust and scalable applications',
    softwareDevelopmentDescription: 'We create robust and scalable web and mobile applications, designed to meet your specific objectives and optimize user experience.',
    
    odooImplementationTitle: 'Odoo Implementations',
    odooImplementationSubtitle: 'Customized ERP for your company',
    odooImplementationDescription: 'Specialists in Odoo ERP implementation and customization to comprehensively optimize all your company\'s processes.',
    
    aiAgentsTitle: 'AI Agents',
    aiAgentsSubtitle: 'Personalized intelligent automation',
    aiAgentsDescription: 'We design and implement intelligent agents that automate tasks, analyze data, and personalize interaction with your customers.',
    
    digitalAnalyticsTitle: 'Strategic Digital Analytics',
    digitalAnalyticsSubtitle: 'Your data is your most valuable asset. We make it speak.',
    digitalAnalyticsDescription: 'We transform complex data flows into clear and actionable insights. We measure, interpret and optimize every digital interaction so you can make decisions based on evidence, not assumptions, maximizing your ROI.',
    
    cloudInfrastructureTitle: 'Cloud & Infrastructure',
    cloudInfrastructureSubtitle: 'Scalability, security and flexibility without borders.',
    cloudInfrastructureDescription: 'We design and implement robust and efficient cloud architectures. Whether you need to migrate, optimize or build from scratch, we provide the infrastructure your business needs to grow safely and without limits.',
    
    // Process Section
    processTitle: "Our Collaborative Process",
    processSubtitle: "A transparent and proven approach to ensure the success of every project.",
    processStep1: "Discovery",
    processStep1Desc: "We thoroughly analyze your business needs and objectives.",
    processStep2: "Design & Prototyping",
    processStep2Desc: "We create prototypes and intuitive user experiences.",
    processStep3: "Agile Development",
    processStep3Desc: "We build the solution with proven agile methodologies.",
    processStep4: "Deployment & Support",
    processStep4Desc: "We implement and provide ongoing support for success.",
    
    // Contact Section
    projectContactTitle: "Ready to Implement AI in Your Business?",
    projectContactSubtitle: "Let's create a custom agent for your business. Tell us about your project and we'll design the perfect solution.",
    contactTitle: "Contact Our Experts",
    contactSubtitle: "Schedule a free consultation to discover how our AI agents can transform your business.",
    email: "Email",
    telefono: "Phone",
    horario: "Hours",
    contactEmail: "ventas@ssesoftsolutions.com",
    contactPhone: "+51 961 001 307",
    contactHours: "Mon - Fri: 9AM - 6PM",
    formName: "Your Name",
    formEmail: "Your Email",
    formPhone: "Phone Number",
    formSubject: "Subject",
    formMessage: "Tell us about your project...",
    formSubmit: "Send Message",
    formSubmitting: "Sending...",
    formSuccess: "Message sent!",
    formSuccessDesc: "We'll contact you soon to discuss your project.",
    formError: "Error",
    formErrorDesc: "There was a problem sending your message. Please try again.",
    
    // Agents page
    agentesIATitle: "Specialized AI Agents",
    agentesIASubtitle: "Discover our three artificial intelligence agents designed to transform and automate key business processes.",
    verDetalles: "View details",
    verMenos: "View less",
    chateaConAgente: "Chat with our agent",
    caracteristicasPrincipales: "Key Features",
    beneficiosClave: "Key Benefits",
    tecnologiasUtilizadas: "Technologies Used",
    tiempoImplementacion: "Implementation time",
    mainFeatures: "Key Features",
    keyBenefits: "Key Benefits", 
    technologies: "Technologies",
    implementationTime: "Implementation time",
    chatWithAgent: "Chat with agent",
    viewDetails: "View details",
    contactUs: "Contact us",
    
    // Agent data
    agentTitle1: "Beauty Appointment Assistant",
    agentName1: "Zoe, your Virtual Receptionist",
    agentDescription1: "Your 24/7 receptionist. Books appointments by phone or message and sends automatic reminders. This way, your salon is always full and you focus on your art.",
    agentFeatures1: {
      feature1: "Appointment scheduling via calls and WhatsApp/SMS",
      feature2: "24/7 availability to not lose any client",
      feature3: "Real-time synchronization with your calendar",
      feature4: "Automatic sending of reminders and confirmations",
      feature5: "Response to frequently asked questions (hours, services, etc.)"
    },
    agentBenefits1: {
      benefit1: "Always full schedule: Maximizes your occupancy by capturing appointments at all hours",
      benefit2: "Less absenteeism: Drastically reduces missed appointments thanks to reminders",
      benefit3: "More time for you: Dedicate your hours to your clients and your art, not the phone",
      benefit4: "Professional experience: Offers your clients a modern and easy way to book",
      benefit5: "Zero lost clients: Every call or message is a business opportunity attended"
    },
    agentTechnologies1: ["Natural Language Processing", "Calendar Integration", "SMS/WhatsApp API", "Reminder System"],
    
    agentTitle2: "Medical Appointment Assistant",
    agentName2: "Eva, your Patient Assistant",
    agentDescription2: "Optimizes your clinic. Books appointments securely, reduces absenteeism with reminders, and frees your staff to improve patient care.",
    agentFeatures2: {
      feature1: "Professional appointment management for patients via calls and text",
      feature2: "Automatic confirmation, cancellation and rescheduling of appointments",
      feature3: "Automatic sending of reminders with pre-consultation instructions",
      feature4: "Secure platform that protects patient communication",
      feature5: "Integration with clinic schedule or medical software"
    },
    agentBenefits2: {
      benefit1: "Clinic optimization: Streamlines management and reduces administrative burden",
      benefit2: "Fewer missed appointments: Significantly decreases no-show rate",
      benefit3: "More focused staff: Frees your team to concentrate on patient care",
      benefit4: "Better patient experience: Provides an efficient and always available communication channel",
      benefit5: "Trust image: Projects a modern, organized and professional image"
    },
    agentTechnologies2: ["HIPAA Compliance", "Medical Appointment System", "Automated Reminders", "EHR Integration"],
    
    agentTitle3: "E-commerce Sales Assistant",
    agentName3: "Leo, your Star Salesperson",
    agentDescription3: "The AI salesperson who works 24/7. Advises on products, answers questions instantly, and closes sales with a payment link. Converts every visit into a sale.",
    agentFeatures3: {
      feature1: "Interactive and personalized advice about your product catalog",
      feature2: "Instant 24/7 response to frequently asked questions (shipping, stock, payments)",
      feature3: "Proactive guidance to help customers make purchase decisions",
      feature4: "Generation of direct payment links to close sales in chat",
      feature5: "Ability to qualify leads and deliver the most important ones to a human salesperson"
    },
    agentBenefits3: {
      benefit1: "Guaranteed 24/7 sales: Your store sells even while you sleep",
      benefit2: "Higher conversion: Converts undecided visitors into satisfied buyers",
      benefit3: "Increased average ticket: Intelligently recommends complementary products",
      benefit4: "Immediate support: Reduces cart abandonment due to unresolved doubts",
      benefit5: "Superior shopping experience: Offers memorable and effective customer service"
    },
    agentTechnologies3: ["E-commerce Integration", "Payment Gateway", "Product Recommendation AI", "Lead Scoring"],
    
    
    // Technologies in English
    techRAG: "RAG Technology",
    techNLP: "Natural Language Processing",
    techDatabase: "Database",
    techAPIIntegration: "API Integration",
    techMachineLearning: "Machine Learning",
    techCRMIntegration: "CRM Integration",
    techVectorDatabase: "Vector Database",
    techLegalAI: "Legal AI",
    techDocumentProcessing: "Document Processing",
    techSecureEncryption: "Secure Encryption",
    techPaymentIntegration: "Payment Integration",
    techKnowledgeBaseAI: "Knowledge Base AI",
    techCalendarIntegration: "Calendar Integration",
    techLeadManagement: "Lead Management",
    techCorporateTraining: "Corporate Training",
    techRealTimeScheduling: "Real-time Scheduling",
    techCRMSync: "CRM Sync",
    
    // CTA Section
    ctaTitle: "Ready to Implement AI in Your Business?",
    ctaSubtitle: "Our AI agents are designed to integrate seamlessly with your existing systems and generate immediate results.",
    ctaButton: "Start my AI Project",
    
    // Testimonials
    testimonialsTitle: "Testimonials",
    testimonialsSubtitle: "What our clients say about us",
    
    // Trusted companies section
    trustedByTitle: 'Companies that trust us',
    trustedBySubtitle: 'Industry leaders who have transformed their processes with our AI agents',

    // Testimonials content
    testimonial1Name: "Carlos Rodríguez",
    testimonial1Position: "CEO of Diprosel",
    testimonial1Content: "The implementation of their AI agent completely transformed our sales process. We now capture 3x more qualified leads and significantly reduced response times.",
    testimonial1Company: "Diprosel",
    
    testimonial2Name: "María González",
    testimonial2Position: "CEO of Yatha", 
    testimonial2Content: "The level of personalization and technical quality exceeded our expectations. Our customers now receive 24/7 professional service.",
    testimonial2Company: "Yatha",
    
    testimonial3Name: "Roberto Silva",
    testimonial3Position: "CEO of Nissi",
    testimonial3Content: "In just 3 weeks we had our assistant working. The level of automation we achieved exceeded our expectations and the ROI was immediate.",
    testimonial3Company: "Nissi",
    
    testimonial4Name: "Ana Martínez",
    testimonial4Position: "CTO, DigitalFlow",
    testimonial4Content: "The integration with our existing systems was perfect. I definitely recommend their services.",
    testimonial4Company: "DigitalFlow",

    // Agent content translations
    agenteDescripcionTecnico: "Virtual technical-commercial specialist for demanding technical sectors, guiding clients to exact solutions.",
    agenteDescripcionLegal: "High-precision virtual legal advisor with RAG technology for legislation and private document queries.",
    agenteDescripcionFAQ: "Corporate knowledge guardian that answers business queries and schedules appointments in real time.",

    // Technical Agent Features and Benefits
    tecnicoFeature1: "Intelligent interaction with product database",
    tecnicoFeature2: "Automated preliminary technical diagnostics",
    tecnicoFeature3: "Personalized component recommendations",
    tecnicoFeature4: "Instant technical documentation delivery",
    tecnicoFeature5: "Automatic lead pre-qualification",
    tecnicoFeature6: "Direct payment system integration",

    tecnicoBenefit1: "Expert technical support available 24/7",
    tecnicoBenefit2: "Lead pre-qualification and prospect education",
    tecnicoBenefit3: "High-quality lead delivery to sales team",
    tecnicoBenefit4: "Direct sales increase with informed purchases",
    tecnicoBenefit5: "Significant operational cost reduction",
    tecnicoBenefit6: "Intelligent filtering of complex queries",

    // Legal Agent Features and Benefits
    legalFeature1: "Advanced RAG technology for legal documents",
    legalFeature2: "Private and secure knowledge base",
    legalFeature3: "Client-specific legislation queries",
    legalFeature4: "Precise answers on business migration",
    legalFeature5: "Company incorporation advice",
    legalFeature6: "Direct contracting system integration",

    legalBenefit1: "Reliable and instant legal advice",
    legalBenefit2: "Responses based on verified information",
    legalBenefit3: "Trust generation in potential clients",
    legalBenefit4: "Automation of initial legal queries",
    legalBenefit5: "High-intent lead qualification",
    legalBenefit6: "Legal team workload reduction",

    // FAQ Agent Features and Benefits
    faqFeature1: "Instant responses about company mission and vision",
    faqFeature2: "Personalized service knowledge base",
    faqFeature3: "Intelligent frequently asked questions system",
    faqFeature4: "Automated qualified lead registration",
    faqFeature5: "Real-time calendar appointment scheduling",
    faqFeature6: "Consistent corporate communication",

    faqBenefit1: "Always consistent corporate communication",
    faqBenefit2: "Complete first contact automation",
    faqBenefit3: "Guaranteed response to all clients",
    faqBenefit4: "Internal team time optimization",
    faqBenefit5: "Increased qualified lead capture",
    faqBenefit6: "Conversion of curiosity into commercial opportunities",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};