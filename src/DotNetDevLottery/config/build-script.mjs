import fs from "node:fs/promises";
import process from "node:process";
import { glob } from "tinyglobby";
import esbuild from "esbuild";
import { wasmLoader } from "esbuild-plugin-wasm"
import path from "node:path";

const cwd = process.cwd();

const componentEntryPoints = await glob([
  "./typescript/Components/**/*.r.ts",
], {
  cwd
});
const pageEntryPoints = await glob([
  "./typescript/Pages/**/*.r.ts",
], {
  cwd
});

const baseOptions = {
  bundle: true,
  format: "esm",
  platform: "browser",
  plugins: [wasmLoader({ mode: "deferred" })],
  assetNames: "[dir]/[name]",
  define: {
    "import.meta.env.MODE": "\"production\"",
  },
}

/** @type {import('esbuild').BuildOptions} */
const pageEntryPointOptions = {
  ...baseOptions,
  entryPoints: pageEntryPoints,
  outdir: path.resolve(cwd, "./wwwroot/js/Pages"),
  outbase: path.resolve(cwd, "./typescript/Pages"),
};
/** @type {import('esbuild').BuildOptions} */
const componentEntryPointOptions = {
  ...baseOptions,
  ignoreAnnotations: true,
  splitting: true,
  entryPoints: componentEntryPoints,
  outdir: path.resolve(cwd, "./wwwroot/js/Components"),
  outbase: path.resolve(cwd, "./typescript/Components"),
};

await Promise.allSettled([
  esbuild.build(pageEntryPointOptions),
  esbuild.build(componentEntryPointOptions),
]);
