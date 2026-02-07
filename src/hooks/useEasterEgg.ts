import type { ReactNode } from "react";
import { useState } from "react";
import {
  Telescope,
  Dna,
  Heart,
  Sparkles,
  Gamepad2,
  MessageCircle,
  SpellCheck,
} from "lucide-react";

export const useEasterEgg = () => {
  const [fact, setFact] = useState<string | null>(null);
  const [currentIcon, setCurrentIcon] = useState<ReactNode>(null);

  const curiosities = [
    {
      text: "Fui mediadora no Planetário: sei contar a história do universo.",
      icon: Telescope,
    },
    {
      text: "Bioinfo background: Analisava DNA antes de analisar bugs.",
      icon: Dna,
    },
    {
      text: "Meus 'Tech Leads' são a Vênus e o Júpiter (meus dogs).",
      icon: Heart,
    },
    {
      text: "Botafoguense: Resiliência emocional para qualquer deploy na sexta.",
      icon: Sparkles,
    },
    { text: "LoL, The Sims e sofrendo pra zerar Silksong.", icon: Gamepad2 },
    {
      text: "Extensão Árvore da Vida: Storytelling é minha segunda língua.",
      icon: MessageCircle,
    },
    {
      text: "Soletrando! Ganhei medalha de ouro no campeonato de soletração.",
      icon: SpellCheck,
    },
  ];

  const triggerSecret = () => {
    if (fact) {
      setFact(null);
      return;
    }
    // Limpa timeout antigo se existir (acesso global window simples)
    if ((window as any).secretTimeout)
      clearTimeout((window as any).secretTimeout);

    const random = curiosities[Math.floor(Math.random() * curiosities.length)];
    setFact(random.text);
    // Renderiza o componente do ícone
    setCurrentIcon(random.icon({ size: 32 }));

    (window as any).secretTimeout = setTimeout(() => setFact(null), 8000);
  };

  return { fact, currentIcon, triggerSecret };
};
