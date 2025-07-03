
import { User, MapPin, Calendar, Coffee } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Calendar, label: "Years Experience", value: "5+" },
    { icon: Coffee, label: "Cups of Coffee", value: "∞" },
    { icon: MapPin, label: "Location", value: "Digital World" },
    { icon: User, label: "Status", value: "Coding" }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-pixel mb-4">ABOUT.EXE</h2>
          <div className="w-16 h-1 bg-minecraft-grass mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="pixel-border bg-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-minecraft-redstone rounded-full"></div>
                <div className="w-3 h-3 bg-minecraft-gold rounded-full"></div>
                <div className="w-3 h-3 bg-minecraft-emerald rounded-full"></div>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div><span className="text-minecraft-emerald">class</span> <span className="text-minecraft-diamond">SoftwareEngineer</span> {`{`}</div>
                <div className="ml-4"><span className="text-minecraft-gold">constructor</span>() {`{`}</div>
                <div className="ml-8">this.name = <span className="text-minecraft-redstone">"John Doe"</span>;</div>
                <div className="ml-8">this.passion = <span className="text-minecraft-redstone">"Creating Amazing Software"</span>;</div>
                <div className="ml-8">this.coffee = <span className="text-minecraft-diamond">true</span>;</div>
                <div className="ml-4">{`}`}</div>
                <div>{`}`}</div>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed">
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
                <div key={index} className="minecraft-block from-card to-muted p-6 text-center">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-minecraft-grass" />
                  <div className="font-pixel text-sm mb-1">{stat.value}</div>
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
