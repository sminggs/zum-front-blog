module.exports = {
  extends: ["@repo/eslint-config/react.js"],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  }
};
