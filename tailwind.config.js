/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#C9A84C',
          600: '#B8960E',
          700: '#92740A',
          800: '#6B5507',
          900: '#453705',
        },
        navy: {
          50:  '#e8eaf6',
          100: '#c5cae9',
          200: '#9fa8da',
          300: '#7986cb',
          400: '#5c6bc0',
          500: '#1a237e',
          600: '#162071',
          700: '#121b64',
          800: '#0e1657',
          900: '#0a1145',
        },
        brand: {
          primary:   '#B05A28',
          secondary: '#C96F3B',
          accent:    '#A94A1A',
          dark:      '#120800',
          light:     '#FFF5F0',
        },
        'primary-rust':       '#B05A28',
        'primary-rust-dark':  '#A94A1A',
        'primary-rust-light': '#C96F3B',
        'primary-rust-glow':  'rgba(176,90,40,0.15)',
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(26,35,126,0.85) 0%, rgba(201,168,76,0.55) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #fde68a 50%, #C9A84C 100%)',
        'navy-gradient': 'linear-gradient(135deg, #1a237e 0%, #0288D1 100%)',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease both',
        'fade-in':    'fadeIn 0.8s ease both',
        'slide-left': 'slideLeft 0.7s ease both',
        'slide-right':'slideRight 0.7s ease both',
        'float':      'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:    { '0%': { opacity: 0, transform: 'translateY(30px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:    { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideLeft: { '0%': { opacity: 0, transform: 'translateX(-40px)' }, '100%': { opacity: 1, transform: 'translateX(0)' } },
        slideRight:{ '0%': { opacity: 0, transform: 'translateX(40px)' }, '100%': { opacity: 1, transform: 'translateX(0)' } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
      screens: {
        xs: '480px',
      },
      boxShadow: {
        'gold':    '0 4px 24px rgba(201,168,76,0.3)',
        'navy':    '0 4px 24px rgba(26,35,126,0.3)',
        'card':    '0 8px 40px rgba(0,0,0,0.12)',
        'card-lg': '0 20px 60px rgba(0,0,0,0.18)',
      },
    },
  },
  plugins: [],
}
