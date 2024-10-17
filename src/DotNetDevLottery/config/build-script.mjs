import fs from "node:fs/promises";
import process from "node:process";
import { glob } from "tinyglobby";
import esbuild from "esbuild";
import { wasmLoader } from "esbuild-plugin-wasm"
import path from "node:path";

const cwd = process.cwd();

const outDirectory = path.resolve(cwd, "./wwwroot/js/");
const outBaseDirectory = path.resolve(cwd, "./typescript/");

try {
  await fs.access(outDirectory);
  await fs.rm(outDirectory, {
    recursive: true,
    force: true,
  });
} catch (e) {
}
await fs.mkdir(outDirectory, { recursive: true });

const SPLITTING_FILTER_STRING = [
  "MachineAnimation"
];

const allEntryPoints = await glob([
    "./typescript/Components/*.razor.ts",
    "./typescript/Pages/*.razor.ts",
    "./typescript/index.ts",
  ], {
    cwd
  });
const defaultEntryPoints = allEntryPoints
  .filter((entryPoint) =>
    SPLITTING_FILTER_STRING.findIndex((filterString) => entryPoint.includes(filterString)) === -1
  );

const splittingEntryPoints = allEntryPoints
  .filter((entryPoint) =>
    SPLITTING_FILTER_STRING.findIndex((filterString) => entryPoint.includes(filterString)) !== -1
  );

const baseOptions = {
  outdir: outDirectory,
  outbase: outBaseDirectory,
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
const defaultOptions = {
  ...baseOptions,
  entryPoints: defaultEntryPoints,
};
/** @type {import('esbuild').BuildOptions} */
const splittingOptions = {
  ...baseOptions,
  ignoreAnnotations: true,
  splitting: true,
  entryPoints: splittingEntryPoints,
};

await Promise.allSettled([
  esbuild.build(defaultOptions),
  esbuild.build(splittingOptions),
]);
