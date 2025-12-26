import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { SocialLinks } from '../ui/SocialLinks'; 
import { ThemeToggle } from '../ThemeToggle'; 

// 1. A INTERFACE DEVE FICAR FORA DA FUNÇÃO
interface HeaderProps {
  isKawaii: boolean;
  toggleTheme: () => void;
}

// 2. ADICIONE AS PROPS NA ASSINATURA DA FUNÇÃO
export const Header = ({ isKawaii, toggleTheme }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: 'Projetos', href: '#projetos' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contato', href: '#contato' },
  ];

return (
    <header className="fixed w-full top-0 z-50 bg-goth-bg/90 backdrop-blur-md border-b border-goth-purple/20 kawaii:bg-pink-100/90">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        
        <div className="flex items-center gap-6">
          <Navigation />
          <div className="hidden md:block">
            <SocialLinks />
          </div>
          <ThemeToggle isKawaii={isKawaii} onToggle={toggleTheme} />
          
          <button className="md:hidden text-2xl text-goth-pink kawaii:text-pink-500" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )};