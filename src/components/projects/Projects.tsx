import { useState } from 'react';
import { Github, ExternalLink, Folder, X, Code2, Terminal } from 'lucide-react';

interface Project {
  title: string;
  shortDescription: string;
  longDescription: string;
  techs: string[];
  image: string; // Caminho da imagem ou URL
  github: string;
  demo?: string; // Opcional, caso não tenha deploy
  type: 'Frontend' | 'Backend' | 'Data Science' | 'Full Stack';
}

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

const projects: Project[] = [
    {
      title: "Netflix Genre Analysis",
      type: "Data Science",
      shortDescription: "Análise exploratória de dados sobre tendências de gêneros.",
      longDescription: "Um estudo profundo utilizando Pandas e Matplotlib para entender a evolução dos gêneros de filmes e séries na plataforma Netflix ao longo das décadas. Inclui visualização de dados e insights estatísticos.",
      techs: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook", "Data Viz"],
      // Imagem: Cinema/Pipoca com vibe escura
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=800&auto=format&fit=crop", 
      github: "https://github.com/mulinco/analysis-genre-netflix"
    },
    {
      title: "EduTech Backend",
      type: "Backend",
      shortDescription: "API e modelagem de dados para plataforma educacional.",
      longDescription: "O coração do sistema EduTech. Focado na arquitetura de banco de dados robusta, normalização e endpoints seguros. Simula o gerenciamento de alunos, cursos e matrículas.",
      techs: ["Python", "SQL", "PostgreSQL", "API Rest", "Database Modeling"],
      // Imagem: Código/Servidor abstrato
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop", 
      github: "https://github.com/mulinco/edutech"
    },
    {
      title: "PDF Extractor Tool",
      type: "Full Stack",
      shortDescription: "Ferramenta de automação para extração de dados de PDFs.",
      longDescription: "Uma aplicação prática construída com Streamlit que automatiza a leitura de arquivos PDF, extrai informações específicas e permite exportação estruturada. Solução real para problemas administrativos.",
      techs: ["Python", "Streamlit", "PyPDF2", "Automation", "Regex"],
      // Imagem: Documentos organizados/Clean
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=800&auto=format&fit=crop", 
      github: "https://github.com/mulinco/extrator-pdf-streamlit"
    },
    {
      title: "Instituto Consuelo",
      type: "Frontend",
      shortDescription: "Interface moderna para ONG de impacto social.",
      longDescription: "Desenvolvimento do frontend para o Instituto Consuelo. Foco em acessibilidade, responsividade e uma UI acolhedora para conectar doadores e beneficiários.",
      techs: ["React", "TypeScript", "Tailwind CSS", "UX/UI", "Responsividade"],
      // Imagem: Mãos/Comunidade/Afeto
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop", 
      github: "https://github.com/Edutech-Instituto-Consuelo/frontend"
    },
    {
      title: "Meu Portfólio",
      type: "Frontend",
      shortDescription: "Este site! Um showcase interativo com temas dinâmicos.",
      longDescription: "Uma aplicação React completa demonstrando gerenciamento de estado complexo (temas Goth/Kawaii), animações CSS puras e arquitetura de componentes reutilizáveis.",
      techs: ["React", "Vite", "Tailwind", "Lucide React", "CSS Variables"],
      // Imagem: Setup tech com estética neon/dark
      image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop", 
      github: "https://github.com/mulinco/portfolio"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Cabeçalho da Seção */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-heading text-accent animate-in fade-in slide-in-from-bottom-4 duration-700">
          Projetos Selecionados
        </h2>
        <p className="text-text-secondary font-code max-w-2xl mx-auto">
          Uma coleção de códigos, dados e interfaces que construí. 
          <span className="hidden md:inline"> Clique nos cards para ver os detalhes técnicos.</span>
        </p>
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            onClick={() => setSelectedProject(project)}
            className="group relative bg-bg-secondary border border-accent/20 rounded-xl kawaii:rounded-3xl p-6 hover:border-accent transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-accent/10"
          >
            {/* Ícone de Pasta/Tipo no Topo */}
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-bg-primary rounded-lg text-accent group-hover:scale-110 transition-transform">
                {project.type === 'Data Science' ? <Terminal size={24} /> : 
                 project.type === 'Backend' ? <Code2 size={24} /> : 
                 <Folder size={24} />}
              </div>
              <div className="flex gap-2">
                 {/* Links rápidos no card (sem abrir modal) */}
                 <a 
                   href={project.github} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   onClick={(e) => e.stopPropagation()} // Para não abrir o modal se clicar só no ícone
                   className="text-text-secondary hover:text-accent transition-colors"
                 >
                   <Github size={20} />
                 </a>
              </div>
            </div>

            {/* Conteúdo do Card */}
            <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors font-heading">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary font-sans leading-relaxed mb-4">
              {project.shortDescription}
            </p>

            {/* Tags (Preview) */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techs.slice(0, 3).map((tech, i) => (
                <span key={i} className="text-xs font-code text-accent/80 bg-accent/5 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
              {project.techs.length > 3 && (
                <span className="text-xs font-code text-text-muted px-2 py-1">+ {project.techs.length - 3}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* --- MODAL DE DETALHES DO PROJETO --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="relative bg-bg-secondary w-full max-w-2xl rounded-xl kawaii:rounded-3xl border border-accent shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Botão Fechar */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-bg-primary/50 rounded-full text-text-primary hover:text-accent hover:bg-bg-primary transition-all"
            >
              <X size={24} />
            </button>

            {/* Imagem do Projeto (Topo do Modal) */}
            <div className="h-48 md:h-64 w-full bg-bg-primary relative overflow-hidden group">
               {/* Se não tiver imagem real, mostra um placeholder elegante */}
               <div className="absolute inset-0 flex items-center justify-center text-accent/20 font-heading text-6xl select-none">
                 {selectedProject.type}
               </div>
               <img 
                 src={selectedProject.image} 
                 alt={selectedProject.title}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 hover:opacity-100"
                 // Fallback para caso a imagem não exista
                 onError={(e) => {
                   (e.target as HTMLImageElement).style.display = 'none';
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary to-transparent opacity-90"></div>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="flex justify-between items-center mb-2">
                 <span className="text-accent font-code text-sm uppercase tracking-widest border border-accent/30 px-3 py-1 rounded-full">
                   {selectedProject.type}
                 </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-heading text-text-primary mb-4">
                {selectedProject.title}
              </h3>

              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-text-secondary leading-relaxed text-lg">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Lista Completa de Tecnologias */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-text-primary uppercase mb-3 flex items-center gap-2">
                  <Terminal size={16} className="text-accent"/> Stack Tecnológico
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techs.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-bg-primary border border-accent/20 rounded-md text-sm text-text-primary hover:border-accent hover:text-accent transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex gap-4 pt-4 border-t border-accent/10">
                <a 
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-bg-primary border border-accent text-text-primary py-3 rounded-lg hover:bg-accent hover:text-white transition-all font-bold"
                >
                  <Github size={20} />
                  Ver Código
                </a>
                
                {selectedProject.demo && (
                  <a 
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-accent text-white py-3 rounded-lg hover:bg-accent-hover transition-all font-bold shadow-lg shadow-accent/20"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};