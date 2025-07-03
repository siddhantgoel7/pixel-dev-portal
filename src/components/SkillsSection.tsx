
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

  const tools = [
    { name: "JS", icon: "🟨" },
    { name: "TS", icon: "🔷" },
    { name: "React", icon: "⚛️" },
    { name: "Node", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "📱" },
    { name: "AWS", icon: "☁️" }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-pixel mb-4">INVENTORY</h2>
          <div className="w-16 h-1 bg-minecraft-grass mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-pixel mb-6">Skill Trees</h3>
            <div className="space-y-4">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className={`minecraft-block bg-gradient-to-br ${category.color} p-6 text-white`}>
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-6 h-6" />
                      <h4 className="font-pixel text-lg">{category.title}</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="bg-white/20 pixel-border p-2 text-center text-sm font-mono">
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
            <h3 className="text-xl font-pixel mb-6">Quick Access Bar</h3>
            <div className="grid grid-cols-4 gap-2 mb-8">
              {tools.map((tool, index) => (
                <div key={index} className="inventory-slot group cursor-pointer">
                  <div className="text-center">
                    <div className="text-2xl mb-1">{tool.icon}</div>
                    <div className="text-xs font-pixel opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded whitespace-nowrap">
                      {tool.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="minecraft-block from-card to-background p-6">
              <h4 className="font-pixel mb-4 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Currently Learning
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-minecraft-grass h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <span className="text-sm font-mono">Rust</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-minecraft-diamond h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <span className="text-sm font-mono">WebAssembly</span>
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
