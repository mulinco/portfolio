import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 mt-16 border-t border-accent/20 bg-bg-secondary transition-colors duration-500">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4">
        
        {/* Links Sociais */}
        <div className="flex gap-6 mb-2">
          <a 
            href="https://github.com/mulinco" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors hover:scale-110 transform duration-200"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/mariaclararodrigues3113/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors hover:scale-110 transform duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:mariarodrigues.ufrj@gmail.com" 
            className="text-text-secondary hover:text-accent transition-colors hover:scale-110 transform duration-200"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Texto de Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-2 text-text-secondary font-code text-sm text-center">
          <span>© {currentYear} Maria Rodrigues.</span>
          <span className="hidden md:inline text-accent">•</span>
          <span className="flex items-center gap-1">
            Developed with <Heart size={14} className="text-accent fill-accent animate-pulse" /> using React & Tailwind.
          </span>
        </div>

      </div>
    </footer>
  );
};