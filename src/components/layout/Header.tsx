import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { SocialLinks } from '../ui/SocialLinks'; 
import { ThemeToggle } from '../ThemeToggle'; 
import MagneticWrapper from '../ui/MagneticWrapper';

interface HeaderProps {
  isKawaii: boolean;
  toggleTheme: () => void;
}

export const Header = ({ isKawaii, toggleTheme }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Fecha o menu se a tela for redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Bloqueia o scroll do body quando o menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const links = [
    { name: 'PROJETOS', href: '#projetos' }, 
    { name: 'SKILLS', href: '#skills' },       
    { name: 'CONTATO', href: '#contato' },    
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-goth-bg/90 backdrop-blur-md border-b border-goth-purple/20 kawaii:bg-pink-100/90 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative z-50">
        
        {/* Logo */}
        <MagneticWrapper>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Logo />
          </a>
        </MagneticWrapper>

        {/* Container da Direita (Links, Sociais, Botões) */}
        <div className="flex items-center gap-4 md:gap-6">
          
          {/* Navegação Desktop */}
          <div className="hidden md:block">
            <Navigation links={links} />
          </div>

          {/* Redes Sociais Desktop */}
          <div className="hidden md:block">
            <SocialLinks />
          </div>

          {/* BOTÃO DE TEMA (Sempre visível, desktop e mobile) */}
          {/* Movemos ele para cá e garantimos que não tenha 'hidden' no mobile */}
          <MagneticWrapper>
            <ThemeToggle isKawaii={isKawaii} onToggle={toggleTheme} />
          </MagneticWrapper>
          
          {/* Botão Hamburger / Fechar (Só no mobile) */}
          <button 
            className="md:hidden text-2xl text-goth-pink kawaii:text-pink-500 transition-colors focus:outline-none ml-2 relative z-50"
            onClick={toggleMenu}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE (OVERLAY) */}
      <div className={`
        fixed inset-0 z-40 flex flex-col items-center justify-center gap-10
        bg-goth-bg kawaii:bg-pink-50
        transition-transform duration-300 ease-in-out md:hidden h-dvh w-screen pt-20
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        
        <nav className="flex flex-col items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold font-heading tracking-widest text-goth-text kawaii:text-pink-600 hover:text-goth-pink kawaii:hover:text-pink-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Redes Sociais no Mobile */}
        <div className="scale-125 mt-4">
          <SocialLinks />
        </div>

        {/* Decoração Opcional de Fundo no Menu */}
        <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-goth-pink kawaii:via-pink-400 to-transparent opacity-50"></div>
      </div>
    </header>
  );
};