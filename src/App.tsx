import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { LifeTimeline } from "./components/LifeTimeline";
import { Projects } from "./components/projects/Projects";
import { PetSlider } from "./components/pets/PetSlider";
import { Footer } from "./components/layout/Footer";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { WelcomeScreen } from "./components/ui/WelcomeScreen";
import { ClickSpark } from "./components/ui/ClickSpark";
import { Iridescence } from "./components/ui/Iridescence";
import TargetCursor from "./components/ui/TargetCursor";

function App() {
  const [isSystemReady, setIsSystemReady] = useState(false);
  const [isKawaii, setIsKawaii] = useState(() => {
    return localStorage.getItem("app-theme") === "kawaii";
  });

  // 🎨 CORES RADICAIS (Teste de Prova)
  const bgColor: [number, number, number] = isKawaii
    ? [1.0, 1.0, 0.8]
    : [0.2, 0.01, 0.02];

  useEffect(() => {
    localStorage.setItem("app-theme", isKawaii ? "kawaii" : "goth");
    document.body.className = isKawaii ? "kawaii" : "goth";
    document.body.style.backgroundColor = "transparent";
  }, [isKawaii]);

  const toggleTheme = () => {
    console.log("Tema mudou! isKawaii agora é:", !isKawaii);
    setIsKawaii(!isKawaii);
  };

  return (
    <main
      className={`min-h-screen text-goth-text font-sans transition-all duration-700 ${isKawaii ? "kawaii" : ""} bg-transparent relative`}
    >
      <TargetCursor isKawaii={isKawaii} />
      {/* O FUNDO ANIMADO */}
      <Iridescence
        key={isKawaii ? "kawaii-v3" : "goth-blood-v1"}
        color={bgColor}
        speed={isKawaii ? 0.3 : 0.8}
        amplitude={isKawaii ? 0.02 : 0.08}
      />

      {isKawaii && <ClickSpark sparkColor="#D86487" />}

      <AnimatePresence mode="wait">
        {!isSystemReady && (
          <WelcomeScreen
            key="welcome"
            isKawaii={isKawaii}
            onEnter={() => setIsSystemReady(true)}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <ScrollProgress />
        <Header isKawaii={isKawaii} toggleTheme={toggleTheme} />

        <div
          className={
            !isSystemReady
              ? "opacity-0"
              : "opacity-100 transition-opacity duration-1000"
          }
        >
          <Hero isStarted={isSystemReady} />
          <About isKawaii={isKawaii} isStarted={isSystemReady} />
          <LifeTimeline isKawaii={isKawaii} isStarted={isSystemReady} />
          <Projects isStarted={isSystemReady} />
          <PetSlider isKawaii={isKawaii} isStarted={isSystemReady} />
          <Footer isKawaii={isKawaii} />
        </div>
      </div>
    </main>
  );
}

export default App;
