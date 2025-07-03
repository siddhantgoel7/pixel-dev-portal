import { Code, Database, Globe, Smartphone, Server, Zap } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      color: "from-minecraft-diamond to-blue-400",
      skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Figma"]
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-minecraft-emerald to-green-400",
      skills: ["Node.js", "Express", "Python", "Flask", "Django", "SQL"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-minecraft-gold to-yellow-400",
      skills: ["PostgreSQL", "MongoDB", "SQLite", "Firebase"]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      color: "from-minecraft-redstone to-pink-400",
      skills: ["Android SDK", "Firebase", "React Native"]
    },
    {
      title: "AI & ML",
      icon: Zap,
      color: "from-minecraft-lapis to-indigo-500",
      skills: ["TensorFlow", "NLP", "ML", "Python"]
    },
    {
      title: "Tools & Platforms",
      icon: Code,
      color: "from-minecraft-grass to-lime-500",
      skills: ["Git", "GitHub", "Postman", "Zoho Creator", "ROS"]
    },
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

        <div>
          <h3 className="text-lg sm:text-xl font-pixel mb-6 flex items-center gap-2">
            <Code className="w-5 h-5" />
            Skill Trees
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className={`minecraft-block bg-gradient-to-br ${category.color} p-4 sm:p-6 text-white group hover:scale-105 transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-spin" />
                    <h4 className="font-pixel text-sm sm:text-lg">{category.title}</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-white/20 pixel-border p-2 text-center text-xs sm:text-sm font-mono hover:bg-white/30 transition-colors cursor-pointer"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
