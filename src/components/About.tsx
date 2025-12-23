import { Code, Database, Layout, Sparkles } from 'lucide-react';

export const About = () => {
  const skills = [
    { name: 'React', icon: <Layout />, level: 'Avançado' },
    { name: 'Python', icon: <Code />, level: 'Especialista' },
    { name: 'SQL', icon: <Database />, level: 'Intermediário' },
    { name: 'Tailwind', icon: <Sparkles />, level: 'Avançado' },
  ];

  return (
    // Adicionei font-sans no container principal para garantir
    <section className="relative py-20 overflow-hidden bg-bg-primary transition-colors duration-500 font-sans">
      
      {/* --- 1. O EFEITO DE "REVISTA" (ATUALIZADO) --- */}
      <div className="absolute top-10 left-0 w-full overflow-hidden leading-none select-none opacity-[0.03] kawaii:opacity-[0.05] pointer-events-none">
        {/* Adicionei 'kawaii:font-cute kawaii:tracking-tighter'
            E o truque para trocar o texto:
        */}
        <span className="text-[15rem] md:text-[20rem] font-black font-metal kawaii:font-cute kawaii:tracking-tighter text-text-primary whitespace-nowrap uppercase">
           {/* Aparece só no Dark */}
           <span className="kawaii:hidden">DEVELOPER</span>
           {/* Aparece só no Kawaii */}
           <span className="hidden kawaii:inline">CREATIVE</span>
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Texto "Quem sou eu" */}
          <div className="space-y-6">
            {/* Adicionei kawaii:font-cute */}
            <h2 className="text-4xl md:text-5xl font-metal kawaii:font-cute text-accent transition-colors duration-500">
              Quem sou eu?
            </h2>
            
            <div className="font-code text-text-secondary text-lg leading-relaxed space-y-4 transition-colors duration-500">
              <p>
                <span className="text-accent font-bold">Maria Rodrigues.</span> 27 anos. 
                Apaixonada pela intersecção entre lógica complexa e design visual impactante.
              </p>
              <p>
                Enquanto tomo minha Coca-Cola (sagrada), construo aplicações que não apenas funcionam, 
                mas que têm alma. Minha especialidade é pegar problemas caóticos e transformar em 
                arquitetura de dados organizada e interfaces intuitivas.
              </p>
            </div>

            {/* "Assinatura" - Adicionei kawaii:font-cute */}
            <div className="pt-4 border-l-4 border-accent pl-4 italic text-text-muted font-metal kawaii:font-cute text-xl transition-colors duration-500">
              "Code like a goth, design like a kawaii princess."
            </div>
          </div>

          {/* Lado Direito: Grid de Skills */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                // ATENÇÃO AQUI: Mudei rounded-lg para rounded-lg kawaii:rounded-3xl
                // Adicionei também uma sombra suave no modo kawaii
                className="group p-6 border border-accent/20 hover:border-accent bg-bg-secondary hover:-translate-y-1 transition-all duration-500 rounded-lg kawaii:rounded-3xl kawaii:shadow-sm flex flex-col gap-3"
              >
                <div className="text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-bold font-code text-text-primary transition-colors duration-500">{skill.name}</h3>
                {/* Barra de progresso */}
                <div className="w-full bg-bg-primary h-2 mt-auto rounded-full overflow-hidden transition-colors duration-500 border border-accent/10">
                  <div 
                    className="h-full bg-accent w-[80%] rounded-full transition-all duration-1000 group-hover:w-[90%]"
                    // Dica: Se quiser que cada barra tenha um tamanho real, precisaria adicionar isso no objeto 'skills' lá em cima.
                    // Por enquanto deixei fixo em 80% com um efeitozinho no hover.
                   ></div> 
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};