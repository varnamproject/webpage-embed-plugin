module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  plugins: ["vue", "prettier"],
  extends: [
    "@vue/typescript/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: [
    "static/**/*",
    "**/*.d.ts",
  ],
  rules: {
    // TODO: Modify your rules here
  }
}