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
      
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}