import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([
    "dist/**",
    "build/**",
    "node_modules/**",
  ]),
]);
