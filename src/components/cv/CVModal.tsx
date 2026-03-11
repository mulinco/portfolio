import {
  FaTimes,
  FaDownload,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaUser,
  FaRocket,
} from "react-icons/fa";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal = ({ isOpen, onClose }: CVModalProps) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const cvData = {
    name: "Maria Clara Rodrigues",
    role: "Desenvolvedora Full Stack & Analista de Dados",
    location: "Rio de Janeiro, RJ",
    summary:
      "Profissional em transição de carreira para a área de Tecnologia, combinando a bagagem analítica e de pesquisa das Ciências Biológicas (UFRJ) com a formação técnica em Análise e Desenvolvimento de Sistemas. Experiência prática em projetos Full Stack utilizando React, Python e SQL.",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Python",
      "PostgreSQL",
      "Git/GitHub",
      "Vercel",
      "Cloudflare",
      "Resend / Formspree",
      "Data Analysis",
      "Bioinformática",
    ],
    experience: [
      {
        role: "Co-fundadora & Eng. de Software Fullstack",
        company: "Ponira Lab",
        period: "Dez 2025 - Presente",
        description:
          "Liderança técnica atuando no desenvolvimento de soluções digitais ponta a ponta. Abordagem unindo a agilidade do ecossistema front-end moderno com o poder analítico do Python para processamento de dados e automação.",
        details: [
          "Criação de soluções de backend e scripts focados em eficiência e integração de sistemas.",
          "Planejamento estratégico de infraestrutura e arquitetura de dados e serviços cloud (Cloudflare, Vercel).",
        ],
      },
    ],
    projects: [
      {
        name: "Portal Institucional Ponira Lab",
        stack: "Next.js, TypeScript, GSAP, Cloudflare, Vercel",
        description:
          "Desenvolvimento completo do site da agência focado em alta conversão e UX imersiva.",
        details: [
          "Configurações avançadas de rede na Cloudflare, compra e alocação de domínios, subdomínios e configuração de roteamento de emails.",
          "Implementação de interfaces de alta performance utilizando bibliotecas modernas como Tailwind CSS e GSAP.",
          "Planejamento estrutural para integração futura com banco de dados e CMS de forma escalável.",
        ],
      },
      {
        name: "Backend EduTech (Projeto Acadêmico)",
        stack: "Python, PostgreSQL",
        description:
          "Arquitetura de dados e infraestrutura para sistema de gestão educacional.",
        details: [
          "Modelagem de banco de dados relacional.",
          "Scripts de automação em Python para limpeza de dados.",
          "Criação de APIs RESTful estruturadas.",
        ],
      },
      {
        name: "Frontend Instituto Consuelo",
        stack: "React, Tailwind CSS",
        description: "Interface web responsiva para plataforma de ensino.",
        details: [
          "Desenvolvimento de componentes modulares com React.",
          "Estilização moderna e responsiva focada na experiência do aluno.",
          "Implementação de dashboards para visualização de métricas.",
        ],
      },
    ],
    education: [
      {
        course: "Análise e Desenvolvimento de Sistemas",
        school: "UNINTER",
        status: "Cursando",
      },
      {
        course: "Formação Full Stack",
        school: "Casa Digital",
        status: "Concluído (2025)",
      },
      {
        course: "Bacharelado em Ciências Biológicas (Genética)",
        school: "UFRJ",
        status: "Finalizando",
      },
    ],
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleBackdropClick}
    >
      <div
        className="
        relative w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden
        
        /* --- ESTRUTURA GERAL (Variáveis) --- */
        bg-bg-secondary
        border-2 border-accent/20 shadow-2xl
        
        /* Forma */
        rounded-xl kawaii:rounded-[2rem]
      "
      >
        {/* --- 1. CABEÇALHO --- */}
        <div className="flex justify-between items-start p-6 border-b border-accent/10 bg-bg-secondary">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-1">
              {cvData.name}
            </h2>
            <p className="text-accent font-code text-sm md:text-base mb-2 font-bold tracking-wide">
              {cvData.role}
            </p>
            <div className="flex items-center gap-2 text-text-secondary text-xs uppercase tracking-widest font-sans">
              <FaMapMarkerAlt /> {cvData.location}
            </div>
          </div>

          <button
            onClick={onClose}
            className="cursor-target p-2 rounded-full hover:bg-bg-primary transition-colors text-text-secondary hover:text-accent"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* --- 2. CONTEÚDO (Scroll) --- */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-thin scrollbar-track-bg-secondary scrollbar-thumb-accent/50 hover:scrollbar-thumb-accent">
          {/* Resumo */}
          <section>
            <div className="flex items-center gap-2 mb-3 text-accent font-bold font-heading text-xl">
              <FaUser /> <span>Sobre</span>
            </div>
            <p className="text-text-secondary leading-relaxed font-sans text-sm md:text-base border-l-2 border-accent pl-4">
              {cvData.summary}
            </p>
          </section>

          {/* Experiência */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-accent font-bold font-heading text-xl">
              <FaBriefcase /> <span>Experiência Profissional</span>
            </div>
            <div className="space-y-4">
              {cvData.experience.map((job, index) => (
                <div
                  key={index}
                  className="
                  p-5 rounded-lg transition-all
                  /* Card Interno usa cor Primária para dar profundidade contra o fundo Secundário */
                  bg-bg-primary border border-accent/10 hover:border-accent/40
                "
                >
                  <div className="flex justify-between flex-wrap gap-2 mb-2">
                    <h3 className="font-bold text-text-primary font-heading tracking-wide">
                      {job.role}
                    </h3>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-accent/10 text-accent border border-accent/20">
                      {job.period}
                    </span>
                  </div>
                  <h4 className="text-sm text-text-secondary font-bold mb-2 uppercase tracking-wide">
                    {job.company}
                  </h4>
                  <p className="text-sm text-text-primary mb-3 font-sans">
                    {job.description}
                  </p>
                  <ul className="list-disc list-inside text-xs text-text-secondary space-y-1 font-code">
                    {job.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projetos */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-accent font-bold font-heading text-xl">
              <FaRocket /> <span>Projetos em Destaque</span>
            </div>
            <div className="space-y-4">
              {cvData.projects.map((project, index) => (
                <div
                  key={index}
                  className="
                  p-5 rounded-lg transition-all
                  bg-bg-primary border border-accent/10 hover:border-accent/40
                "
                >
                  <div className="flex justify-between flex-wrap gap-2 mb-2">
                    <h3 className="font-bold text-text-primary font-heading tracking-wide">
                      {project.name}
                    </h3>
                  </div>
                  <h4 className="text-xs text-accent font-mono mb-2 tracking-wide break-words">
                    {project.stack}
                  </h4>
                  <p className="text-sm text-text-primary mb-3 font-sans">
                    {project.description}
                  </p>
                  <ul className="list-disc list-inside text-xs text-text-secondary space-y-1 font-code">
                    {project.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Formação */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-accent font-bold font-heading text-xl">
              <FaGraduationCap /> <span>Formação</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {cvData.education.map((edu, index) => (
                <div
                  key={index}
                  className="flex flex-col p-3 border-l-2 border-accent/30 hover:border-accent transition-colors pl-4"
                >
                  <span className="font-bold text-text-primary text-sm">
                    {edu.course}
                  </span>
                  <span className="text-xs text-text-secondary font-sans">
                    {edu.school}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-accent mt-1 font-mono">
                    {edu.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Skills (Tags) */}
          <section>
            <div className="flex items-center gap-2 mb-3 text-accent font-bold font-heading text-xl">
              <FaCode /> <span>Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cvData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="
                  px-3 py-1 rounded-full text-xs font-bold border transition-transform hover:scale-105 cursor-default
                  bg-bg-primary border-accent/30 text-text-primary
                "
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* --- 3. RODAPÉ --- */}
        <div className="p-4 bg-bg-primary/50 border-t border-accent/10 flex justify-between items-center backdrop-blur-sm">
          {/* Social Links */}
          <div className="flex gap-4 text-2xl text-text-secondary">
            <a
              href="https://linkedin.com/in/mariaclararodrigues3113"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent hover:scale-110 transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/mulinco"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent hover:scale-110 transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:mulincorod@gmail.com"
              className="hover:text-accent hover:scale-110 transition-all"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* BOTÃO PADRONIZADO (Estilo Action Button) */}
          <a
            href="/cv.pdf"
            download="Curriculo_Maria_Rodrigues.pdf"
            className="
              flex items-center gap-2 px-6 py-3 font-bold rounded-sm text-sm tracking-wider uppercase transition-all duration-300
              
              /* Cores */
              bg-accent text-white hover:bg-accent-hover
              
              /* Forma Kawaii */
              kawaii:rounded-full
              
              /* Sombra & Interação */
              shadow-lg hover:shadow-[0_0_15px_rgba(210,4,45,0.4)]
              kawaii:shadow-[0_4px_10px_rgba(244,114,182,0.4)]
              kawaii:hover:scale-105
            "
          >
            <FaDownload />
            <span className="hidden md:inline">Baixar PDF</span>
            <span className="md:hidden">Baixar</span>
          </a>
        </div>
      </div>
    </div>
  );
};
