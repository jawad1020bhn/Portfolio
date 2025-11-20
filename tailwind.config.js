/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        primary: '#2dd4bf', // Turquoise
        secondary: '#a78bfa', // Purple
        accent: '#f472b6', // Pink
        dark: '#18181b',
        light: '#fafafa',
        'paper': '#fff1f2', // Very light pink/white
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px rgba(24, 24, 27, 1)',
        'neo-lg': '8px 8px 0px 0px rgba(24, 24, 27, 1)',
        'neo-sm': '2px 2px 0px 0px rgba(24, 24, 27, 1)',
      }
    }
  },
  plugins: [],
}