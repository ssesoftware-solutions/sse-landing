import { useLanguage } from "@/contexts/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ProcessSection = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  
  const steps = [
    {
      number: "01",
      title: t('processStep1'),
      description: t('processStep1Desc'),
      delay: "0ms"
    },
    {
      number: "02", 
      title: t('processStep2'),
      description: t('processStep2Desc'),
      delay: "150ms"
    },
    {
      number: "03",
      title: t('processStep3'), 
      description: t('processStep3Desc'),
      delay: "300ms"
    },
    {
      number: "04",
      title: t('processStep4'),
      description: t('processStep4Desc'),
      delay: "450ms"
    }
  ];

  return (
    <section id="process" className="py-20 bg-background-secondary" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative inline-block">
            {t('processTitle')}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></div>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-center">
            {t('processSubtitle')}
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-800 ${isIntersecting ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
                style={{ transitionDelay: `${parseInt(step.delay) + 300}ms` }}
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary text-2xl font-bold z-10">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;