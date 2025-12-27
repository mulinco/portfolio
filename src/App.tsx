import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Projects } from './components/projects/Projects';
import { PetSlider } from './components/pets/PetSlider';
import { Footer } from './components/Footer';

function App() {
  const [isKawaii, setIsKawaii] = useState(false);

  const toggleTheme = () => {
    setIsKawaii(!isKawaii);
    if (!isKawaii) {
      document.documentElement.classList.add('kawaii');
    } else {
      document.documentElement.classList.remove('kawaii');
    }
  };

  return (
    <main className="bg-goth-bg min-h-screen text-goth-text font-sans selection:bg-goth-pink selection:text-black transition-colors duration-500 kawaii:bg-pink-50">
      
      <Header isKawaii={isKawaii} toggleTheme={toggleTheme} />
      
      {/* O Hero geralmente fica no topo, então o link do Logo (href="#") já cuida dele */}
      <Hero />
      
      {/* 1. SKILLS -> Aponta para o componente ABOUT */}
      {/* scroll-mt-28 cria um espaço para o header não cobrir o título */}
      <section id="skills" className="scroll-mt-28">
        <About />
      </section>
      
      {/* 2. PROJETOS -> Aponta para o componente PROJECTS */}
      <section id="projetos" className="scroll-mt-28">
        <Projects />
      </section>
      
      <PetSlider isKawaii={isKawaii} />
      
      {/* 3. CONTATO -> Aponta para o FOOTER */}
      <section id="contato" className="scroll-mt-28">
        <Footer />
      </section>
      
    </main>
  );
}

export default App;