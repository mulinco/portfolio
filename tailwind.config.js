/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Habilita a troca de classe manual (para nosso toggle funcionar)
  darkMode: 'class', 
  theme: {
    extend: {
      keyframes: {
        'sticker-slap': {
          '0%': { 
            opacity: '0', 
            transform: 'scale(1.5) rotate(0deg)' // Começa grande e reto
          },
          '60%': { 
            opacity: '1', 
            transform: 'scale(0.95) rotate(-8deg)' // "Bate" na superfície e comprime um pouco
          },
          '100%': { 
            transform: 'scale(1) rotate(-6deg)' // Assenta na posição final
          },
        },
        'card-appear': {
             '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
             '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        }
      },
      animation: {
        'sticker-slap': 'sticker-slap 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards', // O cubic-bezier dá o efeito de "pulo"
        'card-appear': 'card-appear 0.8s ease-out forwards'
      },
      colors: {
        // Cores SEMÂNTICAS (mudam conforme o tema)
        bg: {
          DEFAULT: 'var(--color-bg)',      // Fundo principal
          card: 'var(--color-card)',       // Fundo dos cards/elementos
        },
        text: {
          main: 'var(--color-text-main)',  // Texto principal
          muted: 'var(--color-text-muted)', // Texto secundário
        },
        accent: {
          DEFAULT: 'var(--color-accent)',  // A cor de destaque principal
          secondary: 'var(--color-accent-secondary)',
        }
      },
      fontFamily: {
        // Mantivemos suas fontes e adicionei uma 'cute' pro modo Kawaii
        metal: ['UnifrakturMaguntia', 'cursive'], 
        code: ['Space Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
        cute: ['"Mochiy Pop One"', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      // Cria a variante 'kawaii:' que ativa quando a classe .kawaii está no body
      addVariant('kawaii', 'body.kawaii &')
    })
  ],
}