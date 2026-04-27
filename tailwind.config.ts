import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#101214',
        accent: '#FF7A18',
        accentSoft: '#FF9A4A'
      },
      boxShadow: {
        glow: '0 0 30px rgba(255, 122, 24, 0.25)'
      }
    }
  },
  plugins: []
};

export default config;
