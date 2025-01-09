import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config} */
const config = {
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,jsx}"],
    },
    {
      files: ["**/*.js"],
      languageOptions: {
        sourceType: "commonjs",
      },
    },
  ],
  languageOptions: {
    globals: globals.browser,
  },
  plugins: {
    react: pluginReact,
  },
  extends: [
    "eslint:recommended", // Вместо pluginJs.configs.recommended
    "plugin:react/recommended", // Вместо pluginReact.configs.flat.recommended
  ],
};

export default config;
