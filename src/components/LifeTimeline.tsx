// src/components/LifeTimeline.tsx
import { useEffect, useState, useRef } from 'react';
import { Dna, Code, GraduationCap, Rocket, BookOpen } from 'lucide-react';
import { motion, useScroll, useSpring, type Variants } from 'framer-motion';

const STYLES = {
  kawaii: {
    cardBg: "bg-[#ffffff]",           
    cardBorder: "border-[#EEAAC3]",   
    cardShadow: "shadow-[6px_6px_0px_#D86487]", 
    fontTitle: "font-['Mochiy_Pop_One']", 
    fontBody: "font-['Inter']",
    titleColor: "text-[#4A202A]",    
    bodyColor: "text-[#76172C]",     
    badgeBg: "bg-[#F1DFDD]",         
    badgeText: "text-[#D86487]",     
    badgeBorder: "border-[#EEAAC3]", 
    lineColor: "bg-[#EEAAC3]",       
    iconContainer: "bg-[#ffffff] border-[#EEAAC3] text-[#D86487] shadow-[0_0_0_4px_#F1DFDD]",
    arrow: "bg-[#ffffff] border-[#EEAAC3]",
    ghostDate: "text-[#EEAAC3]/40 font-['Mochiy_Pop_One']"
  },
  goth: {
    cardBg: "bg-[#1a0b0b]/90",       
    cardBorder: "border-[#520815]",  
    cardShadow: "shadow-[0_0_15px_rgba(210,4,45,0.25)]", 
    fontTitle: "font-['Inter'] font-bold tracking-wide text-xl", 
    fontBody: "font-['Inter']",
    titleColor: "text-[#D2042D]",    
    bodyColor: "text-[#a39ba8]",     
    badgeBg: "bg-[#0f0505]",         
    badgeText: "text-[#E0E0E0]",     
    badgeBorder: "border-[#520815]",
    lineColor: "bg-[#D2042D]", 
    iconContainer: "bg-[#0f0505] border-[#D2042D] text-[#D2042D] shadow-[0_0_15px_#520815]",
    arrow: "bg-[#1a0b0b] border-[#520815]",
    ghostDate: "text-[#520815]/30 font-['UnifrakturMaguntia']"
  }
};

const cardVariants: Variants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const TimelineCard = ({ year, title, description, isKawaii, align }: any) => {
  const theme = isKawaii ? STYLES.kawaii : STYLES.goth;
  return (
    <motion.div 
      variants={cardVariants}
      initial={align === 'left' ? "hiddenLeft" : "hiddenRight"}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`relative p-6 w-full transition-all duration-300 hover:-translate-y-1 group border-2 ${theme.cardBg} ${theme.cardBorder} ${theme.cardShadow} ${isKawaii ? 'rounded-[2rem]' : 'rounded-sm'}`}
    >
      <span className={`inline-flex items-center justify-center px-4 py-1 text-xs rounded-full mb-3 uppercase tracking-widest font-bold border ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder} ${isKawaii ? "font-['Mochiy_Pop_One']" : "font-['Fira_Code']"}`}>
        {year}
      </span>
      <h3 className={`mb-2 drop-shadow-sm ${theme.titleColor} ${theme.fontTitle}`}>{title}</h3>
      <p className={`text-sm leading-relaxed font-medium ${theme.bodyColor} ${theme.fontBody}`}>{description}</p>
      <div className={`hidden md:block absolute top-10 w-4 h-4 rotate-45 border-t border-r ${align === 'left' ? '-right-2.5' : '-left-2.5'} ${theme.arrow}`}></div>
    </motion.div>
  );
}

