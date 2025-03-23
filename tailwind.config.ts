import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  /* 
  .black: rgb(18, 18, 18); // for body styles
   .white: rgb(255, 255, 255);  // text white
  .dark-gray: rgb(23, 23, 23); // for hover and input,placeholder background
  .medium-gray: rgb(41, 41, 41); // for border color
    .light-gray: rgb(128, 128, 128); // for text color 
  .primary-500: #fca311; // done
  .primary-100: hsl(37, 100%, 43%); // done
  .green: rgb(3, 226, 107); // done
 */
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#fca311",
          100: "hsl(37, 100%, 43%)",
        },
        hovered: "rgb(23, 23, 23)",
        // text: {
        // },
        white: "rgb(255, 255, 255)",
        "light-gray": "rgb(128, 128, 128)",
        "active-green": "rgb(3, 226, 107)",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translate3d(0, 100%, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(50px) translateX(0)", opacity: "0" },
          "100%": { transform: "translateY(25%) translateX(0)", opacity: "1" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out",
        "slide-right": "slideRight 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
