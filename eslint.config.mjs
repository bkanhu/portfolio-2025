import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    ignores: [
      "node_modules/", // Ignore the node_modules directory
      ".next/", // Ignore the .next build directory
      "dist/", // Ignore the dist directory for builds
      ".cache",
      "package-lock.json",
      "public",
      "node_modules",
      "next-env.d.ts",
      "next.config.ts",
      "yarn.lock",
    ],
  },
];

export default eslintConfig;
