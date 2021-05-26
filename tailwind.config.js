module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "85v": "85vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      backgroundImage: theme => ({
        "hero-pattern":
          "linear-gradient(to left, rgba(54, 209, 220, 0.6) , rgba(91, 134, 229, 0.6)), url('/images/hero_image.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      width: ["group-hover"],
    },
  },
  plugins: [],
};
