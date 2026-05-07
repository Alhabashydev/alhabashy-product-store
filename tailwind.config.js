/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial']
      },
      colors: {
        ink: {
          950: '#020202',
          900: '#050505',
          850: '#080808'
        }
      },
      boxShadow: {
        softWhite: '0 0 32px rgba(255,255,255,0.08)'
      }
    }
  },
  plugins: []
};
