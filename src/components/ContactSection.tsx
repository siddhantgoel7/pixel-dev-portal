import { Mail, Github, Linkedin, Twitter, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/siddhantgoel7", color: "hover:text-gray-300" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/siddhant-goel-/", color: "hover:text-blue-400" },
    { icon: Mail, label: "Email", url: "mailto:siddhantgoel5@gmail.com", color: "hover:text-red-400" }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-minecraft-grass to-minecraft-emerald text-white relative overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-pixel mb-4 glitch-text" data-text="CONTACT.CMD">CONTACT.CMD</h2>
          <div className="w-16 h-1 bg-white mx-auto animate-pulse"></div>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 order-2 xl:order-1">
            <div className="terminal-window">
              <div className="terminal-header">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                <span className="font-pixel text-xs sm:text-sm">Let's Connect!</span>
              </div>
              <p className="text-sm sm:text-lg mb-4 leading-relaxed">
                Ready to build something amazing together? Whether you have a project in mind 
                or just want to chat about technology, I'm always excited to connect with 
                fellow builders and creators.
              </p>
              <div className="font-mono text-xs sm:text-sm bg-black/30 p-3 sm:p-4 rounded space-y-1">
                <div className="text-green-300">$ whoami</div>
                <div className="animate-pulse">siddhant.goel@developer.local</div>
                <div className="text-green-300">$ status</div>
                <div className="animate-pulse">Available for new opportunities</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="minecraft-block from-white/20 to-white/10 p-3 sm:p-4 text-center hover:from-white/30 hover:to-white/20 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 group-hover:scale-110 group-hover:animate-bounce transition-transform" />
                    <div className="text-xs font-pixel">{social.label}</div>
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="space-y-6 order-1 xl:order-2">
            <div className="minecraft-block from-white/10 to-white/5 p-4 sm:p-6">
              <h3 className="font-pixel mb-4 text-sm sm:text-base">Quick Message</h3>
              <form
                className="space-y-4"
                action="https://formspree.io/f/xyzjvprj"
                method="POST"
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full pixel-border bg-white/10 p-3 text-white placeholder-white/70 focus:bg-white/20 transition-colors text-sm sm:text-base"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full pixel-border bg-white/10 p-3 text-white placeholder-white/70 focus:bg-white/20 transition-colors text-sm sm:text-base"
                />
                <textarea
                  name="message"
                  required
                  placeholder="Your message..."
                  rows={4}
                  className="w-full pixel-border bg-white/10 p-3 text-white placeholder-white/70 focus:bg-white/20 transition-colors resize-none text-sm sm:text-base"
                ></textarea>
                <button
                  type="submit"
                  className="w-full pixel-border bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-4 shadow-pixel hover:shadow-pixel-hover transition-all duration-200 font-pixel text-xs sm:text-sm hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20">
          <p className="font-mono text-xs sm:text-sm opacity-80">
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
          <p className="font-mono text-xs mt-2 opacity-60">
            © 2024 Siddhant Goel. All blocks crafted with care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
