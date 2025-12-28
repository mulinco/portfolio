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
      // ✅ 1. ADICIONE AS ANIMAÇÕES AQUI (Logo no começo do extend)
      animation: {
    // Agora definimos explicitamente o tempo aqui!
    'scroll-left': 'scroll-left 40s linear infinite',
    'scroll-left-fast': 'scroll-left 20s linear infinite',
    'scroll-left-slow': 'scroll-left 60s linear infinite',
    
    'scroll-right': 'scroll-right 40s linear infinite',
    'scroll-right-fast': 'scroll-right 20s linear infinite',
    'scroll-right-slow': 'scroll-right 60s linear infinite',
  },
      // ✅ 2. ADICIONE OS KEYFRAMES (Os passos da dança)
      keyframes: {
        'scroll-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }, // Move metade (pq o conteúdo é duplicado)
        },
        'scroll-right': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
      },

      // ... suas cores e o resto que já estava aí ...
      colors: {
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
        },
        goth: {
          text: '#E0E0E0',
          pink: '#D2042D',
          bg: '#0f0505',
          purple: '#520815'
        }
      },
      fontFamily: {
        sans: ['var(--font-body)', 'sans-serif'], 
        heading: ['var(--font-heading)', 'serif'],
        mono: ['var(--font-code)', 'monospace'],
        metal: ['var(--font-special)', 'cursive'],
        hero: ['var(--font-hero)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
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