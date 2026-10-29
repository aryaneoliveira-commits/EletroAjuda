/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070d19',
          900: '#0a192f',
          850: '#0e2444',
          800: '#112d56',
          700: '#1b3d73',
          600: '#255095',
        },
        electric: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0284c7',
          600: '#0284c7',
          cyan: '#00f2fe',
          glow: '#4facfe',
        }
      },
      boxShadow: {
        'electric': '0 0 20px -3px rgba(2, 132, 199, 0.35)',
        'electric-lg': '0 0 35px -5px rgba(56, 189, 248, 0.45)',
        'cyan-glow': '0 0 15px rgba(0, 242, 254, 0.4)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
}
