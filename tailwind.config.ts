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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#3B82F6", // Blue
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#8B5CF6", // Purple
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#ff3e3f", // Cool red
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#6B7280", // Cool Gray
          foreground: "#F3F4F6",
        },
        card: {
          DEFAULT: "#1F2937", // Dark Blue Gray
          foreground: "#F9FAFB",
        },
        border: "#374151",
        input: "#4B5563",
        ring: "#60A5FA",

        // Adicionando as novas cores:
        lightGrayPink: {
          DEFAULT: "#F3EAEA", // Cinza claro com tom de rosa
          foreground: "#5C1A1B", // Rosa escuro
        },
      },
    },
  },
  plugins: [],
};

export default config;
