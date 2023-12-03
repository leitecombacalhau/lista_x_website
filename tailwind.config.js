/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "6xl": ["64px", "88px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        text: "#0B1816",
        background: "#fafcf8",
        primary: "#639ec4",
        secondary: "#9fd0d8",
        accent: "#6cc7d6",
        "light-accent": "#ebf5f8",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        wide: "1440px",
        "mobile-1":"640px", 
        "mobile-2":"430px", 
      },
      backgroundImage: {
        bg1: "url('assets/images/hero.svg')",
        "bg1*": "url('assets/images/hero_final2.svg')",
        bg2: "url('assets/images/text_placer.svg')",
        bg3: "url('assets/images/25abril.png')",
        bg4: "url('assets/images/pdj1.png')",
        bg5: "url('assets/images/pdj.png')",
        bg6: "url('assets/images/voto.png')"
      }
    },
  },
  plugins: [],
};
