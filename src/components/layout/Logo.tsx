export const Logo = () => {
  return (
    <div className="select-none transition-all duration-300">
      <span
        className="
        text-3xl 
        /* Modo Goth (Padrão): Fonte Gótica Antiga */
        font-['UnifrakturMaguntia'] tracking-wider text-goth-text
        
        /* Modo Kawaii: Fonte Mochiy (Bolha/Pop) */
        kawaii:font-['Mochiy_Pop_One'] kawaii:text-2xl kawaii:tracking-normal kawaii:text-pink-500
      "
      >
        mulinco
        <span className="text-goth-pink kawaii:text-yellow-400">.dev</span>
      </span>
    </div>
  );
};
