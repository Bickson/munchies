import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#FAFAFA',
        'green': '#00703A'
      },
      fontFamily: {
        'sf': ['var(--font-sf)', 'sans-serif'],
      },
      fontWeight: {
        'label': '590'
      },
      boxShadow: {
        'card': '-16px 9px 18px rgba(0, 0, 0, 0.01), -4px 2px 10px rgba(0, 0, 0, 0.01)'
      }
    },
  },
  plugins: [],
};
export default config;
