const links = [
  { name: 'Projetos', href: '#projetos' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contato', href: '#contato' },
];

interface LinkItem {
  name: string;
  href: string;
}

interface NavigationProps {
  links: LinkItem[]; // Recebe a lista do Header
}

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav className="flex items-center gap-6">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-goth-text font-medium hover:text-goth-pink transition-colors 
                     kawaii:text-gray-700 hover:kawaii:text-pink-500 hover:kawaii:underline hover:kawaii:decoration-wavy"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};