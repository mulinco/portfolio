import { useState, useMemo, useEffect } from 'react';
import { Code, Database, Layout, Sparkles, X, Bot, GitBranch } from 'lucide-react';
import { CVCard } from '../cv/CVCard';
import { CVModal } from '../cv/CVModal';
import InfiniteScroll from '../ui/InfiniteScroll'; 
import SpotlightCard from '../ui/SpotlightCard'; 
import { motion, AnimatePresence, type Variants } from "framer-motion";

interface Skill {
  name: string;
  icon: React.ReactNode; 
  level: string;
  percentage: string;
  description: string;
  techs: string[];
}

interface AboutProps {
  isKawaii: boolean;
  isStarted: boolean;
}

// Variantes de animação
const textContainerVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const skillItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export const About = ({ isKawaii: propIsKawaii, isStarted }: AboutProps) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isCVOpen, setIsCVOpen] = useState(false);
  
  // 1. AUTO-DETECÇÃO DE TEMA (Para garantir que o texto mude na hora)
  const [currentIsKawaii, setCurrentIsKawaii] = useState(propIsKawaii);

  useEffect(() => {
    const checkTheme = () => {
      setCurrentIsKawaii(document.body.classList.contains('kawaii'));
    };
    const observer = new MutationObserver(() => checkTheme());
    observer.observe(document.body, { attributes: true });
    checkTheme();
    return () => observer.disconnect();
  }, []);

  const MY_BIRTHDAY = "1998-06-13"; 
  const myAge = useMemo(() => {
    const birthDate = new Date(MY_BIRTHDAY);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
  }, []);

  const skills: Skill[] = [
    { name: 'Python', icon: <Code />, level: 'Intermediário', percentage: '65%', description: "Minha linguagem principal. Focada em análise de dados e bioinformática.", techs: ["Pandas", "BioPython", "Streamlit", "Automação"] },
    { name: 'React', icon: <Layout />, level: 'Em Aprendizado', percentage: '50%', description: "Desenvolvimento de SPAs modernas com foco em componentes reutilizáveis.", techs: ["Hooks", "Vite", "Context API", "Tailwind"] },
    { name: 'Tailwind', icon: <Sparkles />, level: 'Prático', percentage: '70%', description: "Estilização rápida e responsiva com foco em design utilitário.", techs: ["Layouts", "Grid/Flex", "Dark Mode"] },
    { name: 'SQL', icon: <Database />, level: 'Básico', percentage: '40%', description: "Modelagem de bancos de dados relacionais e consultas analíticas.", techs: ["PostgreSQL", "Selects", "Joins"] },
    { name: 'AI Co-Pilot', icon: <Bot />, level: 'Estratégico', percentage: '85%', description: "Uso avançado de IAs para aumento de produtividade e debugging.", techs: ["Prompting", "Refatoração", "Documentação"] },
    { name: 'Git & GitHub', icon: <GitBranch />, level: 'Essencial', percentage: '60%', description: "Versionamento de código e colaboração em equipe.", techs: ["Branches", "Commits", "PRs"] },
  ];

  const tools = ["VS Code", "Pandas", "Streamlit", "Figma", "PostgreSQL", "Linux", "Vite", "TypeScript", "BioPython", "Vercel"];

  const scrollItems = tools.map((tool, index) => (
    <div key={index} className={`flex items-center gap-2 px-4 py-2 border rounded-md backdrop-blur-sm ${currentIsKawaii ? 'bg-white/50 border-[#EEAAC3]' : 'bg-bg-secondary/30 border-accent/10'}`}>
      <span className="text-accent text-[8px] animate-pulse">●</span>
      <span className={`font-code text-sm font-bold uppercase tracking-wider ${currentIsKawaii ? 'text-[#76172C]' : 'text-text-secondary opacity-80'}`}>{tool}</span>
    </div>
  ));

  return (
    <section className={`relative py-20 overflow-hidden transition-colors duration-500 font-sans ${currentIsKawaii ? 'bg-pink-50/30' : 'bg-bg-primary'}`}>
      
      {/* Texto Decorativo de Fundo */}
      <div className="absolute top-10 left-0 w-full overflow-hidden leading-none select-none opacity-[0.03] kawaii:opacity-[0.05] pointer-events-none">
        <span className={`text-[15rem] md:text-[20rem] font-black uppercase ${currentIsKawaii ? 'font-cute tracking-tighter' : 'font-display'}`}>
          {currentIsKawaii ? 'CREATIVE' : 'DEVELOPER'}
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"> 
          
          {/* LADO ESQUERDO: BIO */}
          <motion.div 
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h2 variants={textItemVariants} className="text-4xl md:text-5xl font-display text-accent">
                Quem sou eu?
              </motion.h2>
              <div className="font-code text-text-secondary text-lg leading-relaxed space-y-4">
                <motion.p variants={textItemVariants}>
                  <span className="text-accent font-bold">Maria Rodrigues.</span> {myAge} anos. 
                  Troquei o jaleco pelo teclado, mas a mentalidade analítica continua a mesma.
                </motion.p>
                <motion.div variants={textItemVariants} className={`pt-4 border-l-4 border-accent pl-4 italic font-bold text-xl ${currentIsKawaii ? 'text-[#76172C]' : 'text-text-secondary'}`}>
                  {currentIsKawaii ? "✨ Brilho por fora, código por dentro ✨" : '"Dark Mode por padrão. Kawaii por escolha."'}
                </motion.div>
              </div>
            </div>
            <motion.div variants={textItemVariants} className="pt-4">
              <CVCard onClick={() => setIsCVOpen(true)} />
            </motion.div>
          </motion.div>

          {/* LADO DIREITO: SKILLS */}
          <motion.div 
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={skillItemVariants} onClick={() => setSelectedSkill(skill)} className="h-full group cursor-pointer">
                <SpotlightCard className="h-full hover:-translate-y-1 transition-transform duration-500" spotlightColor="var(--spotlight-color)">
                  <div className="p-6 flex flex-col gap-3 h-full relative z-20">
                    <div className="text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="font-bold font-code text-text-primary">{skill.name}</h3>
                    <div className="w-full bg-bg-primary h-2 mt-auto rounded-full overflow-hidden border border-accent/10">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.percentage }}
                        transition={{ duration: 1.5, delay: 0.6, ease: "circOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-accent rounded-full"
                      />
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 🚀 INFINITE SCROLL (Com efeito de entrada e texto personalizado) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 pt-8 relative z-10"
      >
        <div className="flex items-center justify-center gap-4 mb-8 opacity-50">
            <div className={`h-px w-12 md:w-32 ${currentIsKawaii ? 'bg-[#EEAAC3]' : 'bg-accent/30'}`}></div>
            <span className={`font-code text-xs uppercase tracking-[0.3em] whitespace-nowrap ${currentIsKawaii ? 'text-[#D86487] font-bold' : 'text-text-secondary'}`}>
              {currentIsKawaii ? '✿ Ferramentas Favoritas ✿' : 'Arsenal_&_Tools'}
            </span>
            <div className={`h-px w-12 md:w-32 ${currentIsKawaii ? 'bg-[#EEAAC3]' : 'bg-accent/30'}`}></div>
        </div>

        <InfiniteScroll 
          items={scrollItems} 
          speed="normal" 
          direction="left" 
          className="opacity-70 hover:opacity-100 transition-opacity" 
        />
      </motion.div>

      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className={`relative bg-bg-secondary w-full max-w-lg p-8 shadow-2xl border-2 border-accent ${currentIsKawaii ? 'rounded-[3rem]' : 'rounded-xl'}`}
            >
              <button onClick={() => setSelectedSkill(null)} className="absolute top-4 right-4 text-text-secondary hover:text-accent"><X size={28} /></button>
              <h3 className="font-bold text-3xl text-text-primary mb-4">{selectedSkill.name}</h3>
              <p className="text-text-secondary leading-relaxed mb-6">{selectedSkill.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedSkill.techs.map((t, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20">{t}</span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </section>
  );
};