// postcss.config.cjs (CORRECT)
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // FIX: Use the new dedicated package name
    autoprefixer: {},
  },
};