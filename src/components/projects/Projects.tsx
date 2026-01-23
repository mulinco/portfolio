import { useState } from 'react';
import { Github, ExternalLink, Folder, X, Code2, Terminal } from 'lucide-react';
import TiltCard from '../ui/TiltCard';          
import MagneticWrapper from '../ui/MagneticWrapper'; 
import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface Project {
  title: string;
  shortDescription: string;
  longDescription: string;
  techs: string[];
  image: string;
  github: string;
  demo?: string;
  type: 'Frontend' | 'Backend' | 'Data Science' | 'Full Stack';
}

interface ProjectsProps {
  isStarted: boolean;
}

// 1. Variantes para o Header e o Grid
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Cascata entre os cards
      delayChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export const Projects = ({ isStarted }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Netflix Genre Analysis",
      type: "Data Science",
      shortDescription: "Análise exploratória de dados sobre tendências de gêneros.",
      longDescription: "Um estudo profundo utilizando Pandas e Matplotlib para entender a evolução dos gêneros de filmes e séries na plataforma Netflix ao longo das décadas. Inclui visualização de dados e insights estatísticos.",
      techs: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook", "Data Viz"],
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=800&auto=format&fit=crop", 
      github: "https://github.com/mulinco/analysis-genre-netflix"
    },
    {
      title: "EduTech Backend",
      type: "Backend",
      shortDescription: "API e modelagem de dados para plataforma educacional.",
      longDescription: "O coração do sistema EduTech. Focado na arquitetura de banco de dados robusta, normalização e endpoints seguros. Simula o gerenciamento de alunos, cursos e matrículas.",
      techs: ["Python", "SQL", "PostgreSQL", "API Rest", "Database Modeling"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop", 
      github: "https://github.com/mulinco/edutech"
    },
    {
      title: "PDF Extractor Tool",
      type: "Full Stack",
      shortDescription: "Ferramenta de automação para extração de dados de PDFs.",
      longDescription: "Uma aplicação prática construída com Streamlit que automatiza a leitura de arquivos PDF, extrai informações específicas e permite exportação estruturada. Solução real para problemas administrativos.",
      techs: ["Python", "Streamlit", "PyPDF2", "Automation", "Regex"],
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=800&auto=format&fit=crop", 
      github: "https://github.com/mulinco/extrator-pdf-streamlit"
    },
    {
      title: "Instituto Consuelo",
      type: "Frontend",
      shortDescription: "Interface moderna para ONG de impacto social e tecnológico.",
      longDescription: "Desenvolvimento do frontend para plataforma de estudo EAD do Instituto Consuelo. Foco em acessibilidade, responsividade e uma UI acolhedora para conectar doadores e beneficiários.",
      techs: ["React", "TypeScript", "Tailwind CSS", "UX/UI", "Responsividade"],
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop", 
      github: "https://github.com/Edutech-Instituto-Consuelo/frontend"
    },
    {
      title: "Meu Portfólio",
      type: "Frontend",
      shortDescription: "Este site! Um showcase interativo com temas dinâmicos.",
      longDescription: "Uma aplicação React completa demonstrando gerenciamento de estado complexo (temas Goth/Kawaii), animações CSS puras e arquitetura de componentes reutilizáveis.",
      techs: ["React", "Vite", "Tailwind", "Lucide React", "CSS Variables"],
      image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop", 
      github: "https://github.com/mulinco/portfolio"
    },
    {
      title: "BioLinks Agatha Viana",
      type: "Frontend",
      shortDescription: "Hub de links mobile-first com animações GSAP e Next.js.",
      longDescription: "Uma landing page de alta performance desenvolvida para superar as limitações de agregadores comuns. Foca na identidade visual da cliente com um tema 'Modern Retro', utilizando animações fluídas (GSAP), otimização de imagem e layout 100% responsivo (No-Scroll).",
      techs: ["Next.js 14", "TypeScript", "Tailwind CSS", "GSAP", "React Bits"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", 
      github: "https://github.com/mulinco/linktree-agatha",
      demo: "https://linktree-agatha.vercel.app"
    }
  ];

  return (
    <section id="projetos" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Cabeçalho da Seção */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={isStarted ? { opacity: 1, y: 0 } : {}}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-display text-accent">
          Projetos Selecionados
        </h2>
        <p className="text-text-secondary font-code max-w-2xl mx-auto">
          Uma coleção de códigos, dados e interfaces que construí. 
          <span className="hidden md:inline"> Clique nos cards para ver os detalhes técnicos.</span>
        </p>
      </motion.div>

      {/* Grid de Projetos com Stagger */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView={isStarted ? "visible" : "hidden"}
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={cardVariants}>
            <TiltCard className="h-full">
              <div 
                onClick={() => setSelectedProject(project)}
                className="h-full group relative cursor-pointer bg-bg-secondary border border-accent/20 rounded-xl kawaii:rounded-[2rem] p-6 hover:border-accent transition-all duration-300 flex flex-col"
              >
                <div className="flex justify-between items-start mb-6" style={{ transform: "translateZ(20px)" }}>
                  <div className="p-3 bg-bg-primary rounded-lg text-accent group-hover:scale-110 transition-transform">
                    {project.type === 'Data Science' ? <Terminal size={24} /> : 
                     project.type === 'Backend' ? <Code2 size={24} /> : 
                     <Folder size={24} />}
                  </div>
                  <div className="p-2 text-text-secondary hover:text-accent transition-colors">
                      <Github size={20} />
                  </div>
                </div>

                <div style={{ transform: "translateZ(30px)" }}>
                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors font-heading">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary font-sans leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto" style={{ transform: "translateZ(20px)" }}>
                  {project.techs.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs font-code text-accent font-bold bg-accent/5 px-2 py-1 rounded border border-transparent group-hover:border-accent/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal de Detalhes com AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-bg-secondary w-full max-w-2xl border border-accent shadow-2xl overflow-hidden flex flex-col max-h-[90vh] rounded-xl kawaii:rounded-[2.5rem]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-bg-primary/50 rounded-full text-text-primary hover:text-accent transition-all"
              >
                <X size={24} />
              </button>

              <div className="h-48 md:h-64 w-full bg-bg-primary relative overflow-hidden">
                 <img 
                   src={selectedProject.image} 
                   alt={selectedProject.title}
                   className="w-full h-full object-cover opacity-80"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary to-transparent"></div>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto">
                <span className="text-accent font-code text-xs uppercase tracking-widest border border-accent/30 px-3 py-1 rounded-full inline-block mb-4">
                  {selectedProject.type}
                </span>
                <h3 className="text-3xl md:text-4xl font-heading text-text-primary mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg mb-8">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-8">
                  <h4 className="text-xs font-bold text-text-primary uppercase mb-3 flex items-center gap-2 font-code">
                    <Code2 size={16} className="text-accent"/> Stack Tecnológico
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techs.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-bg-primary border border-accent/20 rounded-md text-sm text-text-primary">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-accent/10">
                  <MagneticWrapper className="flex-1">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 bg-bg-primary border border-accent text-text-primary hover:bg-accent hover:text-black transition-all w-full uppercase font-bold text-sm kawaii:rounded-full">
                      <Github size={20} /> Github
                    </a>
                  </MagneticWrapper>
                  
                  {selectedProject.demo && (
                    <MagneticWrapper className="flex-1">
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 bg-accent text-black font-bold text-sm uppercase transition-all w-full kawaii:rounded-full">
                        <ExternalLink size={20} /> Live Demo
                      </a>
                    </MagneticWrapper>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};