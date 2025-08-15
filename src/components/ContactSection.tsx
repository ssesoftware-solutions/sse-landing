import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { sendContactEmail } from "@/lib/sendContactEmail";
import { Mail, Phone, Clock, ChevronDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactSection = () => {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    countryCode: "+51",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCountryCodeChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      countryCode: value
    }));
  };

  const countryCodes = [
    { code: "+1", flag: "🇺🇸" },
    { code: "+51", flag: "🇵🇪" },
    { code: "+52", flag: "🇲🇽" },
    { code: "+54", flag: "🇦🇷" },
    { code: "+55", flag: "🇧🇷" },
    { code: "+56", flag: "🇨🇱" },
    { code: "+57", flag: "🇨🇴" },
    { code: "+58", flag: "🇻🇪" },
    { code: "+34", flag: "🇪🇸" },
    { code: "+33", flag: "🇫🇷" },
    { code: "+49", flag: "🇩🇪" },
    { code: "+44", flag: "🇬🇧" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendContactEmail(formData);
      
      toast({
        title: t('formSuccess'),
        description: t('formSuccessDesc'),
      });
      
      setFormData({ name: "", email: "", countryCode: "+51", phone: "", subject: "", message: "" });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error("Error al enviar el formulario de contacto:", errorMessage);
      toast({
        title: t('formError'),
        description: errorMessage || t('formErrorDesc'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background-secondary" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-800 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative inline-block">
            {t('projectContactTitle')}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></div>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-center">
            {t('projectContactSubtitle')}
          </p>
        </div>
        
        {/* Contact Form */}
        <div className={`max-w-3xl mx-auto glass-effect rounded-xl p-8 mb-12 transition-all duration-800 delay-300 ${isIntersecting ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="name"
                placeholder={t('formName')}
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
              />
              <Input
                name="email"
                type="email"
                placeholder={t('formEmail')}
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-2">
                <Select value={formData.countryCode} onValueChange={handleCountryCodeChange}>
                  <SelectTrigger className="w-32 bg-card border-border text-foreground focus:ring-primary">
                    <SelectValue>
                      <span className="flex items-center gap-2">
                        <span className="text-lg">{countryCodes.find(c => c.code === formData.countryCode)?.flag}</span>
                        <span>{formData.countryCode}</span>
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {countryCodes.map((country) => (
                      <SelectItem key={country.code} value={country.code} className="text-foreground hover:bg-accent">
                        <span className="flex items-center gap-2">
                          <span className="text-lg">{country.flag}</span>
                          <span>{country.code}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  name="phone"
                  type="tel"
                  placeholder={t('formPhone')}
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="flex-1 bg-card border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
                />
              </div>
              <Input
                name="subject"
                placeholder={t('formSubject')}
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
              />
            </div>
            
            
            <Textarea
              name="message"
              placeholder={t('formMessage')}
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              required
              className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:ring-primary resize-none"
            />
            
            <div className="text-center">
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="hover-glow px-8 py-3 text-lg rounded-full"
              >
                {isSubmitting ? t('formSubmitting') : t('formSubmit')}
              </Button>
            </div>
          </form>
        </div>
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`glass-effect rounded-xl p-6 text-center transition-all duration-800 delay-500 ${isIntersecting ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">{t('email')}</h3>
            <p className="text-muted-foreground">{t('contactEmail')}</p>
          </div>
          <div className={`glass-effect rounded-xl p-6 text-center transition-all duration-800 delay-650 ${isIntersecting ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">{t('telefono')}</h3>
            <p className="text-muted-foreground">{t('contactPhone')}</p>
          </div>
          <div className={`glass-effect rounded-xl p-6 text-center transition-all duration-800 delay-800 ${isIntersecting ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">{t('horario')}</h3>
            <p className="text-muted-foreground">{t('contactHours')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;