/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx",
    "./index.html"],
  theme: {
    fontFamily: {
      sans: ['inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background_galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 22.88%, #43E7AD 33.94%, #E1DD5D 99.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      },
      screens: {
        'mobile': '500px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
