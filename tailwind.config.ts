import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideLeftRight: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-left-right': 'slideLeftRight 3s ease-in-out infinite',
      },
      boxShadow: {
        'custom-inset': '-3px -3px 0px 0px #0000004D inset',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#5DBE8C",
        secondary: "#CB75BD",
        accent: "#FFEB5C",
      },
      fontFamily: {
        corinthia: ['var(--font-corinthia)'],
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        clash: ['var(--font-clash-display)', 'sans-serif'],
        cabinet: ['var(--font-cabinet-grotesk)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
