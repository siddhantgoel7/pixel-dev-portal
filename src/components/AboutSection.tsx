
import { User, MapPin, Calendar, Coffee } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Calendar, label: "Years Experience", value: "5+" },
    { icon: Coffee, label: "Cups of Coffee", value: "∞" },
    { icon: MapPin, label: "Location", value: "Digital World" },
    { icon: User, label: "Status", value: "Coding" }
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-pixel mb-4 glitch-text" data-text="ABOUT.EXE">ABOUT.EXE</h2>
          <div className="w-16 h-1 bg-minecraft-grass mx-auto animate-pulse"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-minecraft-redstone"></div>
                <div className="terminal-dot bg-minecraft-gold"></div>
                <div className="terminal-dot bg-minecraft-emerald"></div>
              </div>
              <div className="font-mono text-xs sm:text-sm space-y-2">
                <div><span className="text-minecraft-emerald">class</span> <span className="text-minecraft-diamond">SoftwareEngineer</span> {`{`}</div>
                <div className="ml-4"><span className="text-minecraft-gold">constructor</span>() {`{`}</div>
                <div className="ml-8">this.name = <span className="text-minecraft-redstone">"John Doe"</span>;</div>
                <div className="ml-8">this.passion = <span className="text-minecraft-redstone">"Creating Amazing Software"</span>;</div>
                <div className="ml-8">this.coffee = <span className="text-minecraft-diamond">true</span>;</div>
                <div className="ml-4">{`}`}</div>
                <div>{`}`}</div>
              </div>
            </div>
            
            <p className="text-base sm:text-lg leading-relaxed">
              Welcome to my digital realm! I'm a passionate software engineer who believes 
              in building applications that are both functional and beautiful. Like crafting 
              in Minecraft, I enjoy taking complex problems and breaking them down into 
              manageable, elegant solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="retro-card group hover:scale-105 transition-all duration-300">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 text-minecraft-grass group-hover:animate-bounce" />
                  <div className="font-pixel text-sm sm:text-base mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
