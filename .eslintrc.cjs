module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:import/errors"],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
  },
  rules: {
    eqeqeq: ["error", "always", { null: "ignore" }],
    "import/default": "off",
    "import/extensions": ["error", "never", { json: "always" }],
    "import/first": "error",
    "import/named": "off",
    "import/namespace": "off",
    "import/no-duplicates": "error",
    "import/no-named-as-default-member": "off",
    "import/no-useless-path-segments": "error",
    "no-constant-condition": "off",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": ["error", { vars: "all", args: "none", ignoreRestSiblings: true }],
  },
  settings: {
    "import/external-module-folders": ["node_modules"],
    "import/resolver": {
      typescript: {},
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
  },
};
