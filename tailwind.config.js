/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "button-background": "#00CC83",
        "button-hover": "#05947c",
      },
    },
    fontFamily: {
      heading: ["Proxima Nova Bold"],
      subheading: ["Proxima Nova Subheading"],
      display: ["Proxima Nova Regular"],
      black: ["Proxima Nova Black"],
      serif: ["ui-serif", "Georgia"],
      mono: ["Space Mono", "SFMono-Regular"],
      monobold: ["Space Mono Bold"],
      body: ["Proxima Nova Regular"],
    },
  },
  plugins: [],
};
