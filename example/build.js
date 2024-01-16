import * as esbuild from "esbuild";

import ifntPlugin from "../index.js";

await esbuild.build({
  entryPoints: ["./example/index.js"],
  bundle: true,
  outfile: "./example/out.js",
  plugins: [ifntPlugin],
});

await import("./out.js")
