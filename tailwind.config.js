module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          padding: "0 60px",
          "@screen sm": {
            maxWidth: "100%",
            padding: "0 60px",
          },
          "@screen md": {
            maxWidth: "100%",
            padding: "0 60px",
          },
          "@screen lg": {
            maxWidth: "100%",
            padding: "0 60px",
          },
          "@screen xl": {
            maxWidth: "100%",
            padding: "0 60px",
          },
        },
      });
    },
  ],
}
