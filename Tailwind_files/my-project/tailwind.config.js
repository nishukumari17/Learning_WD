// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRUCIAL: This array tells Tailwind to scan these files for classes.
  content: [
    "./index.html",             // Scans your root HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all files in src/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}