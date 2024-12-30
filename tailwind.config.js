/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        starAnimation: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '100%': { transform: 'translateX(-200vw) translateY(200vh)' },
        },
      },
      animation: {
        star: 'starAnimation 10s linear infinite',
      },
    },
  },
  plugins: [],
};