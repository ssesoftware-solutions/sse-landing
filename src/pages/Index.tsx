import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesIntroSection from "@/components/ServicesIntroSection";
import IndividualServiceSection from "@/components/IndividualServiceSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CompanyLogosCarousel from "@/components/CompanyLogosCarousel";
import ContactSection from "@/components/ContactSection";
import { Code, BookOpen, Bot, BarChart3, Cloud } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <HeroSection />
      <CompanyLogosCarousel />
      <ServicesIntroSection />
      
      {/* Individual Service Sections */}
      <IndividualServiceSection
        icon={Code}
        title={t('softwareDevelopmentTitle')}
        subtitle={t('softwareDevelopmentSubtitle')}
        description={t('softwareDevelopmentDescription')}
        serviceType="software"
      />
      
      <IndividualServiceSection
        icon={BookOpen}
        title={t('odooImplementationTitle')}
        subtitle={t('odooImplementationSubtitle')}
        description={t('odooImplementationDescription')}
        serviceType="odoo"
        reversed={true}
      />
      
      <IndividualServiceSection
        icon={Bot}
        title={t('aiAgentsTitle')}
        subtitle={t('aiAgentsSubtitle')}
        description={t('aiAgentsDescription')}
        serviceType="ai"
      />
      
      <IndividualServiceSection
        icon={BarChart3}
        title={t('digitalAnalyticsTitle')}
        subtitle={t('digitalAnalyticsSubtitle')}
        description={t('digitalAnalyticsDescription')}
        serviceType="analytics"
        reversed={true}
      />
      
      <IndividualServiceSection
        icon={Cloud}
        title={t('cloudInfrastructureTitle')}
        subtitle={t('cloudInfrastructureSubtitle')}
        description={t('cloudInfrastructureDescription')}
        serviceType="cloud"
      />
      
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
