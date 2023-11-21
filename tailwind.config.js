/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#663366",
        primary2: "#990000",
        primary3: "#070707"
      }
    }
  },
  plugins: []
};
