import { Sparkles, Star } from 'lucide-react';

export const HeroBackground = () => (
  <>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none kawaii:hidden"></div>
    <div className="absolute top-20 left-10 text-accent/30 animate-pulse hidden kawaii:block pointer-events-none"><Sparkles size={40} strokeWidth={1} /></div>
    <div className="absolute bottom-40 right-10 text-yellow-400/40 animate-bounce hidden kawaii:block pointer-events-none" style={{ animationDuration: '3s' }}><Star size={30} fill="currentColor" strokeWidth={0} /></div>
  </>
);