module.exports = {
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/interface-name-prefix": ["error", "always"],
    "no-unused-vars": ["error"],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true },
    ],
  },
};
