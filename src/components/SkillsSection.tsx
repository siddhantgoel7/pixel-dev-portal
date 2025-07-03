
import { Code, Database, Globe, Smartphone, Server, Zap } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      color: "from-minecraft-diamond to-blue-400",
      skills: ["React", "TypeScript", "Tailwind", "Next.js"]
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-minecraft-emerald to-green-400",
      skills: ["Node.js", "Python", "PostgreSQL", "Docker"]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      color: "from-minecraft-gold to-yellow-400",
      skills: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      title: "DevOps",
      icon: Zap,
      color: "from-minecraft-redstone to-red-400",
      skills: ["AWS", "CI/CD", "Kubernetes", "Terraform"]
    }
  ];

  const quickTools = [
    { name: "JavaScript", emoji: "🟨" },
    { name: "TypeScript", emoji: "🔷" },
    { name: "React", emoji: "⚛️" },
    { name: "Node.js", emoji: "🟢" },
    { name: "Python", emoji: "🐍" },
    { name: "Docker", emoji: "🐳" }
  ];

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-minecraft-grass animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-pixel mb-4 glitch-text" data-text="INVENTORY">INVENTORY</h2>
          <div className="w-16 h-1 bg-minecraft-grass mx-auto animate-pulse"></div>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h3 className="text-lg sm:text-xl font-pixel mb-6 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Skill Trees
            </h3>
            <div className="space-y-4">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className={`minecraft-block bg-gradient-to-br ${category.color} p-4 sm:p-6 text-white group hover:scale-105 transition-all duration-300`}>
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-spin" />
                      <h4 className="font-pixel text-sm sm:text-lg">{category.title}</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="bg-white/20 pixel-border p-2 text-center text-xs sm:text-sm font-mono hover:bg-white/30 transition-colors cursor-pointer">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-pixel mb-6">Quick Tools</h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-8">
              {quickTools.map((tool, index) => (
                <div key={index} className="inventory-slot group cursor-pointer">
                  <div className="text-center relative">
                    <div className="text-xl sm:text-2xl mb-1 group-hover:animate-bounce">{tool.emoji}</div>
                    <div className="text-xs font-pixel opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded whitespace-nowrap z-10">
                      {tool.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="retro-card">
              <h4 className="font-pixel mb-4 flex items-center gap-2 text-sm sm:text-base">
                <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                Currently Learning
              </h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="font-mono">Rust</span>
                    <span className="text-minecraft-grass">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div className="bg-minecraft-grass h-2 rounded-full animate-pulse" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="font-mono">WebAssembly</span>
                    <span className="text-minecraft-diamond">60%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div className="bg-minecraft-diamond h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
