interface NavigationProps {
  links: { name: string; href: string }[];
}

export const Navigation = ({ links }: NavigationProps) => {
  const safeLinks = links || []; 

  return (
    <nav className="flex items-center gap-8">
      {safeLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="
            relative group py-1
            /* --- BASE / GOTH (Tipografia Limpa) --- */
            text-base font-medium font-sans tracking-wide text-goth-text
            transition-colors duration-300
            hover:text-accent 

            /* --- MODO KAWAII (Tipografia Fofa) --- */
            kawaii:font-['Mochiy_Pop_One'] 
            kawaii:text-xs kawaii:tracking-wide 
            kawaii:text-gray-700
            
            /* Efeito Kawaii: Sublinhado Ondulado */
            hover:kawaii:text-pink-500 
            hover:kawaii:underline hover:kawaii:decoration-wavy hover:kawaii:underline-offset-4 hover:kawaii:decoration-2
          "
        >
          {link.name}

          {/* --- EFEITO GOTH: A linha que cresce (Sliding Underline) --- */}
          {/* É um span absoluto que começa com largura 0 (w-0) e vai para 100% (w-full) no hover */}
          <span className="
            absolute -bottom-0 left-0 
            w-0 h-[2px] 
            bg-accent 
            transition-all duration-300 ease-out 
            group-hover:w-full
            
            /* Importante: Esconde essa linha reta no modo Kawaii para não conflitar com a ondinha */
            kawaii:hidden
          "></span>
        </a>
      ))}
    </nav>
  );
};