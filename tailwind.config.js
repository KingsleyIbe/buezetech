// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./styles/**/*.{js,ts,jsx,tsx,css}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-lato)', 'sans-serif'],
          heading: ['var(--font-bree-serif)', 'serif'],
        },
      },
    },
    plugins: [],
  };
  