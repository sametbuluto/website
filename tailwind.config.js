/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        script: ['Great Vibes', 'cursive'],
      },
      colors: {
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        romantic: {
          100: '#FCE7F3', // Pembe pastel
          200: '#FAF5F0', // Krem
          300: '#EED6C4', // Açık kahve
          400: '#D9A7B0', // Soft rose
          500: '#8E6E72', // Hafif koyu romantik ton
          900: '#5e4044', // Darker text
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'blob': 'blob 7s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'music-bar': 'music-bar 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'music-bar': {
          '0%, 100%': { height: '4px' },
          '50%': { height: '100%' },
        }
      }
    },
  },
  plugins: [],
}
