import { Github, Linkedin } from 'lucide-react';

interface HeroTextProps {
  typedText: string;
}

export const HeroText = ({ typedText }: HeroTextProps) => {
  return (
    <div className="space-y-8 relative">
      {/* Typed Text Area */}
      <div className="h-32 flex items-center"> 
        <p className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-accent font-code leading-relaxed opacity-90 whitespace-pre-line">
          {typedText}
          <span className="inline-block w-0.5 h-5 ml-1 bg-accent animate-pulse align-middle md:h-6"></span>
        </p>
      </div>

      {/* Main Title */}
      <div>
        <h1 className="text-7xl md:text-9xl kawaii:md:text-7xl leading-none transition-all duration-500 font-metal kawaii:font-cute kawaii:tracking-tighter">
          <span className="text-text-primary drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] kawaii:drop-shadow-sm kawaii:text-accent">
            Maria <br /> Rodrigues
          </span>
        </h1>
      </div>

      {/* Description */}
      <div className="border-l-4 border-accent/70 pl-6 py-2 text-text-muted text-base md:text-lg font-code transition-colors duration-500 italic relative">
        <p>Transformando Coca-Cola e caos em arquitetura de dados elegante.</p>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-8 pt-6 font-code">
        <button className="relative group bg-accent text-bg-primary px-8 py-4 font-bold overflow-hidden transition-all duration-300 kawaii:rounded-full kawaii:shadow-[0_4px_14px_0_rgba(255,105,180,0.39)] hover:kawaii:shadow-[0_6px_20px_rgba(255,105,180,0.23)]">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-6 kawaii:hidden"></div>
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent hidden kawaii:block z-20"></div>
          <span className="relative z-10 tracking-wider">VER PROJETOS</span>
        </button>
        <div className="flex gap-6 text-text-primary items-center">
          <a href="#" className="hover:text-accent transition-all hover:scale-110 hover:-rotate-6"><Github size={28} /></a>
          <a href="#" className="hover:text-accent transition-all hover:scale-110 hover:rotate-6"><Linkedin size={28} /></a>
        </div>
      </div>
    </div>
  );
};