import { FaUserAstronaut, FaHeart, FaEye } from "react-icons/fa";

interface CVCardProps {
  onClick: () => void;
}

export const CVCard = ({ onClick }: CVCardProps) => {
  return (
    <div
      onClick={onClick}
      className="
        group relative cursor-pointer w-full max-w-sm mx-auto
        p-6 border-2 transition-all duration-300 transform hover:-translate-y-2
        
        /* --- ESTRUTURA BASE (VARIÁVEIS) --- */
        /* O fundo muda sozinho de preto transparente (Goth) para branco (Kawaii) */
        bg-bg-secondary 
        
        /* A borda usa a cor de destaque com transparência */
        border-accent/20 hover:border-accent
        
        /* --- FORMAS --- */
        rounded-xl kawaii:rounded-[2rem]
        
        /* --- SOMBRAS --- */
        /* Sombra Goth (Glow) */
        hover:shadow-[0_0_20px_rgba(210,4,45,0.2)]
        
        /* Sombra Kawaii (Suave) */
        kawaii:shadow-sm kawaii:hover:shadow-md
      "
    >
      {/* Ícone e Badge */}
      <div className="mb-4 flex justify-between items-start">
        <div
          className="
          p-3 rounded-lg text-3xl 
          /* Fundo do ícone usa a cor primária do tema */
          bg-bg-primary text-accent
        "
        >
          <FaUserAstronaut className="kawaii:hidden" />
          <FaHeart className="hidden kawaii:block animate-pulse" />
        </div>
        <span className="text-xs font-mono opacity-60 text-text-secondary">
          .PDF
        </span>
      </div>

      {/* Textos usando as variáveis de tipografia e cor */}
      <h3 className="text-2xl font-bold font-heading mb-2 text-text-primary">
        Meu Currículo
      </h3>
      <p className="text-sm font-sans mb-6 text-text-secondary">
        Clique para visualizar minhas experiências, formação e histórico
        profissional.
      </p>

      {/* --- BOTÃO PADRONIZADO (Usando Variáveis) --- */}
      <button
        className="
        cursor-target
        w-full py-3 px-4 font-bold text-sm tracking-wider uppercase 
        flex items-center justify-center gap-2 
        transition-all duration-300
        
        /* CORES: Fundo Accent + Texto que contrasta (geralmente branco ou fundo primário) */
        bg-accent text-white 
        hover:bg-accent-hover
        
        /* FORMA: Quadrado no Goth, Redondo no Kawaii */
        rounded-sm kawaii:rounded-full
        
        /* INTERAÇÃO */
        hover:shadow-lg kawaii:hover:scale-[1.02]
      "
      >
        <FaEye /> Abrir Visualizador
      </button>
    </div>
  );
};
