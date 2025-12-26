/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      keyframes: {
        'sticker-slap': {
          '0%': { opacity: '0', transform: 'scale(1.5) rotate(0deg)' },
          '60%': { opacity: '1', transform: 'scale(0.95) rotate(-8deg)' },
          '100%': { transform: 'scale(1) rotate(-6deg)' },
        },
        'card-appear': {
             '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
             '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        }
      },
      animation: {
        'sticker-slap': 'sticker-slap 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'card-appear': 'card-appear 0.8s ease-out forwards'
      },
      colors: {
        /* Unificando com as variáveis do seu index.css */
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
        }
      },
      fontFamily: {
        /* A MÁGICA ESTÁ AQUI: */
        /* O Tailwind agora lê as variáveis que o index.css troca automaticamente */
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-code)', 'monospace'],
        
        // Mantive os nomes antigos caso você ainda os use em algum lugar:
        metal: ['UnifrakturMaguntia', 'cursive'], 
        cute: ['"Mochiy Pop One"', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('kawaii', 'body.kawaii &')
    })
  ],
}

