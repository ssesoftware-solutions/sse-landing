import { useLanguage } from "@/contexts/LanguageContext";
import { Star, Quote } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  
  const testimonials = [
    {
      name: t('testimonial1Name'),
      position: t('testimonial1Position'),
      content: t('testimonial1Content'),
      rating: 5,
      company: t('testimonial1Company')
    },
    {
      name: t('testimonial2Name'), 
      position: t('testimonial2Position'),
      content: t('testimonial2Content'),
      rating: 5,
      company: t('testimonial2Company')
    },
    {
      name: t('testimonial3Name'),
      position: t('testimonial3Position'),
      content: t('testimonial3Content'),
      rating: 5,
      company: t('testimonial3Company')
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-800 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative inline-block">
            {t('testimonialsTitle')}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></div>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-center">
            {t('testimonialsSubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`glass-effect rounded-xl p-6 transition-all duration-800 ${isIntersecting ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-4">
                <Quote className="w-6 h-6 text-primary/30 absolute -top-2 -left-1" />
                <p className="text-muted-foreground text-sm leading-relaxed pl-4">
                  {testimonial.content}
                </p>
              </div>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                <p className="text-xs text-primary font-medium">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;