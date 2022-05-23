module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#541690",
          secondary: "#FF8303",
          accent: "#14274E",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      
      "#FFF8F3",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}