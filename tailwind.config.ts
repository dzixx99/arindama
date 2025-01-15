import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary:"#1D263A",
        
        background: "#D9D9D9",
        foreground: "#D9D9D9",
      },
    },
  },
  darkMode: "class",
 plugins: [nextui()],
} satisfies Config;
