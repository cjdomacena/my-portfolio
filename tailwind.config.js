module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Philosopher'", 'sans-serif'],
        text: ["'Montserrat'", 'sans-serif'],
      },
      colors: {
        primary: '#0B0B0B',
      },
    },
  },
  plugins: [],
};
