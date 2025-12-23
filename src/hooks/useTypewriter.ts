import { useState, useEffect } from 'react';

export const useTypewriter = (textToType: string) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseEnd = 2000;
    const pauseStart = 500;

    if (!isDeleting && text === textToType) {
      timer = setTimeout(() => setIsDeleting(true), pauseEnd);
    } else if (isDeleting && text === '') {
      timer = setTimeout(() => setIsDeleting(false), pauseStart);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setText(current => {
          if (isDeleting) return textToType.substring(0, current.length - 1);
          return textToType.substring(0, current.length + 1);
        });
      }, speed);
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, textToType]);

  return text;
};