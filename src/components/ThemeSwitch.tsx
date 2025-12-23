import { Moon, Sun, Power } from 'lucide-react';

interface ThemeSwitchProps {
  isKawaii: boolean;
  toggleTheme: () => void;
}

export const ThemeSwitch = ({ isKawaii, toggleTheme }: ThemeSwitchProps) => {
  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-24 h-10 rounded-full transition-all duration-500 ease-in-out flex items-center cursor-pointer shadow-inner
        /* Estilo do Trilho (Fundo) */
        ${isKawaii 
          ? 'bg-pink-200 border-2 border-pink-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]' 
          : 'bg-gray-950 border-2 border-gray-800 shadow-[inset_0_2px_10px_rgba(0,0,0,1)]'
        }
      `}
      aria-label="Toggle Theme"
    >
      {/* Texto ON (Aparece na esquerda quando Kawaii) */}
      <span className={`absolute left-3 font-bold text-xs transition-opacity duration-300 ${isKawaii ? 'opacity-100 text-pink-500' : 'opacity-0'}`}>
        ON
      </span>

      {/* Texto OFF (Aparece na direita quando Goth) */}
      <span className={`absolute right-3 font-bold text-xs transition-opacity duration-300 ${!isKawaii ? 'opacity-100 text-gray-500' : 'opacity-0'}`}>
        OFF
      </span>

      {/* O Botão Deslizante (Knob) */}
      <div
        className={`
          absolute top-1
          w-7 h-7 rounded-full shadow-md flex items-center justify-center transition-all duration-500 cubic-bezier(0.68, -0.55, 0.27, 1.55)
          
          /* Posição */
          ${isKawaii ? 'left-[calc(100%-2rem)] rotate-0' : 'left-1 -rotate-90'}

          /* Estilo do Knob */
          ${isKawaii 
            ? 'bg-white border-2 border-pink-300 shadow-[0_0_10px_rgba(255,105,180,0.6)]' 
            : 'bg-gray-800 border-2 border-red-900/50 shadow-[0_0_10px_rgba(255,0,0,0.2)]'
          }
        `}
      >
        {/* Ícone dentro do botão */}
        {isKawaii ? (
          <Sun size={14} className="text-pink-400 animate-spin-slow" />
        ) : (
          <Power size={14} className="text-red-900/70" />
        )}
      </div>

      {/* Efeito de Brilho Extra no modo Kawaii */}
      {isKawaii && (
        <span className="absolute inset-0 rounded-full bg-pink-400/20 blur-md pointer-events-none animate-pulse"></span>
      )}
    </button>
  );
};