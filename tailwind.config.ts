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
    },
  },
  plugins: [],
};
export default config;
