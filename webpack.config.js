const path = require("path");
const glob = require("glob");

module.exports = {
  entry: {
    "scarlett-math": glob.sync("./src/math/index.ts"),
    "scarlett-core": glob.sync("./src/core/index.ts")
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve("build")
  }
};
