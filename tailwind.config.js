/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(5deg)' },
          '66%': { transform: 'translateY(10px) rotate(-3deg)' }
        },
        'pulse-custom': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-custom': 'pulse-custom 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}