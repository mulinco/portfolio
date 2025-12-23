import { useEffect, useState } from 'react';
import { Skull, Heart, Sparkles } from 'lucide-react'; 

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      }
      const hour = new Date().getHours();
      const isDay = hour >= 6 && hour < 18;
      return isDay ? 'kawaii' : 'goth';
    }
    return 'goth';
  });

  useEffect(() => {
    const body = document.body;
    if (theme === 'kawaii') {
      body.classList.add('kawaii');
      localStorage.setItem('theme', 'kawaii');
    } else {
      body.classList.remove('kawaii');
      localStorage.setItem('theme', 'goth');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'goth' ? 'kawaii' : 'goth');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative overflow-hidden flex items-center gap-2 px-4 py-2 
        border-2 transition-all duration-500 ease-in-out group
        ${theme === 'goth' 
          /* AQUI ESTA A CORREÇÃO: Usamos 'accent' em vez de #00ff41 */
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