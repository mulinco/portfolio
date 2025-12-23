// src/components/SpaceStickerCard.tsx
import { useState, useEffect } from 'react';

// Se quiser usar imagens locais, importe elas aqui:
// import myPhoto from '../assets/foto-light.png'; 

interface SpaceStickerCardProps {
  photoUrl?: string; // URL da sua foto (opcional, tem default)
  bgUrl?: string;    // URL do fundo de galáxia (opcional, tem default)
}

export const SpaceStickerCard = ({ 
  photoUrl = "/foto-light.png", // Sua foto padrão (da pasta public)
  bgUrl = "https://i.pinimg.com/originals/0f/9b/5f/0f9b5f619753539bd0772bc7132b3357.jpg" // Fundo padrão
}: SpaceStickerCardProps) => {
  
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    // A mágica do delay: espera 800ms para "colar" a foto
    const timer = setTimeout(() => {
      setShowPhoto(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    // O container do Card
    <div 
      className="relative w-72 h-96 md:w-[24rem] md:h-[32rem] rounded-2xl shadow-2xl overflow-hidden animate-card-appear border-4 border-gray-900 group"
      style={{ 
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay escuro para melhorar contraste */}
      <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/10"></div>

      {/* Área central onde a foto vai bater */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
          
          {showPhoto && (
            <div className="relative animate-sticker-slap">
              <img 
                src={photoUrl} 
                alt="Foto colada" 
                className="w-56 h-72 md:w-64 md:h-80 object-cover object-center rounded-xl border-[6px] border-white shadow-[0_10px_20px_rgba(0,0,0,0.5)] -rotate-6 transform transition-transform hover:scale-105 hover:rotate-0 duration-300"
              />
              
              {/* Brilho de "plástico" por cima da foto */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-50 pointer-events-none rounded-xl"></div>
            </div>
          )}
      </div>

      {/* Detalhes de texto (Opcional) */}
      <div className="absolute bottom-4 left-4 text-white/80 font-code text-xs tracking-widest uppercase opacity-0 animation-delay-1000 animate-fade-in group-hover:opacity-100 transition-opacity">
          Mission: Data Arch
      </div>
    </div>
  );
};