
import { ExternalLink, Github, Star } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "BlockChain Explorer",
      description: "A pixel-perfect blockchain explorer built with React and Web3. Features real-time transaction tracking and beautiful visualizations.",
      tech: ["React", "TypeScript", "Web3.js", "Tailwind"],
      github: "#",
      live: "#",
      stars: 142,
      image: "🔗"
    },
    {
      title: "Pixel Art Generator",
      description: "AI-powered tool that converts images into Minecraft-style pixel art. Built with Python backend and React frontend.",
      tech: ["Python", "React", "TensorFlow", "FastAPI"],
      github: "#",
      live: "#",
      stars: 89,
      image: "🎨"
    },
    {
      title: "Code Craft IDE",
      description: "A lightweight, web-based IDE with Minecraft-inspired theming. Supports multiple languages and collaborative editing.",
      tech: ["Vue.js", "Node.js", "Socket.io", "Monaco"],
      github: "#",
      live: "#",
      stars: 234,
      image: "💻"
    },
    {
      title: "Inventory Manager",
      description: "Full-stack inventory management system with real-time updates. Features drag-and-drop interface inspired by game inventories.",
      tech: ["Next.js", "PostgreSQL", "Prisma", "tRPC"],
      github: "#",
      live: "#",
      stars: 67,
      image: "📦"
    }
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-minecraft-grass font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {Math.random() > 0.5 ? '01' : '10'}
          </div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-pixel mb-4 glitch-text" data-text="PROJECTS.LOG">PROJECTS.LOG</h2>
          <div className="w-16 h-1 bg-minecraft-grass mx-auto animate-pulse"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="retro-card group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl sm:text-4xl group-hover:animate-bounce">{project.image}</div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground pixel-border bg-muted/50 px-2 py-1">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-minecraft-gold" />
                  {project.stars}
                </div>
              </div>
              
              <h3 className="font-pixel text-sm sm:text-lg mb-3 group-hover:text-minecraft-grass transition-colors">{project.title}</h3>
              <p className="text-xs sm:text-sm mb-4 leading-relaxed text-muted-foreground">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="pixel-border bg-muted/70 px-2 py-1 text-xs font-mono hover:bg-accent transition-colors cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a href={project.github} className="flex items-center gap-2 text-xs sm:text-sm hover:text-minecraft-grass transition-colors group-hover:animate-pulse">
                  <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  Code
                </a>
                <a href={project.live} className="flex items-center gap-2 text-xs sm:text-sm hover:text-minecraft-diamond transition-colors group-hover:animate-pulse">
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <button className="retro-button-blue">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
