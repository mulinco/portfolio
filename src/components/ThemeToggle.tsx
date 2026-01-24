// src/components/ui/ThemeToggle.tsx
import { Skull, Heart, Sparkles } from 'lucide-react'; 

interface ThemeToggleProps {
  isKawaii: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle = ({ isKawaii, toggleTheme }: ThemeToggleProps) => {
  // O tema agora vem lá do App.tsx via props
  const theme = isKawaii ? 'kawaii' : 'goth';

  return (
    <button
      onClick={toggleTheme} // Usa a função que vem do App.tsx
      className={`
        cursor-target relative overflow-hidden flex items-center gap-2 px-4 py-2 
        border-2 transition-all duration-500 ease-in-out group
        ${theme === 'goth' 
          ? 'bg-transparent border-accent text-accent hover:bg-accent hover:text-bg-primary rounded-sm' 
          : 'bg-pink-100 border-pink-400 text-pink-500 hover:bg-pink-200 rounded-3xl shadow-[0_0_15px_rgba(255,105,180,0.5)]'
        }
      `}
    >
      <div className="relative w-6 h-6">
        <span className={`absolute inset-0 transition-all duration-500 ${theme === 'goth' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
          <Skull size={24} />
        </span>
        <span className={`absolute inset-0 transition-all duration-500 ${theme === 'kawaii' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}>
          <Heart size={24} fill="currentColor" />
        </span>
      </div>

      <span className="font-bold tracking-wider">
        {theme === 'goth' ? 'DARK' : 'KAWAII'}
      </span>

      {theme === 'kawaii' && (
        <Sparkles 
          size={16} 
          className="absolute top-1 right-2 animate-bounce text-yellow-400" 
        />
      )}
    </button>
  );
};