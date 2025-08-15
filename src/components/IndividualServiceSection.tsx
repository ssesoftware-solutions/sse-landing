import { LucideIcon } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface IndividualServiceSectionProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  reversed?: boolean;
  serviceType: 'software' | 'odoo' | 'ai' | 'analytics' | 'cloud';
}

const IndividualServiceSection = ({ 
  icon: IconComponent, 
  title, 
  subtitle, 
  description, 
  reversed = false, 
  serviceType 
}: IndividualServiceSectionProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const renderServiceVisual = () => {
    switch (serviceType) {
      case 'software':
        return (
          <div className="space-y-4">
            {/* Code Editor Simulation */}
            <div className="bg-card/80 rounded-lg p-4 border border-border/50">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <div className="flex">
                  <span className="text-muted-foreground text-xs mr-2">1</span>
                  <span className="text-blue-400 text-xs">function</span>
                  <span className="text-yellow-400 text-xs ml-1">createApp</span>
                  <span className="text-foreground text-xs">{"() {"}</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground text-xs mr-2">2</span>
                  <span className="text-foreground text-xs ml-4">return</span>
                  <span className="text-green-400 text-xs ml-1">'Hello World'</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground text-xs mr-2">3</span>
                  <span className="text-foreground text-xs">{"}"}</span>
                </div>
              </div>
            </div>
            {/* Terminal */}
            <div className="bg-black/20 rounded-lg p-3 border border-border/30">
              <div className="text-green-400 text-xs">$ npm run build</div>
              <div className="text-muted-foreground text-xs">✓ Build completed successfully</div>
            </div>
          </div>
        );
      
      case 'odoo':
        return (
          <div className="space-y-4">
            {/* ERP Dashboard */}
            <div className="bg-card/80 rounded-lg p-4 border border-border/50">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-foreground">ERP Dashboard</h4>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-primary/10 rounded p-2">
                  <div className="text-xs text-primary/70">Ventas</div>
                  <div className="text-sm font-bold text-primary">€125,430</div>
                </div>
                <div className="bg-secondary/10 rounded p-2">
                  <div className="text-xs text-secondary/70">Inventario</div>
                  <div className="text-sm font-bold text-secondary">1,247</div>
                </div>
              </div>
            </div>
            {/* Modules */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded p-2 text-center">
                <div className="text-xs text-blue-300">CRM</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded p-2 text-center">
                <div className="text-xs text-green-300">Ventas</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded p-2 text-center">
                <div className="text-xs text-purple-300">Compras</div>
              </div>
            </div>
          </div>
        );
      
      case 'ai':
        return (
          <div className="space-y-4">
            {/* AI Chat Interface */}
            <div className="bg-card/80 rounded-lg p-4 border border-border/50">
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="bg-primary/20 text-primary rounded-lg px-3 py-2 text-sm max-w-[70%]">
                    ¿Cómo puedo optimizar mi proceso?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-secondary/20 text-foreground rounded-lg px-3 py-2 text-sm max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <IconComponent className="w-4 h-4 text-secondary" />
                      <span>Analizando datos...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* AI Processing */}
            <div className="grid grid-cols-2 gap-3">
              <div className="h-10 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center border border-border/30">
                <div className="text-xs text-primary/70">ML Model</div>
              </div>
              <div className="h-10 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg flex items-center justify-center border border-border/30">
                <div className="text-xs text-secondary/70">AI Agent</div>
              </div>
            </div>
          </div>
        );
      
      case 'analytics':
        return (
          <div className="space-y-4">
            {/* Analytics Dashboard */}
            <div className="bg-card/80 rounded-lg p-4 border border-border/50">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-foreground">Analytics Dashboard</h4>
                <div className="text-xs text-green-400">Live</div>
              </div>
              {/* Chart simulation */}
              <div className="space-y-3">
                <div className="flex items-end space-x-1 h-16">
                  <div className="bg-blue-400 w-4 h-8 rounded-t"></div>
                  <div className="bg-blue-400 w-4 h-12 rounded-t"></div>
                  <div className="bg-blue-400 w-4 h-6 rounded-t"></div>
                  <div className="bg-blue-400 w-4 h-14 rounded-t"></div>
                  <div className="bg-blue-400 w-4 h-10 rounded-t"></div>
                </div>
                <div className="h-8 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded h-1 top-3"></div>
                </div>
              </div>
            </div>
            {/* KPIs */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded p-3 text-center">
                <div className="text-xs text-green-300">ROI</div>
                <div className="text-sm font-bold text-green-400">+145%</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded p-3 text-center">
                <div className="text-xs text-blue-300">Conversión</div>
                <div className="text-sm font-bold text-blue-400">23.5%</div>
              </div>
            </div>
          </div>
        );
      
      case 'cloud':
        return (
          <div className="space-y-4">
            {/* Cloud Infrastructure */}
            <div className="bg-card/80 rounded-lg p-4 border border-border/50">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-foreground">Cloud Infrastructure</h4>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              {/* Cloud diagram */}
              <div className="flex items-center justify-center space-x-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-6 bg-gradient-to-br from-blue-400/20 to-blue-500/20 rounded border border-blue-400/30 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="text-xs text-blue-300">Server 1</div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-purple-400/50"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full border border-purple-400/30 flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-blue-400/50"></div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-6 bg-gradient-to-br from-blue-400/20 to-blue-500/20 rounded border border-blue-400/30 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="text-xs text-blue-300">Server 2</div>
                </div>
              </div>
            </div>
            {/* Status indicators */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-green-500/20 rounded p-2 text-center border border-green-500/30">
                <div className="text-xs text-green-400">99.9% Uptime</div>
              </div>
              <div className="bg-blue-500/20 rounded p-2 text-center border border-blue-500/30">
                <div className="text-xs text-blue-400">Auto-scale</div>
              </div>
              <div className="bg-purple-500/20 rounded p-2 text-center border border-purple-500/30">
                <div className="text-xs text-purple-400">Secure</div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="space-y-4">
            <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <IconComponent className="w-16 h-16 text-primary/50" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-16 bg-gradient-to-br from-muted/20 to-muted/10 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-muted/30 rounded-full"></div>
              </div>
              <div className="h-16 bg-gradient-to-br from-muted/20 to-muted/10 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-muted/30 rounded-full"></div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className={`py-20 ${reversed ? 'bg-background' : 'bg-background-secondary'}`} ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:grid-flow-col-dense' : ''}`}>
          <div className={`${reversed ? 'lg:col-start-2' : ''} transition-all duration-800 ${isIntersecting ? 'opacity-100 translate-x-0' : `opacity-0 ${reversed ? 'translate-x-8' : '-translate-x-8'}`}`}>
            <div className={`flex items-center justify-center h-20 w-20 rounded-full bg-primary/20 mb-6 transition-all duration-800 delay-200 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              <IconComponent className="w-10 h-10 text-primary" />
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-800 delay-400 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {title}
            </h2>
            <p className={`text-xl text-primary font-semibold mb-6 transition-all duration-800 delay-600 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {subtitle}
            </p>
            <p className={`text-muted-foreground leading-relaxed text-lg transition-all duration-800 delay-800 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {description}
            </p>
          </div>
          
          <div className={`${reversed ? 'lg:col-start-1' : ''} transition-all duration-800 delay-300 ${isIntersecting ? 'opacity-100 translate-x-0 scale-100' : `opacity-0 ${reversed ? '-translate-x-8' : 'translate-x-8'} scale-95`}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 lg:p-12 hover:scale-105 transition-transform duration-500">
                {renderServiceVisual()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualServiceSection;