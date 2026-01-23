import { useEffect, useState } from 'react';
import { Terminal, Sparkles } from 'lucide-react'; 
import { motion } from 'framer-motion';

interface WelcomeScreenProps {
  isKawaii: boolean;
  onEnter: () => void;
}

export const WelcomeScreen = ({ isKawaii: propIsKawaii, onEnter }: WelcomeScreenProps) => {
  const [currentIsKawaii, setCurrentIsKawaii] = useState(propIsKawaii);

  useEffect(() => {
    const checkTheme = () => {
      const hasKawaiiClass = document.body.classList.contains('kawaii');
      setCurrentIsKawaii(hasKawaiiClass);
    };

    const observer = new MutationObserver(() => checkTheme());
    observer.observe(document.body, { attributes: true });
    checkTheme();

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div 
      key="welcome-screen-wrapper"
      exit={{ 
        opacity: 0, 
        scale: 1.1,
        filter: "blur(20px)",
        transition: { duration: 0.8, ease: "circIn" }
      }}
      className={`
        fixed inset-0 z-[999] flex flex-col items-center justify-center px-4 transition-colors duration-700
        ${currentIsKawaii 
          ? 'bg-[#FFE4E9] bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#FFD1DC_100%)]' 
          : 'bg-[#050505] bg-[radial-gradient(circle_at_center,_#1a0505_0%,_#050505_100%)]'}
      `}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-5%] left-[-5%] w-[50%] h-[50%] rounded-full blur-[100px] opacity-30 ${currentIsKawaii ? 'bg-pink-300' : 'bg-red-900'}`} />
        <div className={`absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] rounded-full blur-[100px] opacity-30 ${currentIsKawaii ? 'bg-pink-300' : 'bg-red-900'}`} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // MUDANÇA AQUI: text-center apenas no kawaii, text-left no goth
        className={`
          relative max-w-2xl w-full transition-all duration-500 overflow-hidden
          ${currentIsKawaii 
            ? 'bg-white border-[#EEAAC3] rounded-[3rem] shadow-[16px_16px_0px_#D86487] p-10 md:p-16 text-center' 
            : 'bg-[#0a0a0a]/90 backdrop-blur-xl border-[#520815] rounded-lg shadow-[0_0_50px_rgba(210,4,45,0.15)] p-0 text-left'}
        `}
      >
        {/* NOVO: Barra de Título do Terminal para o modo Goth */}
        {!currentIsKawaii && (
          <div className="bg-[#520815]/30 border-b border-[#520815] p-3 flex items-center gap-2">
            <Terminal size={16} className="text-[#D2042D]" />
            <span className="font-mono text-xs text-[#D2042D] opacity-70">root@portfolio:~</span>
          </div>
        )}

        <div className={`${!currentIsKawaii ? 'p-10 md:p-16' : ''} space-y-10`}>
          <div className="space-y-4">
            {/* MUDANÇA AQUI: Fonte mono e tracking para o modo Goth */}
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${currentIsKawaii ? 'font-cute text-[#D86487] tracking-tighter' : 'font-mono text-[#D2042D] tracking-wider uppercase'}`}>
              {currentIsKawaii ? 'Oie! Bem-vinde! ✨' : '>> ACCESS_GRANTED'}
            </h2>

            <div className={`h-1.5 rounded-full w-24 ${currentIsKawaii ? 'bg-[#EEAAC3] mx-auto' : 'bg-[#D2042D]'}`} />
          </div>

          <p className={`text-lg md:text-xl leading-relaxed ${currentIsKawaii ? 'font-sans text-[#76172C] font-bold' : 'font-code text-gray-400'}`}>
            {currentIsKawaii 
              ? "Preparei este cantinho com muito amor para mostrar meus projetos e as coisas que eu amo. Vamos ver?" 
              : "Identidade confirmada. Bem-vinda ao core do sistema, onde código e dados se encontram."}
          </p>

          <button
            onClick={onEnter}
            // MUDANÇA AQUI: Alinhamento do botão
            className={`
              group relative mt-8 px-12 py-4 text-xl font-black transition-all duration-300 transform active:scale-95
              ${currentIsKawaii 
                ? 'bg-[#D86487] text-white rounded-full shadow-[0_6px_0_#EEAAC3] hover:shadow-none hover:translate-y-1 w-full md:w-auto' 
                : 'bg-transparent border-2 border-[#D2042D] text-[#D2042D] hover:bg-[#D2042D] hover:text-black rounded-sm tracking-[0.2em] uppercase w-full'}
            `}
          >
            <span className="flex items-center justify-center gap-2">
              {currentIsKawaii ? <>Explorar <Sparkles size={20}/></> : '[ EXECUTE_SESSION ]'}
            </span>
          </button>
        </div>
      </motion.div>

      {/* Footer */}
      <div className={`absolute bottom-10 flex items-center gap-2 text-sm font-code font-bold ${currentIsKawaii ? 'text-[#D86487]' : 'text-gray-500'}`}>
        <span className="w-2.5 h-2.5 rounded-full bg-current animate-pulse" />
        {currentIsKawaii ? '✿ Magical Girl Mode ON ✿' : 'SYSTEM_STABLE // v1.0.5'}
      </div>
    </motion.div>
  );
};