import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { LifeTimeline } from './components/LifeTimeline';
import { Projects } from './components/projects/Projects';
import { PetSlider } from './components/pets/PetSlider';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { WelcomeScreen } from './components/ui/WelcomeScreen';

function App() {
  // 1. Verifica se já entrou na sessão para evitar repetir a intro
  const [isSystemReady, setIsSystemReady] = useState(false);


  const [isKawaii, setIsKawaii] = useState(() => {
    const savedTheme = localStorage.getItem('app-theme');
    return savedTheme === 'kawaii';
  });

  // 2. Controla o bloqueio do scroll enquanto a WelcomeScreen está ativa
  useEffect(() => {
    if (!isSystemReady) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSystemReady]);

  const handleEnterSystem = () => {
    sessionStorage.setItem('hasSeenIntro', 'true');
    setIsSystemReady(true);
  };

  const toggleTheme = () => {
    setIsKawaii(!isKawaii);
  };

  return (
    <main className="bg-goth-bg min-h-screen text-goth-text font-sans selection:bg-goth-pink selection:text-black transition-colors duration-500 kawaii:bg-pink-50">
      
      {/* 3. Gerenciamento da WelcomeScreen com saída suave */}
      <AnimatePresence mode="wait">
        {!isSystemReady && (
          <WelcomeScreen 
            key="welcome"
            isKawaii={isKawaii} 
            onEnter={handleEnterSystem} 
          />
        )}
      </AnimatePresence>

      <ScrollProgress />
      <Header isKawaii={isKawaii} toggleTheme={toggleTheme} />
      
      {/* 4. Seções principais com gatilho de animação isStarted */}
      <Hero isStarted={isSystemReady} />
      
      <section id="skills" className="scroll-mt-28">
        <About isKawaii={isKawaii} isStarted={isSystemReady} />
      </section>

      <section className="container mx-auto px-4 py-10">
         <LifeTimeline isKawaii={isKawaii} isStarted={isSystemReady} />
      </section>
      
      <section id="projetos" className="scroll-mt-28">
        <Projects isStarted={isSystemReady} />
      </section>
      
      <PetSlider isKawaii={isKawaii} isStarted={isSystemReady} />
      
      <section id="contato" className="scroll-mt-28">
        <Footer />
      </section>
      
    </main>
  );
}

export default App;