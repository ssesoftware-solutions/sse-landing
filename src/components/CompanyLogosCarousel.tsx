import { useLanguage } from "@/contexts/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const CompanyLogosCarousel = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  // Company logos of trusted clients
  const companies = [
    { name: "NISSI", logo: "/lovable-uploads/ed6f9737-edec-4068-a111-326bc605fa95.png" },
    { name: "DIPROSEL", logo: "/lovable-uploads/fea22ed4-1f02-4cc3-9427-a57e60a28a4b.png" },
    { name: "YATHA", logo: "/lovable-uploads/57c49080-3929-47a4-949e-1abdc9caca55.png" },
    { name: "NISSI", logo: "/lovable-uploads/ed6f9737-edec-4068-a111-326bc605fa95.png" },
    { name: "DIPROSEL", logo: "/lovable-uploads/fea22ed4-1f02-4cc3-9427-a57e60a28a4b.png" },
    { name: "YATHA", logo: "/lovable-uploads/57c49080-3929-47a4-949e-1abdc9caca55.png" }
  ];

  return (
    <section className="py-16 bg-muted/30" ref={ref}>
      <div className={`text-center mb-12 transition-all duration-800 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h3 className={`text-xl md:text-2xl font-semibold text-foreground mb-2 transition-all duration-800 delay-200 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('trustedByTitle')}
        </h3>
        <p className={`text-muted-foreground text-sm transition-all duration-800 delay-400 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t('trustedBySubtitle')}
        </p>
      </div>
      
      <div className="relative overflow-hidden w-full">
        <div className="flex animate-scroll space-x-16">
          {/* First set of logos */}
          {companies.map((company, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center min-w-[120px]"
            >
               <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {companies.map((company, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center justify-center min-w-[120px]"
            >
               <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogosCarousel;