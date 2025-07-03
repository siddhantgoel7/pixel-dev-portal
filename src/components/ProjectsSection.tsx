
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
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-pixel mb-4">PROJECTS.LOG</h2>
          <div className="w-16 h-1 bg-minecraft-grass mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="minecraft-block from-card to-background p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{project.image}</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="w-4 h-4" />
                  {project.stars}
                </div>
              </div>
              
              <h3 className="font-pixel text-lg mb-3">{project.title}</h3>
              <p className="text-sm mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="pixel-border bg-muted px-2 py-1 text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a href={project.github} className="flex items-center gap-2 text-sm hover:text-minecraft-grass transition-colors">
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a href={project.live} className="flex items-center gap-2 text-sm hover:text-minecraft-diamond transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="pixel-button">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
