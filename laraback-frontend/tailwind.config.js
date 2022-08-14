module.exports = {
  mode:"jit",
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'project-bg': "url('./assets/projectSample.jpg')",
      }
    },
  },
  plugins: [],
}