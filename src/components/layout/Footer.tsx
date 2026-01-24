import { useState } from 'react';
import { Github, Linkedin, Mail, ArrowUp, Coffee, Heart, MapPin, Check } from 'lucide-react';

interface FooterProps {
  isKawaii: boolean;
}

export const Footer = ({ isKawaii }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const MY_EMAIL = "mulincorod@gmail.com"; 
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(MY_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`
      relative mt-20 pt-16 pb-8 px-6 overflow-hidden
      border-t transition-all duration-500 backdrop-blur-md
      ${isKawaii 
        ? 'bg-white/10 border-pink-200/30 text-[#4A202A]' 
        : 'bg-black/10 border-accent/10 text-text-secondary'}
    `}>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* --- GRID PRINCIPAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* COLUNA 1: Identidade */}
          <div className="space-y-6">
            <div>
              <h2 className={`text-3xl font-bold font-display mb-2 ${isKawaii ? 'text-[#D86487] font-cute' : 'text-text-primary'}`}>
                mulinco<span className={isKawaii ? 'text-pink-400' : 'text-accent'}>.dev</span>
              </h2>
              <p className={`font-sans text-sm leading-relaxed max-w-xs ${isKawaii ? 'text-[#76172C]' : 'text-text-secondary'}`}>
                De células a códigos. Construindo soluções digitais com a precisão de uma cientista e a criatividade de uma artista.
              </p>
            </div>

            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${
              isKawaii ? 'bg-white/40 border-pink-200' : 'bg-black/40 border-accent/20'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isKawaii ? 'bg-pink-400' : 'bg-accent'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isKawaii ? 'bg-pink-500' : 'bg-accent'}`}></span>
              </span>
              <span className={`text-xs font-bold tracking-wide uppercase ${isKawaii ? 'text-pink-600' : 'text-text-primary'}`}>
                Disponível para Projetos
              </span>
            </div>
          </div>

          {/* COLUNA 2: Navegação */}
          <div className="md:pl-10">
            <h3 className={`text-lg font-bold font-display mb-6 ${isKawaii ? 'text-[#D86487]' : 'text-text-primary'}`}>
              Explorar
            </h3>
            <ul className={`space-y-3 font-code text-sm ${isKawaii ? 'text-[#76172C]' : 'text-text-secondary'}`}>
              <li><a href="#projetos" className="cursor-target hover:text-accent hover:pl-2 transition-all block">Projetos</a></li>
              <li><a href="#skills" className="cursor-target hover:text-accent hover:pl-2 transition-all block">Skills & About</a></li>
              <li><a href="/cv.pdf" target="_blank" className="cursor-target hover:text-accent hover:pl-2 transition-all block">Currículo PDF</a></li>
            </ul>
          </div>

          {/* COLUNA 3: Contato */}
          <div>
            <h3 className={`text-lg font-bold font-display mb-6 ${isKawaii ? 'text-[#D86487]' : 'text-text-primary'}`}>
              Conectar
            </h3>
            
            <div className="space-y-4 mb-6">
              <button 
                onClick={handleCopyEmail}
                className="group flex items-center gap-3 w-full text-left transition-all"
              >
                <div className={`
                  cursor-target p-2 rounded border transition-all duration-300
                  ${copied 
                    ? 'bg-green-500/20 border-green-500 text-green-500' 
                    : isKawaii 
                      ? 'bg-white/40 border-pink-200 text-pink-500 group-hover:border-pink-400' 
                      : 'bg-black/40 border-accent/20 text-text-secondary group-hover:border-accent group-hover:text-accent'}
                `}>
                   {copied ? <Check size={18} /> : <Mail size={18} />}
                </div>
                
                <div className="cursor-target flex flex-col">
                  <span className={`text-sm font-sans transition-colors ${
                    copied ? 'text-green-500 font-bold' : isKawaii ? 'text-[#76172C] group-hover:text-pink-600' : 'text-text-secondary group-hover:text-text-primary'
                  }`}>
                    {copied ? "E-mail Copiado!" : MY_EMAIL}
                  </span>
                </div>
              </button>
              
              <div className="cursor-target flex items-center gap-3">
                 <div className={`p-2 rounded border ${isKawaii ? 'bg-white/40 border-pink-200 text-pink-500' : 'bg-black/40 border-accent/20 text-text-secondary'}`}>
                   <MapPin size={18} />
                </div>
                <span className={`text-sm font-sans ${isKawaii ? 'text-[#76172C]' : 'text-text-secondary'}`}>Rio de Janeiro, Brasil</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://github.com/mulinco" 
                target="_blank" 
                rel="noreferrer"
                className={`p-3 rounded-lg border transition-all duration-300 ${
                  isKawaii 
                    ? 'bg-white/40 border-pink-200 text-pink-500 hover:bg-pink-500 hover:text-white' 
                    : 'bg-black/40 border-accent/20 text-text-primary hover:bg-accent hover:text-white'
                }`}
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mariaclararodrigues3113/" 
                target="_blank" 
                rel="noreferrer"
                className={`p-3 rounded-lg border transition-all duration-300 ${
                  isKawaii 
                    ? 'bg-white/40 border-pink-200 text-pink-500 hover:bg-pink-500 hover:text-white' 
                    : 'bg-black/40 border-accent/20 text-text-primary hover:bg-accent hover:text-white'
                }`}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* --- DIVISÓRIA --- */}
        <div className={`h-px w-full mb-8 bg-gradient-to-r from-transparent via-accent/30 to-transparent ${isKawaii ? 'via-pink-400/30' : ''}`}></div>

        {/* --- RODAPÉ INFERIOR --- */}
        <div className="cursor-target flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm font-code opacity-80">
          <div className="flex items-center gap-1">
            <span>© {currentYear} Maria Rodrigues.</span>
            <span className="text-accent inline-block mx-1">
               <Coffee size={14} className={isKawaii ? 'hidden' : 'inline'} />
               <Heart size={14} className={isKawaii ? 'inline animate-pulse' : 'hidden'} fill="currentColor" />
            </span>
            <span className="hidden md:inline">& React.</span>
          </div>

          <button 
            onClick={scrollToTop}
            className={`
              cursor-target group flex items-center gap-2 px-4 py-2 
              border rounded-full transition-all duration-300
              ${isKawaii 
                ? 'border-pink-200 text-pink-600 hover:bg-pink-500 hover:text-white' 
                : 'border-accent/20 text-text-secondary hover:bg-accent hover:text-white'}
            `}
          >
            <span>Voltar ao topo</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};