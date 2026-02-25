import { useState, useEffect } from "react";
import { Github, ExternalLink, Folder, X, Code2, Terminal } from "lucide-react";
import TiltCard from "../ui/TiltCard";
import MagneticWrapper from "../ui/MagneticWrapper";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { GenericCard } from "../ui/GenericCard";
import { client } from "../../services/sanity";
import { fetchGithubProjects, type GithubRepo } from "../../lib/github";

interface Project {
  title: string;
  shortDescription: string;
  longDescription: string;
  techs: string[];
  image: string;
  github: string;
  demo?: string;
  type: "Frontend" | "Backend" | "Data Science" | "Full Stack" | "Bioinformatics";
}

interface ProjectsProps {
  isStarted: boolean;
  isKawaii: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const Projects = ({ isStarted, isKawaii: propIsKawaii }: ProjectsProps) => {
  // Inicializa com array vazio agora que não temos projetos estáticos
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIsKawaii, setCurrentIsKawaii] = useState(propIsKawaii);

  useEffect(() => {
    const checkTheme = () => {
      setCurrentIsKawaii(document.body.classList.contains("kawaii"));
    };
    const observer = new MutationObserver(() => checkTheme());
    observer.observe(document.body, { attributes: true });
    checkTheme();
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const loadDynamicData = async () => {
      try {
        setLoading(true);

        // 1. Busca Sanity com tratamento de erro individual
        let sanityData: Project[] = [];
        try {
          const sanityQuery = `*[_type == "project"] | order(_createdAt desc) {
            title, type, shortDescription, longDescription, techs, "image": image.asset->url, github, demo
          }`;
          const rawSanity = await client.fetch<Project[]>(sanityQuery);
          
          sanityData = rawSanity.map(proj => ({
            ...proj,
            techs: proj.techs || [],
            shortDescription: proj.shortDescription || "Acesse o link para saber mais.",
            image: proj.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
          }));
        } catch (err) {
          console.error("Erro Sanity:", err);
        }

        // 2. Busca GitHub com tratamento de erro individual
        let mappedGithub: Project[] = [];
        try {
          const githubData: GithubRepo[] = await fetchGithubProjects("mulinco");
          mappedGithub = githubData.map((repo) => {
            let projectType: Project["type"] = "Full Stack";
            if (repo.language === "Python") projectType = "Data Science";
            else if (repo.language === "TypeScript" || repo.language === "JavaScript") projectType = "Frontend";

            return {
              title: repo.name.replace(/-/g, " "),
              type: projectType,
              shortDescription: repo.description || "Projeto automático do GitHub",
              longDescription: `Repositório vindo diretamente do GitHub. Linguagem: ${repo.language}. Estrelas: ${repo.stargazers_count}`,
              techs: repo.topics.length > 0 ? repo.topics : [repo.language || "Code"],
              image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
              github: repo.html_url,
              demo: repo.homepage || undefined,
            };
          });
        } catch (err) {
          console.error("Erro GitHub:", err);
        }

        // Combina apenas os dados dinâmicos
        const allProjects = [...sanityData, ...mappedGithub];
        
        // Remove duplicatas pelo título
        const uniqueProjects = allProjects.filter(
          (proj, index, self) => index === self.findIndex((p) => p.title === proj.title)
        );

        setProjects(uniqueProjects);
      } catch (error) {
        console.error("Erro geral na carga:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDynamicData();
  }, []);

  return (
    <section id="projetos" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={isStarted ? { opacity: 1, y: 0 } : {}}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4"
      >
        <h2 className={`text-4xl md:text-5xl font-display ${currentIsKawaii ? "text-pink-500 font-cute" : "text-accent"}`}>
          {currentIsKawaii ? "Meus Trabalhos" : "Selected_Projects"}
        </h2>
        <div className={`h-1 w-24 mx-auto ${currentIsKawaii ? "bg-pink-300" : "bg-accent"}`} />

        {loading && (
          <p className={`text-xs font-code animate-pulse mt-4 ${currentIsKawaii ? "text-pink-400" : "text-accent/60"}`}>
            {currentIsKawaii ? "✨ Sincronizando fofuras... ✨" : ">> [SYNCING_REMOTE_DATA]"}
          </p>
        )}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={isStarted ? "visible" : "hidden"}
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch"
      >
        {projects.map((project, index) => (
          <motion.div key={`${project.title}-${index}`} variants={cardVariants} className="h-full">
            <TiltCard className="h-full">
              <GenericCard isKawaii={currentIsKawaii} onClick={() => setSelectedProject(project)} className="h-full">
                <div className="flex flex-col h-full group">
                  <div className="flex justify-between items-start mb-6" style={{ transform: "translateZ(20px)" }}>
                    <div className="p-3 bg-black/10 rounded-lg text-accent group-hover:scale-110 transition-transform">
                      {project.type === "Data Science" ? <Terminal size={24} /> : project.type === "Backend" ? <Code2 size={24} /> : <Folder size={24} />}
                    </div>
                    <div className="p-2 text-text-secondary hover:text-accent transition-colors">
                      <Github size={20} />
                    </div>
                  </div>

                  <div className="flex-1" style={{ transform: "translateZ(30px)" }}>
                    <h3 className={`text-xl font-bold mb-2 group-hover:text-accent transition-colors font-heading ${currentIsKawaii ? "text-[#D86487]" : "text-text-primary"}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm font-sans leading-relaxed mb-6 ${currentIsKawaii ? "text-[#76172C]" : "text-text-secondary"}`}>
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-accent/5" style={{ transform: "translateZ(20px)" }}>
                    {(project.techs || []).slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[10px] font-code text-accent font-bold bg-accent/5 px-2 py-1 rounded border border-accent/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GenericCard>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`relative bg-bg-secondary w-full max-w-2xl border-2 border-accent shadow-2xl overflow-hidden ${currentIsKawaii ? "rounded-[3rem]" : "rounded-none"}`}
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-10 p-2 text-text-primary hover:text-accent">
                <X size={28} />
              </button>

              <div className="p-8">
                <span className="text-accent font-code text-xs uppercase tracking-widest border border-accent/30 px-3 py-1 rounded-full mb-4 inline-block">
                  {selectedProject.type}
                </span>
                <h3 className={`text-3xl font-heading mb-4 ${currentIsKawaii ? "text-pink-500" : "text-text-primary"}`}>
                  {selectedProject.title}
                </h3>
                <p className="text-text-secondary text-lg mb-8">{selectedProject.longDescription}</p>

                <div className="flex gap-4 pt-6 border-t border-accent/10">
                  <MagneticWrapper className="flex-1">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 border border-accent text-accent hover:bg-accent hover:text-black transition-all font-bold uppercase text-sm w-full">
                      <Github size={20} /> Github
                    </a>
                  </MagneticWrapper>
                  {selectedProject.demo && (
                    <MagneticWrapper className="flex-1">
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 bg-accent text-black font-bold uppercase text-sm w-full">
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