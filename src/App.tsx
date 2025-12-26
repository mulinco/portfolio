import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Projects } from './components/projects/Projects';
import { PetSlider } from './components/pets/PetSlider';

function App() {
  // 1. Criamos o estado que controla se o modo Kawaii está ativo
  const [isKawaii, setIsKawaii] = useState(false);

  // 2. Criamos a função que alterna o tema e aplica a classe no HTML
  const toggleTheme = () => {
    setIsKawaii(!isKawaii);
    // Isso permite que o Tailwind use o modificador 'kawaii:'
    if (!isKawaii) {
      document.documentElement.classList.add('kawaii');
    } else {
      document.documentElement.classList.remove('kawaii');
    }
  };

  return (
    // Adicionamos a classe de transição e o seletor de fundo dinâmico
    <main className="bg-goth-bg min-h-screen text-goth-text font-sans selection:bg-goth-pink selection:text-black transition-colors duration-500 kawaii:bg-pink-50">
      
      {/* 3. Agora passamos as variáveis que o Header estava pedindo */}
      <Header isKawaii={isKawaii} toggleTheme={toggleTheme} />
      
      <Hero />
      <About />
      <Projects />
      <PetSlider isKawaii={isKawaii} />
    </main>
  );
}

export default App;