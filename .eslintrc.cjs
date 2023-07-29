/** @type {import("eslint").Linter.Config} */
const config = {
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  extends: ["@naporin0624/eslint-config"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-restricted-imports": ["error", { patterns: ["src/"] }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.dev.ts",
          "**/*.test.ts",
          "**/*.test.tsx",
          "./*.config.js",
          "./*.config.cjs",
          "./*.config.mjs",
          "**/*.dev.mjs",
          "./*.config.ts",
          "vitest-*",
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["**/__tests__/**/*.[t]s?(x)", "**/?(*.)+(spec|test).[t]s?(x)"],
      extends: ["plugin:jest-dom/recommended", "plugin:testing-library/react"],
      rules: {
        "react/jsx-no-bind": "off",
        "no-restricted-imports": "off",
        "testing-library/no-unnecessary-act": "off",
      },
    },
  ],
};

module.exports = config;
