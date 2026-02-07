// src/components/Hero.tsx
import { useTypewriter } from "../../hooks/useTypewriter";
import { useEasterEgg } from "../../hooks/useEasterEgg";
import { HeroBackground } from "./HeroBackground";
import { HeroText } from "./HeroText";
import { HeroCard } from "./HeroCard";
import { motion, type Variants } from "framer-motion";

interface HeroProps {
  isStarted: boolean;
}

// 1. Variantes para a "Caixa de Vidro" (Container Principal)
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      // Orquestra a entrada do HeroText e HeroCard
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

// 2. Variantes para os itens internos (Text e Card)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const Hero = ({ isStarted }: HeroProps) => {
  // Hooks de Lógica
  const typedText = useTypewriter("Goth Soul.\nKawaii Heart.\nClean Code.");
  const { fact, currentIcon, triggerSecret } = useEasterEgg();

  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 pt-28 pb-12 md:p-4 relative overflow-hidden font-sans">
      {/* 3. Background Decorativo (Entra com fade simples) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isStarted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <HeroBackground />
      </motion.div>

      {/* 4. Container Principal com Animação de Entrada */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isStarted ? "visible" : "hidden"}
        className="relative w-full max-w-6xl p-8 md:p-16 transition-all duration-500 kawaii:border kawaii:border-white/40 kawaii:bg-white/30 kawaii:backdrop-blur-md kawaii:rounded-3xl kawaii:shadow-[0_8px_32px_0_rgba(255,105,180,0.1)]"
      >
        {/* Cantos Decorativos Kawaii (Framer Motion anima a opacidade deles via stagger) */}
        <motion.div
          variants={itemVariants}
          className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent/50 -mt-1 -ml-1 hidden kawaii:block rounded-tl-lg"
        />
        <motion.div
          variants={itemVariants}
          className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent/50 -mb-1 -mr-1 hidden kawaii:block rounded-br-lg"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          {/* 5. Lado Esquerdo: HeroText envolto em motion para o stagger */}
          <motion.div variants={itemVariants}>
            <HeroText typedText={typedText} />
          </motion.div>

          {/* 6. Lado Direito: HeroCard envolto em motion para o stagger */}
          <motion.div variants={itemVariants}>
            <HeroCard
              fact={fact}
              currentIcon={currentIcon}
              onTriggerSecret={triggerSecret}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
