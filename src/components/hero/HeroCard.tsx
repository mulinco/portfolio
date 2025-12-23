import { ReactNode } from 'react';
import { Skull, Heart, MessageCircle } from 'lucide-react';

interface HeroCardProps {
  fact: string | null;
  currentIcon: ReactNode;
  onTriggerSecret: () => void;
}

export const HeroCard = ({ fact, currentIcon, onTriggerSecret }: HeroCardProps) => {
  return (
    <div className="relative flex justify-center md:justify-end h-full items-center">
      
      {/* --- O CONTAINER LÁPIDE --- */}
      <div className={`
          relative z-10 transition-all duration-700 group
          w-72 h-[30rem] md:w-[26rem] md:h-[36rem]
          rounded-t-full rounded-b-3xl overflow-hidden

          /* Goth Styles */
          border-4 border-double border-gray-800 shadow-[0_0_30px_rgba(210,4,45,0.4)] 
          /* Kawaii Styles */
          kawaii:border-[6px] kawaii:border-white/90 kawaii:shadow-[0_0_40px_rgba(255,105,180,0.7)]
        `}>

        {/* CAMADA 1: FUNDOS */}
        <div className="absolute inset-0 bg-[#0a0202] kawaii:hidden"></div>
        <img src="/bg-card.jpg" alt="Holographic" className="absolute inset-0 w-full h-full object-cover hidden kawaii:block z-0 brightness-75 contrast-125" />

        {/* CAMADA 2: DECORAÇÃO GOTH (Só Dark) */}
        <div className="absolute inset-0 pointer-events-none kawaii:hidden z-10">
          <img src="/ink.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay filter invert" />
        </div>

        {/* CAMADA 3: FOTOS */}
        {/* Foto Dark */}
        <img src="/foto-dark.png" alt="Goth Persona" className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 z-20 mix-blend-luminosity contrast-125 brightness-90 kawaii:hidden" />
        
        {/* Foto Kawaii (Com Borda SVG) */}
        <img 
          src="/foto-light.png" 
          alt="Kawaii Persona" 
          className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 z-20 hidden kawaii:block scale-90 hover:scale-95 origin-bottom" 
          style={{ filter: 'url(#thick-border) drop-shadow(0 10px 15px rgba(0,0,0,0.3))' }}
        />

        {/* CAMADA 4: OVERLAY SECRETO */}
        <div className={`
           absolute inset-0 z-40 flex flex-col items-center justify-center p-6 text-center transition-all duration-500
           bg-black/90 backdrop-blur-md border-2 border-accent/50
           kawaii:bg-black/50 kawaii:backdrop-blur-md kawaii:border-white/50
           ${fact ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}>
           <div className="mb-4 text-accent kawaii:text-pink-400 animate-bounce">{currentIcon}</div>
           <span className="block text-accent kawaii:text-white font-bold mb-4 uppercase tracking-[0.2em] text-sm drop-shadow-sm">Secret Unlocked</span>
           <p className="font-code text-lg text-white leading-relaxed font-medium tracking-wide drop-shadow-md">"{fact}"</p>
           <p className="text-xs text-text-muted mt-6 kawaii:text-white/70 font-code uppercase tracking-widest opacity-70">(Clique no ícone para fechar)</p>
        </div>

        {/* BOTÃO MÁGICO */}
        <button onClick={onTriggerSecret} className={`
            absolute bottom-4 right-4 z-[50] cursor-pointer bg-gray-900 border-2 border-accent p-3 rounded-full shadow-[0_0_25px_var(--accent)] 
            transition-all duration-500 transform group/badge 
            kawaii:bg-white/80 kawaii:border-white kawaii:border-4 kawaii:shadow-lg kawaii:text-pink-500
            ${fact ? 'rotate-12 scale-110 border-accent kawaii:border-pink-400' : 'hover:scale-110 hover:rotate-12 active:scale-95'}
        `}>
          <div className="text-accent kawaii:hidden group-hover/badge:animate-pulse">{fact ? <MessageCircle size={24} /> : <Skull size={24} strokeWidth={2} />}</div>
          <div className="hidden kawaii:block group-hover/badge:animate-bounce">{fact ? <MessageCircle size={24} fill="#FF69B4" stroke="none" /> : <Heart size={24} fill="#FF69B4" stroke="none" />}</div>
        </button>

      </div>

      {/* DEFINIÇÃO DO FILTRO SVG (Escondido, mas global para este componente) */}
      <svg width="0" height="0" className="absolute hidden">
        <filter id="thick-border" x="-50%" y="-50%" width="200%" height="200%">
          <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="8" />
          <feFlood flood-color="white" result="WHITE_COLOR" />
          <feComposite in="WHITE_COLOR" in2="DILATED" operator="in" result="WHITE_SHAPE" />
          <feMerge><feMergeNode in="WHITE_SHAPE" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </svg>

    </div>
  );
};