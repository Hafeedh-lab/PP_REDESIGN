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
        // NOTE: "teal" token keys now hold the brand BLUE palette (cobalt + sky).
        // Key names kept stable so existing bg-teal / text-teal classes auto-update.
        'teal': {
          DEFAULT: '#0349AA', // brand cobalt (primary)
          light: '#39B4FA',   // brand sky (bright accent)
          dark: '#023A87',    // darker cobalt (hover/depth)
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
          DEFAULT: '#0F2133', // logo deepest navy
          light: '#1C3B5C',   // logo mid-navy
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
