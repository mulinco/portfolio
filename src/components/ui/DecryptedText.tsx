import { useEffect, useState } from 'react';

interface DecryptedTextProps {
  text: string;
  speed?: number; // Velocidade da "digitação/decodificação"
  className?: string;
}

export default function DecryptedText({
  text,
  speed = 90, 
  className = '',
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState('');
  
  // 🧬 DNA puro + alguns caracteres tech para o "glitch"
  const characters = 'ACGTACGTACGTACGTACGTACGTACGTACGT';

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let iteration = 0;

    const generateScramble = (index: number) => {
      // Pega o pedaço que falta do texto e transforma em "lixo" aleatório
      const remainingLength = text.length - index;
      let scramble = '';
      for (let i = 0; i < remainingLength; i++) {
        scramble += characters[Math.floor(Math.random() * characters.length)];
      }
      return scramble;
    };

    interval = setInterval(() => {
      setDisplayText(() => {
        // Se já terminou, limpa e retorna o texto final
        if (iteration >= text.length) {
          clearInterval(interval);
          return text;
        }

        // 1. Parte Decifrada (Correta até o índice atual)
        const decodedPart = text.slice(0, iteration);
        
        // 2. Parte Embaralhada (O resto vira sopa de letrinhas)
        const scrambledPart = generateScramble(iteration);

        iteration += 1; // Avança 1 letra por ciclo

        return decodedPart + scrambledPart;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayText}
    </span>
  );
}