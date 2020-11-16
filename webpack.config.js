const nodeExternals = require("webpack-node-externals");
const path = require("path");
const { baseUrl, paths } = require("./tsconfig.json").compilerOptions

// generates the alias object from the paths in tsconfig.json
const alias = {}
for (let key in paths) {
  alias[key] = path.resolve(__dirname, path.join(baseUrl, paths[key][0]))
}

module.exports = {
  entry: "./src/app.ts",
  target: "node",
  externals: [nodeExternals()],
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: ["src"],
    extensions: [".ts", ".js"],
    alias
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  }
};
