/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    darkMode: 'class',
    extend: {
      colors: {
        ink: '#111827',
        // sea: '#3b82f6',
        wolf: '#6b7280',
        ginger: '#f97316',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
