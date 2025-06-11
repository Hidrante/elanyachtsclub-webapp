/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './data/**/*.{js,ts,jsx,tsx}', './hooks/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { 
      colors: {
        'brand-navy': {
          DEFAULT: '#0F3A5E',
          light: '#1A5080',
          50: '#EBF2F8',
        },
        'brand-gold': {
          DEFAULT: '#C09A6B',
          light: '#D4AF87',
          dark: '#A58457',
        },
        'brand-gray': {
          DEFAULT: '#F8F9FA',
          light: '#FDFEFF',
          text: '#4A5568',
          dark: '#2D3748',
          medium: '#A0AEC0',
          100: '#E2E8F0',
        },
        'brand-ivory': '#E0E1DD',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.525rem',
        'sm': '0.6rem',
        'base': '0.7rem',
        'lg': '0.875rem',
        'xl': '1.05rem',
        '2xl': '1.225rem',
        '3xl': '1.575rem',
        '4xl': '2.1rem',
        '5xl': '2.8rem',
        '6xl': '3.675rem',
        '7xl': '4.9rem',
        '8xl': '6.3rem',
        '9xl': '8.4rem',
      },
    },
  },
  plugins: [],
};