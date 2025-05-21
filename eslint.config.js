// eslint.config.js
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist/**", "node_modules/**"],
  },

  // TypeScript 推荐规则
  tseslint.configs.recommended,

  // Vue 推荐规则
  pluginVue.configs["flat/essential"],

  {
    rules: {
      // JS
      "no-var": "error",
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

      // TS
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/prefer-ts-expect-error": "error",
      "@typescript-eslint/no-explicit-any": "off",

      // Vue
      "vue/multi-word-component-names": "off",
      "vue/script-setup-uses-vars": "error",
    },
  },

  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
]);
