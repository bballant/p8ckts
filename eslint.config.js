import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {rules: {
    'arrow-body-style': ['warn', 'as-needed'],
    'prefer-arrow-callback': ['warn', { allowNamedFunctions: false }],
    // requires function declarations like const foo = () =>
    /** 'func-style': ['warn', 'expression'],**/
  }}
];
