import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: t("inicio"), href: "/", isScroll: false },
    { label: t("agentesIA"), href: "/agentes-ia", isScroll: false },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "glass-effect shadow-lg backdrop-blur-xl" : ""
      } fade-in`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
          <img src="/lovable-uploads/1398b1a3-a3ae-4a8d-bc93-541180a1517d.png" alt="SSE Software Solutions" className="h-12 w-auto" />
          <span className="text-xl font-bold text-foreground transition-colors duration-300">Software Solutions</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Button 
            onClick={() => scrollToSection("contact")}
            className="hover-glow pulse-glow hover:scale-105 transition-transform duration-300"
          >
            {t("contactar")}
          </Button>
          <LanguageToggle />
        </div>
        
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>
      
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-border">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 px-6 text-muted-foreground hover:text-foreground hover:bg-card/50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left py-3 px-6 text-muted-foreground hover:text-foreground hover:bg-card/50 transition-colors"
          >
            {t("contactar")}
          </button>
          <div className="px-6 py-3">
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;