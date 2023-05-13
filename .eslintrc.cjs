module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "@typescript-eslint"],
  extends: [
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  ignorePatterns: ["static/**/*", "**/*.d.ts"],
  rules: {},
};
