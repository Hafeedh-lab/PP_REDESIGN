/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Fraunces"', 'Georgia', 'serif'],
        'sans': ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        'teal': {
          DEFAULT: '#0D9488',
          light: '#14B8A6',
          dark: '#0F766E',
        },
        'gold': {
          DEFAULT: '#D4A574',
          dark: '#B8895A',
        },
        'purple': {
          DEFAULT: '#7C3AED',
          dark: '#6D28D9',
        },
        'navy': {
          DEFAULT: '#0F2027',
          light: '#1E3742',
        },
        'cream': '#FAFAF7',
        'ink': {
          DEFAULT: '#0A1518',
          muted: '#475569',
        },
      },
      keyframes: {
        'reveal': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'wa-pulse': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.6)' },
          '50%': { transform: 'scale(1.04)', boxShadow: '0 0 0 12px rgba(37, 211, 102, 0)' },
        },
      },
      animation: {
        'reveal': 'reveal 600ms ease-out forwards',
        'wa-pulse': 'wa-pulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
