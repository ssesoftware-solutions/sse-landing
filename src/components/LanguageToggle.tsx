import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
    >
      <Globe className="w-4 h-4" />
      {language === 'es' ? 'EN' : 'ES'}
    </Button>
  );
};

export default LanguageToggle;