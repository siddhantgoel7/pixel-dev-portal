
import { Code, Terminal, Cpu } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-minecraft-grass to-minecraft-emerald text-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="pixel-border bg-white/10 p-4 inline-block backdrop-blur-sm">
              <div className="flex items-center gap-2 text-sm">
                <Terminal className="w-4 h-4" />
                <span>user@portfolio:~$</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-pixel leading-tight">
              <span className="block">JOHN</span>
              <span className="block text-yellow-300">DOE</span>
            </h1>
            
            <div className="text-xl lg:text-2xl font-mono">
              <span className="typewriter">Software Engineer & Block Builder</span>
            </div>
            
            <p className="text-lg opacity-90 max-w-md">
              Crafting digital experiences with pixel-perfect precision. 
              Building the future, one block of code at a time.
            </p>
            
            <div className="flex gap-4 flex-wrap">
              <button className="pixel-button flex items-center gap-2">
                <Code className="w-4 h-4" />
                View Projects
              </button>
              <button className="pixel-border bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 shadow-pixel hover:shadow-pixel-hover transition-all duration-150">
                Download Resume
              </button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 minecraft-block from-minecraft-dirt to-amber-600 flex items-center justify-center animate-float">
                <div className="w-32 h-32 minecraft-block from-minecraft-stone to-slate-400 flex items-center justify-center">
                  <Cpu className="w-16 h-16 text-minecraft-diamond animate-pixel-pulse" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 minecraft-block from-minecraft-gold to-yellow-500 flex items-center justify-center animate-bounce">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
