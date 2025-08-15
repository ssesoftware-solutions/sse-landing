import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatModal from "@/components/ChatModal";
import ContactSection from "@/components/ContactSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Bot, 
  Scissors,
  Stethoscope,
  ShoppingCart,
  Users, 
  Clock, 
  Star,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Zap,
  BarChart3,
  Mail,
  Phone
} from "lucide-react";

const AgentesIA = () => {
  const [selectedAgent, setSelectedAgent] = useState<number | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedAgentName, setSelectedAgentName] = useState("");
  const [selectedWebhookUrl, setSelectedWebhookUrl] = useState("");
  const { t } = useLanguage();

  const getTechnologiesTranslated = (technologies: string[]): string[] => {
    return technologies;
  };

  const agents = [
    {
      id: 1,
      name: t('agentName1'),
      title: t('agentTitle1'), 
      webhookUrl: "https://webhookn8n.ssesoftsolutions.com/webhook/ed99df65-180d-473b-b0c3-4a86f4d3b6f2",
      description: t('agentDescription1'),
      icon: Scissors,
      features: [
        t('agentFeatures1.feature1'),
        t('agentFeatures1.feature2'),
        t('agentFeatures1.feature3'),
        t('agentFeatures1.feature4'),
        t('agentFeatures1.feature5')
      ],
      benefits: [
        t('agentBenefits1.benefit1'),
        t('agentBenefits1.benefit2'),
        t('agentBenefits1.benefit3'),
        t('agentBenefits1.benefit4'),
        t('agentBenefits1.benefit5')
      ],
      technologies: ["Procesamiento de Lenguaje Natural", "Integración de Calendario", "SMS/WhatsApp API", "Sistema de Recordatorios"],
      implementationTime: "2-3 semanas"
    },
    {
      id: 2,
      name: t('agentName2'),
      title: t('agentTitle2'),
      webhookUrl: "https://webhookn8n.ssesoftsolutions.com/webhook/e944fb85-7074-4848-ad32-be995e6d286d",
      description: t('agentDescription2'),
      icon: Stethoscope,
      features: [
        t('agentFeatures2.feature1'),
        t('agentFeatures2.feature2'),
        t('agentFeatures2.feature3'),
        t('agentFeatures2.feature4'),
        t('agentFeatures2.feature5')
      ],
      benefits: [
        t('agentBenefits2.benefit1'),
        t('agentBenefits2.benefit2'),
        t('agentBenefits2.benefit3'),
        t('agentBenefits2.benefit4'),
        t('agentBenefits2.benefit5')
      ],
      technologies: ["HIPAA Compliance", "Sistema de Citas Médicas", "Recordatorios Automatizados", "Integración EHR"],
      implementationTime: "3-4 semanas"
    },
    {
      id: 3,
      name: t('agentName3'),
      title: t('agentTitle3'),
      webhookUrl: "https://webhookn8n.ssesoftsolutions.com/webhook/e4e4e9fc-a86d-4a9b-af48-2f0dc5d342c9",
      description: t('agentDescription3'),
      icon: ShoppingCart,
      features: [
        t('agentFeatures3.feature1'),
        t('agentFeatures3.feature2'),
        t('agentFeatures3.feature3'),
        t('agentFeatures3.feature4'),
        t('agentFeatures3.feature5')
      ],
      benefits: [
        t('agentBenefits3.benefit1'),
        t('agentBenefits3.benefit2'),
        t('agentBenefits3.benefit3'),
        t('agentBenefits3.benefit4'),
        t('agentBenefits3.benefit5')
      ],
      technologies: ["E-commerce Integration", "Payment Gateway", "Product Recommendation AI", "Lead Scoring"],
      implementationTime: "2-4 semanas"
    }
  ];

  const openChat = (agentName: string, webhookUrl: string) => {
    setSelectedAgentName(agentName);
    setSelectedWebhookUrl(webhookUrl);
    setChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Bot className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 fade-in">
            {t("agentesIATitle")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 slide-up">
            {t("agentesIASubtitle")}
          </p>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          {/* Desktop Layout - Horizontal Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:mb-16">
            {agents.map((agent, index) => {
              const IconComponent = agent.icon;
              
              return (
                <Card 
                  key={agent.id}
                  className="service-card glass-effect border-border hover:border-primary cursor-pointer transition-all duration-300 slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => setSelectedAgent(selectedAgent === agent.id ? null : agent.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-foreground mb-2">
                          {agent.name}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground text-sm">
                          {agent.description}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="w-3 h-3 mr-1" />
                          {agent.implementationTime}
                        </div>
                        <Button 
                          variant="outline"
                          size="sm"
                          className="hover-glow"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedAgent(selectedAgent === agent.id ? null : agent.id);
                          }}
                        >
                          {selectedAgent === agent.id ? t("verMenos") : t("verDetalles")}
                          <ArrowRight className="ml-2 w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {/* Mobile Layout - Vertical List */}
          <div className="lg:hidden space-y-8">
            {agents.map((agent, index) => {
              const IconComponent = agent.icon;
              const isSelected = selectedAgent === agent.id;
              
              return (
                <div key={agent.id} className="space-y-4">
                  <Card 
                    className={`service-card glass-effect border-border hover:border-primary cursor-pointer transition-all duration-300 slide-up ${
                      isSelected ? 'border-primary shadow-glow' : ''
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                    onClick={() => setSelectedAgent(isSelected ? null : agent.id)}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg sm:text-xl text-foreground mb-2">
                              {agent.name}
                            </CardTitle>
                            <CardDescription className="text-muted-foreground text-sm sm:text-base">
                              {agent.description}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 flex-shrink-0">
                          <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            {agent.implementationTime}
                          </div>
                          <Button 
                            variant={isSelected ? "default" : "outline"}
                            size="sm"
                            className="hover-glow w-full sm:w-auto"
                          >
                            {isSelected ? t("verMenos") : t("verDetalles")}
                            <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  {/* Agent Details - Directly below each agent */}
                  {isSelected && (
                    <Card className="glass-effect border-primary shadow-glow fade-in ml-4 sm:ml-8">
                      <CardContent className="p-4 sm:p-6 space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                          <div>
                            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 flex items-center">
                              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2" />
                              {t("caracteristicasPrincipales")}
                            </h4>
                            <ul className="space-y-2">
                              {agent.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 flex items-center">
                              <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2" />
                              {t("beneficiosClave")}
                            </h4>
                            <ul className="space-y-2">
                              {agent.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm sm:text-base">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3">
                            {t("tecnologiasUtilizadas")}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {getTechnologiesTranslated(agent.technologies).map((tech, index) => (
                              <Badge key={index} variant="outline" className="border-primary text-primary text-xs sm:text-sm">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                          <div className="flex items-center">
                            <span className="text-muted-foreground text-sm">
                              {t("tiempoImplementacion")}: {agent.implementationTime}
                            </span>
                          </div>
                          <Button 
                            onClick={() => openChat(agent.name, agent.webhookUrl)}
                            className="hover-glow sm:ml-auto"
                            size="sm"
                          >
                            <Users className="w-4 h-4 mr-2" />
                            {t("chateaConAgente")}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Agent Details - Show for selected agent */}
          {selectedAgent && (
            <div className="hidden lg:block">
              {agents.filter(agent => agent.id === selectedAgent).map(agent => (
                <Card key={agent.id} className="glass-effect border-primary shadow-glow fade-in">
                  <CardContent className="p-6 space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                          <Zap className="w-5 h-5 text-primary mr-2" />
                          {t("caracteristicasPrincipales")}
                        </h4>
                        <ul className="space-y-2">
                          {agent.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                          <BarChart3 className="w-5 h-5 text-primary mr-2" />
                          {t("beneficiosClave")}
                        </h4>
                        <ul className="space-y-2">
                          {agent.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        {t("tecnologiasUtilizadas")}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {getTechnologiesTranslated(agent.technologies).map((tech, index) => (
                          <Badge key={index} variant="outline" className="border-primary text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                      <div className="flex items-center">
                        <span className="text-muted-foreground">
                          {t("tiempoImplementacion")}: {agent.implementationTime}
                        </span>
                      </div>
                      <Button 
                        onClick={() => openChat(agent.name, agent.webhookUrl)}
                        className="hover-glow sm:ml-auto"
                      >
                        <Users className="w-4 h-4 mr-2" />
                        {t("chateaConAgente")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer />

      {/* Chat Modal */}
      <ChatModal 
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        agentName={selectedAgentName}
        webhookUrl={selectedWebhookUrl}
      />
    </div>
  );
};

export default AgentesIA;