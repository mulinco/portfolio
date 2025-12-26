const links = [
  { name: 'Projetos', href: '#projetos' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contato', href: '#contato' },
];

export const Navigation = ({ mobile, onClick }: { mobile?: boolean; onClick?: () => void }) => {
  return (
    <nav className={`${mobile ? 'flex flex-col gap-6 items-center' : 'hidden md:flex gap-8'}`}>
      {links.map((link) => (
        <a 
          key={link.name} 
          href={link.href}
          onClick={onClick}
          className={`
            uppercase tracking-widest font-code text-sm relative group transition-colors
            ${mobile ? 'text-xl' : 'text-xs'}
            text-goth-text hover:text-goth-mint kawaii:text-pink-700 kawaii:hover:text-pink-400
          `}
        >
          {link.name}
          {!mobile && (
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-goth-mint transition-all duration-300 group-hover:w-full kawaii:bg-pink-400"></span>
          )}
        </a>
      ))}
    </nav>
  );
};