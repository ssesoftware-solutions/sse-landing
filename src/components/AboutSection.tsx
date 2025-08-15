const AboutSection = () => {
  const stats = [
    { value: "15+", label: "Años de Experiencia" },
    { value: "100%", label: "Foco en Calidad" },
    { value: "80+", label: "Proyectos Exitosos" },
    { value: "98%", label: "Satisfacción Cliente" }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 fade-in">
          <div className="lg:w-1/2">
            <div className="glass-effect rounded-xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Más de 15 Años Creando el Futuro Digital
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                En SSE Software Solutions, nacimos de la pasión por la tecnología y la convicción 
                de que un gran diseño de experiencia de usuario es el alma de cualquier producto 
                digital exitoso.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nuestro equipo combina décadas de experiencia en desarrollo full-stack, 
                implementaciones Odoo y soluciones de IA para entregar no solo código, 
                sino soluciones que las personas aman usar y que impulsan el crecimiento empresarial.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass-effect p-6 rounded-lg text-center slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-4xl font-bold text-primary block mb-2">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;