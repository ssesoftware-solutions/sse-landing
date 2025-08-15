import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import ChatModal from "@/components/ChatModal";

interface Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  color: string;
}

const HeroSection = () => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedAgentName, setSelectedAgentName] = useState("Zoe, tu Recepcionista Virtual");
  const [selectedWebhookUrl, setSelectedWebhookUrl] = useState("https://n8n.ssesoftsolutions.com/webhook/ed99df65-180d-473b-b0c3-4a86f4d3b6f2");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (x: number, y: number): Particle => ({
      x,
      y,
      directionX: (Math.random() * 0.4) - 0.2,
      directionY: (Math.random() * 0.4) - 0.2,
      size: (Math.random() * 2) + 1,
      color: 'rgba(76, 116, 170, 0.7)' // Using SSE brand blue
    });

    const initParticles = () => {
      particlesRef.current = [];
      const numberOfParticles = Math.floor((canvas.height * canvas.width) / 9000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 2) + 1;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        
        particlesRef.current.push(createParticle(x, y));
      }
    };

    const drawParticle = (particle: Particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2, false);
      ctx.fillStyle = particle.color;
      ctx.fill();
    };

    const updateParticle = (particle: Particle) => {
      if (particle.x > canvas.width || particle.x < 0) {
        particle.directionX = -particle.directionX;
      }
      if (particle.y > canvas.height || particle.y < 0) {
        particle.directionY = -particle.directionY;
      }
      
      particle.x += particle.directionX;
      particle.y += particle.directionY;
      drawParticle(particle);
    };

    const connectParticles = () => {
      for (let a = 0; a < particlesRef.current.length; a++) {
        for (let b = a; b < particlesRef.current.length; b++) {
          const particleA = particlesRef.current[a];
          const particleB = particlesRef.current[b];
          
          const distance = Math.sqrt(
            Math.pow(particleA.x - particleB.x, 2) + 
            Math.pow(particleA.y - particleB.y, 2)
          );
          
          if (distance < (canvas.width / 7) * (canvas.height / 7) / 100) {
            const opacity = 1 - (distance / 200);
            ctx.strokeStyle = `rgba(76, 116, 170, ${opacity})`;  // SSE brand blue
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(updateParticle);
      connectParticles();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      setCanvasSize();
      initParticles();
    };

    setCanvasSize();
    initParticles();
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openDemoChat = () => {
    setChatOpen(true);
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-10"
      />
      
      <div className="relative z-20 px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6 fade-in">
          {t('heroTitle')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 slide-up text-justify" style={{ animationDelay: '300ms' }}>
          {t('heroSubtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center scale-in" style={{ animationDelay: '600ms' }}>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="hover-glow pulse-glow text-lg px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300"
          >
            {t('heroButton')}
          </Button>
          <Button 
            onClick={openDemoChat}
            variant="outline"
            size="lg"
            className="text-lg px-8 py-3 rounded-full border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            {t('heroDemoButton')}
          </Button>
        </div>
      </div>

      {/* Chat Modal */}
      <ChatModal 
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        agentName={selectedAgentName}
        webhookUrl={selectedWebhookUrl}
      />
    </section>
  );
};

export default HeroSection;