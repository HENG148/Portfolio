import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'title': '#c9088c',
        'content': '#0077b5',
        'white-gray': '#f5f5f5',
        'white': '#fff',
        'warning': 'red',
      },
      fontFamily: {
        'main': ['Poppins', 'Open-sans', 'Inter', 'sans-serif'],
        'intro': ['Italic', 'sans-serif']
      },
    },
  },
  plugins: [],
} satisfies Config;
