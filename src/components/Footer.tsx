const Footer = () => {
  return (
    <footer className="bg-background-secondary py-8 border-t border-border fade-in">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-4">
          <img 
            src="/lovable-uploads/1398b1a3-a3ae-4a8d-bc93-541180a1517d.png" 
            alt="SSE Software Solutions" 
            className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-105"
          />
          <div className="text-center text-muted-foreground slide-up">
            <p className="transition-colors duration-300 hover:text-foreground">&copy; 2024 SSE Software Solutions. Todos los derechos reservados.</p>
            <p className="text-sm mt-2 transition-colors duration-300 hover:text-foreground">Diseñado con pasión por la innovación tecnológica.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;