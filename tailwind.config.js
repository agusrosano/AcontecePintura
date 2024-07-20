/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#3e4c6e',  // Añadir un nuevo color personalizado
        darkCard: '#424955',
      },
      spacing: {
        '128': '32rem',  // Añadir un nuevo valor de espaciado
      },
      borderRadius: {
        'xl': '1.5rem',  // Añadir un nuevo radio de borde
      },
    },
  },
  plugins: [],
}