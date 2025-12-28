import { ReactNode, useMemo } from 'react';

interface InfiniteScrollProps {
  items: ReactNode[];
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'left' | 'right';
  className?: string;
}

export default function InfiniteScroll({ 
  items, 
  speed = 'normal', 
  direction = 'left',
  className = '' 
}: InfiniteScrollProps) {
  
  const getAnimationClass = () => {
    const speedSuffix = speed === 'normal' ? '' : `-${speed}`;
    return `animate-scroll-${direction}${speedSuffix}`;
  };

  // ✅ TRUQUE: Repetimos a lista 4 VEZES.
  // Isso garante que a fita seja longa o suficiente para cobrir qualquer tela
  // antes da animação reiniciar.
  const multipliedItems = useMemo(() => {
    return [...items, ...items, ...items, ...items];
  }, [items]);

  return (
    <div className={`relative flex overflow-hidden w-full ${className}`}>
      {/* Gradientes laterais */}
      <div className="absolute top-0 left-0 w-20 h-full z-10 bg-gradient-to-r from-bg-primary to-transparent" />
      <div className="absolute top-0 right-0 w-20 h-full z-10 bg-gradient-to-l from-bg-primary to-transparent" />

      {/* A Faixa que corre */}
      <div className={`flex gap-8 py-4 whitespace-nowrap ${getAnimationClass()}`}>
        {multipliedItems.map((item, idx) => (
          // Usamos idx como key aqui porque os itens são clones
          <div key={idx} className="mx-4 flex items-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}