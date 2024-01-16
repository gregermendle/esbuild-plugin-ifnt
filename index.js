import fs from "node:fs";

function compile(source) {
  return source.replace(/(\s?)(ifn't)\s*?\((.+?)\)/g, "$1if (!($3))");
}

export default {
  name: "ifnt",
  setup(build) {
    build.onLoad({ filter: /\.js$/ }, async (args) => {
      let source = await fs.promises.readFile(args.path, "utf8");
      return { contents: compile(source) };
    });
  },
};
