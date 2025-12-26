import { Github, ExternalLink, FolderOpen, Heart } from 'lucide-react';

export const Projects = () => {
  
  // Lista de projetos (Edite aqui depois!)
  const projects = [
    {
      title: "Data Extractor PDF",
      description: "Ferramenta Python que transforma PDFs caóticos em planilhas organizadas. Usei Streamlit para interface.",
      tags: ["Python", "Streamlit", "Pandas"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop", // Placeholder Tech
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Dual-Theme",
      description: "Este site! Uma arquitetura React com Tailwind que muda completamente de personalidade via CSS variables.",
      tags: ["React", "Tailwind", "Vite"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop", // Placeholder Abstract
      github: "#",
      live: "#"
    },
    {
      title: "Phylogenetic Analysis",
      description: "Projeto de bioinformática para análise de árvores filogenéticas usando BLAST e MEGA12.",
      tags: ["Bioinfo", "Data Science", "MEGA12"],
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop", // Placeholder Science
      github: "#",
      live: "#"
    },
    {
      title: "EduTech - Backend",
      description: "Simulação de backend para plataforma educacional, focada em automação de processos com Python e modelagem de banco de dados PostgreSQL.",
      tags: ["Python", "PostgreSQL", "Backend", "Automação"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop", // Imagem mais voltada para tecnologia/educação
      github: "https://github.com/mulinco/edutech",
      live: "#"
    },
    {
      title: "EduTech - Frontend",
      description: "Interface responsiva e interativa desenvolvida para a plataforma EduTech do Instituto Consuelo, facilitando a gestão educacional e a visualização de dados em tempo real.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "public/edutech-frontend.png", 
      github: "https://github.com/Edutech-Instituto-Consuelo/frontend",
      live: "https://plataforma-instituto-consuelo.vercel.app/" 
    },
    {
    title: "Netflix Genre Analysis",
    description: "Análise exploratória de dados (EDA) do catálogo da Netflix para identificar tendências de gêneros e padrões de lançamento ao longo dos anos.",
    tags: ["Python", "Pandas", "Matplotlib", "Data Viz"],
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1000&auto=format&fit=crop", // Placeholder Netflix
    github: "https://github.com/mulinco/analysis-genre-netflix",
    live: "#"
}

  ];

  return (
    <section className="py-24 px-4 font-sans relative z-10" id="projetos">
      <div className="max-w-6xl mx-auto">
        
        {/* TÍTULO DA SEÇÃO */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-metal kawaii:font-cute text-text-primary transition-all duration-500 mb-4">
            <span className="text-accent drop-shadow-[0_0_15px_rgba(210,4,45,0.5)] kawaii:drop-shadow-none">
                Grimórios
            </span> 
            <span className="mx-4 text-2xl md:text-3xl opacity-50 kawaii:hidden">///</span>
            <span className="hidden kawaii:inline mx-4"> & </span>
            <span className="kawaii:text-accent">Projetos</span>
          </h2>
          <p className="font-code text-text-muted text-sm md:text-base max-w-2xl mx-auto">
            // Seleção de feitiços compilados e memórias fotográficas.
          </p>
        </div>

        {/* GRID DE PROJETOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`
                group relative transition-all duration-500
                
                /* --- ESTILO GOTH (GRIMÓRIO) --- */
                bg-bg-secondary border-4 border-double border-accent/30 hover:border-accent hover:shadow-[0_0_30px_rgba(210,4,45,0.3)]
                
                /* --- ESTILO KAWAII (POLAROID) --- */
                kawaii:bg-white kawaii:border-0 kawaii:shadow-lg kawaii:hover:shadow-2xl kawaii:hover:-rotate-2 kawaii:hover:scale-105
                kawaii:p-4 kawaii:pb-8 /* Espaço branco extra embaixo igual polaroid */
              `}
            >
              
              {/* ELEMENTO DECORATIVO: WASHI TAPE (Fita adesiva no Kawaii) */}
              <div className="hidden kawaii:block absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-accent/40 backdrop-blur-sm -rotate-2 shadow-sm z-20 opacity-80 mix-blend-multiply"></div>

              {/* IMAGEM DO PROJETO */}
              <div className="relative overflow-hidden aspect-video border-b-2 border-accent/20 kawaii:border-0 kawaii:rounded-sm kawaii:mb-4 bg-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0 kawaii:grayscale-0"
                />
                
                {/* Overlay Goth no Hover */}
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 kawaii:hidden"></div>
              </div>

              {/* CONTEÚDO DO CARD */}
              <div className="p-6 kawaii:p-2 kawaii:text-center">
                
                {/* Título */}
                <h3 className="text-2xl font-metal kawaii:font-cute text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                {/* Descrição */}
                <p className="font-code text-xs md:text-sm text-text-secondary mb-4 line-clamp-3 kawaii:font-sans kawaii:text-gray-500">
                  {project.description}
                </p>

                {/* Tags (Tech Stack) */}
                <div className="flex flex-wrap gap-2 mb-6 kawaii:justify-center">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider border border-accent/30 px-2 py-1 text-accent font-code kawaii:bg-pink-100 kawaii:border-transparent kawaii:text-pink-600 kawaii:rounded-full kawaii:px-3 kawaii:font-bold">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Botões de Link */}
                <div className="flex items-center gap-4 kawaii:justify-center mt-auto">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-text-primary hover:text-accent transition-colors">
                    <Github size={18} />
                    <span className="font-code">CODE</span>
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-sm font-bold text-text-primary hover:text-accent transition-colors">
                    <ExternalLink size={18} />
                    <span className="font-code">LIVE</span>
                  </a>
                </div>

              </div>
              
              {/* DETALHE FINAL: Cantoneiras Góticas (Só no Dark) */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent opacity-50 kawaii:hidden"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent opacity-50 kawaii:hidden"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent opacity-50 kawaii:hidden"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent opacity-50 kawaii:hidden"></div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};