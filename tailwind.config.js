/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#EDF2F5",
        primary2: "#101415",
        primary2: "#161B1E",
        primary2: "#0B9FDC"
      }
    }
  },
  plugins: []
};
