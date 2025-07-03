
import { Mail, Github, Linkedin, Twitter, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", url: "#", color: "hover:text-gray-600" },
    { icon: Linkedin, label: "LinkedIn", url: "#", color: "hover:text-blue-600" },
    { icon: Twitter, label: "Twitter", url: "#", color: "hover:text-blue-400" },
    { icon: Mail, label: "Email", url: "mailto:john@example.com", color: "hover:text-red-500" }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-minecraft-grass to-minecraft-emerald text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-pixel mb-4">CONTACT.CMD</h2>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="pixel-border bg-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5" />
                <span className="font-pixel">Let's Connect!</span>
              </div>
              <p className="text-lg mb-4">
                Ready to build something amazing together? Whether you have a project in mind 
                or just want to chat about technology, I'm always excited to connect with 
                fellow builders and creators.
              </p>
              <div className="font-mono text-sm bg-black/20 p-4 rounded">
                <div className="text-green-300">$ whoami</div>
                <div>john.doe@developer.local</div>
                <div className="text-green-300">$ status</div>
                <div>Available for new opportunities</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="minecraft-block from-white/20 to-white/10 p-4 text-center hover:from-white/30 hover:to-white/20 transition-all duration-200 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-pixel">{social.label}</div>
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="minecraft-block from-white/10 to-white/5 p-6">
              <h3 className="font-pixel mb-4">Quick Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pixel-border bg-white/10 p-3 text-white placeholder-white/70 focus:bg-white/20 transition-colors"
                />
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full pixel-border bg-white/10 p-3 text-white placeholder-white/70 focus:bg-white/20 transition-colors"
                />
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  className="w-full pixel-border bg-white/10 p-3 text-white placeholder-white/70 focus:bg-white/20 transition-colors resize-none"
                ></textarea>
                <button type="submit" className="w-full pixel-border bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-4 shadow-pixel hover:shadow-pixel-hover transition-all duration-150">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="font-mono text-sm opacity-80">
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
          <p className="font-mono text-xs mt-2 opacity-60">
            © 2024 John Doe. All blocks crafted with care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
