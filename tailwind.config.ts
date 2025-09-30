import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          "50": "#f4fbf2",
          "100": "#e6f6e2",
          "200": "#ceecc6",
          "300": "#a5dc99",
          "400": "#76c365",
          "500": "#4e9f3d",
          "600": "#3f8930",
          "700": "#346c29",
          "800": "#2d5625",
          "900": "#264720",
          "950": "#11260d",
        },
        woodsmoke: {
          "50": "#f6f7f6",
          "100": "#e3e4e3",
          "200": "#c7c9c6",
          "300": "#a3a6a2",
          "400": "#7f827f",
          "500": "#656864",
          "600": "#4f524f",
          "700": "#414441",
          "800": "#373837",
          "900": "#303130",
          "950": "#191a19",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        vietnam: ["var(--font-vietnam)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    hljs: {
      theme: "github-dark",
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwind-highlightjs"), require("tailwindcss-animate")],

  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
} satisfies Config;
