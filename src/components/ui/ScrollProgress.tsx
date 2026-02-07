import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      // Calcula o total que pode ser rolado
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Calcula a posição atual
      const currentScroll = window.scrollY;

      // Transforma em porcentagem (0 a 100)
      const progress = (currentScroll / totalHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[100]">
      <div
        style={{ width: `${scrollProgress}%` }}
        className="
          h-full transition-all duration-100 ease-out
          
          /* --- ESTILO GOTH (Laser/Sangue) --- */
          bg-accent shadow-[0_0_10px_var(--accent)]
          
          /* --- ESTILO KAWAII (Arco-íris Pastel) --- */
          kawaii:bg-gradient-to-r 
          kawaii:from-pink-300 kawaii:via-purple-300 kawaii:to-indigo-300
          kawaii:shadow-none
        "
      />
    </div>
  );
};
