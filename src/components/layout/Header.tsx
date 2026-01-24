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
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const links = [
    { name: 'PROJETOS', href: '#projetos' }, 
    { name: 'SKILLS', href: '#skills' },       
    { name: 'CONTATO', href: '#contato' },    
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 border-b ${
      isKawaii 
        ? 'bg-white/10 border-pink-200/30' 
        : 'bg-black/10 border-accent/10'
    } backdrop-blur-md`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative z-50">
        
        {/* Logo */}
        <MagneticWrapper>
          <a href="#" className="cursor-target hover:opacity-80 transition-opacity">
            <Logo />
          </a>
        </MagneticWrapper>

        {/* Container da Direita (Links, Sociais, Botões) */}
        <div className="flex items-center gap-4 md:gap-6">
          
          {/* Navegação Desktop */}
          <div className="cursor-target hidden md:block">
            <Navigation links={links} />
          </div>

          {/* Redes Sociais Desktop */}
          <div className="cursor-target hidden md:block">
            <SocialLinks />
          </div>

          {/* BOTÃO DE TEMA - Sincronizado com App.tsx */}
          <MagneticWrapper>
            <ThemeToggle isKawaii={isKawaii} toggleTheme={toggleTheme} />
          </MagneticWrapper>
          
          {/* Botão Hamburger (Mobile) */}
          <button 
            className={`cursor-target md:hidden text-2xl transition-colors focus:outline-none ml-2 relative z-50 ${
              isKawaii ? 'text-pink-500' : 'text-accent'
            }`}
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
        transition-transform duration-500 ease-in-out md:hidden h-dvh w-screen pt-20
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        ${isKawaii ? 'bg-pink-50/95' : 'bg-black/95'}
      `}>
        
        <nav className="flex flex-col items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`cursor-target text-3xl font-bold tracking-widest transition-colors ${
                isKawaii 
                  ? 'text-pink-600 hover:text-pink-400' 
                  : 'text-text-primary hover:text-accent'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="cursor-target scale-125 mt-4">
          <SocialLinks />
        </div>
      </div>
    </header>
  );
};