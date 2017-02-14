const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
    publicPath: "build/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!postcss-loader",
          publicPath: ""
        })
      },
      { test: /\.(jpg|png)$/, loader: "file-loader" }
    ]
  },
  plugins: [ new ExtractTextPlugin("style.css") ]
};
