import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { SocialLinks } from '../ui/SocialLinks'; 
import { ThemeToggle } from '../ThemeToggle'; 

interface HeaderProps {
  isKawaii: boolean;
  toggleTheme: () => void;
}

export const Header = ({ isKawaii, toggleTheme }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // SEUS LINKS CONFIGURADOS AQUI:
  const links = [
    { name: 'PROJETOS', href: '#projetos' }, // Aponta para a seção de projetos
    { name: 'SKILLS', href: '#skills' },       // Aponta para a seção About (sobre mim)
    { name: 'CONTATO', href: '#contato' },    // Sugestão: Leva ao rodapé/footer
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-goth-bg/90 backdrop-blur-md border-b border-goth-purple/20 kawaii:bg-pink-100/90 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo reseta para o topo */}
        <a href="#" className="hover:opacity-80 transition-opacity">
          <Logo />
        </a>
        
        <div className="flex items-center gap-6">
          {/* Menu Desktop */}
          <div className="hidden md:block">
            {/* Passamos a array 'links' para o Navigation */}
            <Navigation links={links} />
          </div>

          <div className="hidden md:block">
            <SocialLinks />
          </div>

          <ThemeToggle isKawaii={isKawaii} onToggle={toggleTheme} />
          
          {/* Botão Mobile */}
          <button 
            className="md:hidden text-2xl text-goth-pink kawaii:text-pink-500 transition-colors" 
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* DICA: Se você tiver um menu mobile (aquele que abre ao clicar no hambúrguer),
         lembre-se de passar os 'links' para ele também aqui embaixo!
      */}
    </header>
  );
};