const TimelineItem = ({ year, title, description, icon, isKawaii, isLast, index }: any) => {
  const isEven = index % 2 === 0;
  const theme = isKawaii ? STYLES.kawaii : STYLES.goth;
  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-center w-full mb-12 ${isLast ? 'mb-0' : ''}`}>
      <div className="hidden md:flex w-[45%] justify-end pr-12">
        {isEven ? <TimelineCard year={year} title={title} description={description} isKawaii={isKawaii} align="left" /> : 
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={`text-7xl font-bold select-none ${theme.ghostDate}`}>{year.split(' ')[0]}</motion.span>}
      </div>
      <div className="relative flex flex-col items-center z-10 md:px-4">
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 z-20 ${theme.iconContainer}`}>{icon}</motion.div>
        {!isLast && <div className={`md:hidden w-1 h-16 my-2 rounded-full ${isKawaii ? 'bg-[#EEAAC3]' : 'bg-[#D2042D]'}`}></div>}
      </div>
      <div className="w-full md:w-[45%] md:pl-12 flex flex-col md:block">
        <div className="md:hidden mt-4 px-4"><TimelineCard year={year} title={title} description={description} isKawaii={isKawaii} align="right" /></div>
        <div className="hidden md:block">
          {!isEven ? <TimelineCard year={year} title={title} description={description} isKawaii={isKawaii} align="right" /> : 
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={`text-7xl font-bold select-none ${theme.ghostDate}`}>{year.split(' ')[0]}</motion.span>}
        </div>
      </div>
    </div>
  );
};

export const LifeTimeline = ({ isKawaii: propIsKawaii = false, isStarted }: { isKawaii?: boolean, isStarted: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null); // Referência para os itens
  const [autoKawaii, setAutoKawaii] = useState(propIsKawaii);

  // 🚀 Ajuste do Scroll: O alvo agora é o container dos itens para precisão total
  const { scrollYProgress } = useScroll({ 
    target: itemsRef, 
    offset: ["start center", "end center"] 
  });
  
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const checkTheme = () => setAutoKawaii(propIsKawaii || document.body.classList.contains('kawaii'));
    const observer = new MutationObserver(() => checkTheme());
    observer.observe(document.body, { attributes: true });
    checkTheme();
    return () => observer.disconnect();
  }, [propIsKawaii]);

  const events = [
    { year: "2019 - 2020", title: "Letras (UFRJ)", description: "Meu primeiro contato com a universidade federal. Buscava desafios mais objetivos e científicos.", icon: <BookOpen size={24} /> },
    { year: "2020 - 2026", title: "Biologia e Genética (UFRJ)", description: "Desenvolvimento de pensamento analítico e metodologia de pesquisa rigorosa.", icon: <Dna size={24} /> },
    { year: "2024", title: "A Mutação (O 'Click')", description: "Descobri a automação com Python. A transição para tecnologia se tornou inevitável.", icon: <Code size={24} /> },
    { year: "2025", title: "Imersão Full Stack", description: "ADS e foco total em desenvolvimento. Construindo a ponte entre dados e interfaces.", icon: <GraduationCap size={24} /> },
    { year: "2026", title: "Futuro: Dev Full Stack", description: "Pronta para criar soluções que unem a lógica científica com tecnologia de ponta.", icon: <Rocket size={24} /> }
  ];

  if (!isStarted) return null;

  return (
    <div ref={containerRef} className="relative py-20 px-4 md:px-0 w-full mx-auto overflow-hidden bg-transparent">
      
      {/* Cabeçalho */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 space-y-4 relative z-20"
      >
        <h2 className={`text-4xl md:text-5xl font-display ${autoKawaii ? 'text-[#D86487] font-cute' : 'text-[#D2042D]'}`}>
          {autoKawaii ? 'Minha Doce Jornada' : 'Evolution.log'}
        </h2>
        <p className={`font-code max-w-2xl mx-auto ${autoKawaii ? 'text-[#76172C]' : 'text-[#a39ba8]'}`}>
          {autoKawaii ? 'Como as pétalas de Sakura, minha história floresce a cada passo. 🌸' : '> executando log_de_carreira.sh... [OK]'}
        </p>
      </motion.div>

      {/* Container dos itens com a linha dentro */}
      <div ref={itemsRef} className="max-w-6xl mx-auto relative">
        
        {/* 🚀 LINHA CENTRAL AJUSTADA: 
            Começa no centro do primeiro ícone (top-8) 
            e termina no centro do último ícone (bottom-8) */}
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className={`hidden md:block absolute top-8 bottom-8 left-1/2 w-1 -ml-0.5 transition-colors duration-500 z-0 ${autoKawaii ? STYLES.kawaii.lineColor : STYLES.goth.lineColor} ${!autoKawaii && 'shadow-[0_0_10px_#D2042D]'}`}
        />

        {events.map((event, index) => (
            <TimelineItem 
              key={index} 
              index={index} 
              {...event} 
              isKawaii={autoKawaii} 
              isLast={index === events.length - 1} 
            />
        ))}
      </div>
    </div>
  );
};