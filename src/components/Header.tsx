import { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { ThemeToggle } from './ThemeToggle';
import { ThemeSwitch } from './ThemeSwitch';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: 'Projetos', href: '#projetos' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-goth-bg/90 backdrop-blur-md border-b border-goth-purple/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo Gótica */}
        <div className="text-2xl font-metal text-transparent bg-clip-text bg-gradient-to-r from-goth-pink to-goth-purple cursor-pointer hover:scale-105 transition-transform">
          Maria.dev
        </div>
        <ThemeToggle />
        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8 font-code text-sm">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-goth-text hover:text-goth-mint transition-colors tracking-widest uppercase relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-goth-mint group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          
          <div className="flex gap-4 border-l border-goth-card pl-6 ml-2">
            <a href="LINK_DO_GITHUB" target="_blank" className="text-xl hover:text-goth-purple transition-colors"><FaGithub /></a>
            <a href="LINK_DO_LINKEDIN" target="_blank" className="text-xl hover:text-goth-blue transition-colors"><FaLinkedin /></a>
          </div>
        </nav>

        {/* Botão Mobile (Hambúrguer) */}
        <button className="md:hidden text-2xl text-goth-pink" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Mobile (Abre quando clica) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-goth-card border-b border-goth-purple/30 flex flex-col items-center py-8 gap-6 font-code animate-in slide-in-from-top-5">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xl text-goth-text hover:text-goth-pink"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};