
import { Code, Terminal, Cpu } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-minecraft-grass to-minecraft-emerald text-white relative overflow-hidden scanlines">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-4 h-4 bg-minecraft-gold animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-20 right-20 w-4 h-4 bg-minecraft-diamond animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-minecraft-redstone animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 right-10 w-4 h-4 bg-white animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="terminal-window max-w-sm">
              <div className="terminal-header">
                <div className="terminal-dot bg-minecraft-redstone"></div>
                <div className="terminal-dot bg-minecraft-gold"></div>
                <div className="terminal-dot bg-minecraft-emerald"></div>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="animate-pulse">user@portfolio:~$</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-pixel leading-tight">
              <span className="block glitch-text" data-text="JOHN">JOHN</span>
              <span className="block text-yellow-300 glitch-text" data-text="DOE">DOE</span>
            </h1>
            
            <div className="text-lg sm:text-xl lg:text-2xl font-mono">
              <span className="typewriter">Software Engineer & Block Builder</span>
            </div>
            
            <p className="text-base sm:text-lg opacity-90 max-w-md leading-relaxed">
              Crafting digital experiences with pixel-perfect precision. 
              Building the future, one block of code at a time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="retro-button-green flex items-center justify-center gap-2">
                <Code className="w-4 h-4" />
                View Projects
              </button>
              <button className="pixel-border bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 shadow-pixel hover:shadow-pixel-hover transition-all duration-200 font-pixel text-xs">
                Download Resume
              </button>
            </div>
          </div>
          
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 minecraft-block from-minecraft-dirt to-amber-600 flex items-center justify-center animate-float">
                <div className="w-24 h-24 sm:w-32 sm:h-32 minecraft-block from-minecraft-stone to-slate-400 flex items-center justify-center">
                  <Cpu className="w-12 h-12 sm:w-16 sm:h-16 text-minecraft-diamond animate-pixel-pulse" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 minecraft-block from-minecraft-gold to-yellow-500 flex items-center justify-center animate-bounce">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              
              {/* Floating particles */}
              <div className="absolute -top-8 -left-8 w-2 h-2 bg-minecraft-diamond animate-ping" style={{animationDelay: '0s'}}></div>
              <div className="absolute -bottom-8 -right-8 w-2 h-2 bg-minecraft-emerald animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -left-12 w-2 h-2 bg-minecraft-gold animate-ping" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
