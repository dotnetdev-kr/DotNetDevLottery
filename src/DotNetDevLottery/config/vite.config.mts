import process from "node:process";
import path from "node:path";
import { defineConfig } from "vite";
import { sync as globSync } from "glob";

const cwd = process.cwd();

export default defineConfig({
  build: {
    outDir: path.resolve(cwd, './wwwroot/build/js'),
    emptyOutDir: true,
    lib: {
      entry: [
        ...globSync(
          path.resolve(
            cwd,
            './typescript/*.ts'
          )
        )
      ],
      formats: ["es"],
    },
  },
})
