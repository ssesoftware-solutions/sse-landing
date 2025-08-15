import { useLanguage } from "@/contexts/LanguageContext";

const ServicesIntroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 relative inline-block">
            {t('servicesTitle')}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-primary rounded-full"></div>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mt-8 leading-relaxed">
            {t('servicesSubtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntroSection;