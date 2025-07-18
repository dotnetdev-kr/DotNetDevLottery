import fs from "node:fs/promises";
import process from "node:process";
import { glob } from "tinyglobby";
import esbuild from "esbuild";
import { wasmLoader } from "esbuild-plugin-wasm"
import path from "node:path";

const cwd = process.cwd();

const indexEntryPoint = path.resolve(cwd, "./typescript/index.ts");

const componentEntryPoints = await glob([
  "./typescript/Components/**/*.razor.ts",
], {
  cwd
});
const pageEntryPoints = await glob([
  "./typescript/Pages/**/*.razor.ts",
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
  outdir: path.resolve(cwd, "./Pages"),
  outbase: path.resolve(cwd, "./typescript/Pages"),
};
/** @type {import('esbuild').BuildOptions} */
const componentEntryPointOptions = {
  ...baseOptions,
  ignoreAnnotations: true,
  splitting: true,
  entryPoints: componentEntryPoints,
  outdir: path.resolve(cwd, "./Components"),
  outbase: path.resolve(cwd, "./typescript/Components"),
};
const indexOptions = {
  ...baseOptions,
  entryPoints: [indexEntryPoint],
  outdir: path.resolve(cwd, "./wwwroot/js"),
};

await Promise.allSettled([
  esbuild.build(indexOptions),
  esbuild.build(pageEntryPointOptions),
  esbuild.build(componentEntryPointOptions),
]);
