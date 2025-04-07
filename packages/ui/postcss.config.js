// If you want to use other PostCSS plugins, see the following:

module.exports = {
  plugins: {
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
