module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
    publicPath: "build/"
  },
  module: {
    rules: [
      { test: /\.css$/, use: [ "style-loader", "css-loader", "postcss-loader" ] },
      { test: /\.(jpg|png)$/, loader: "file-loader" }
    ]
  }
};
