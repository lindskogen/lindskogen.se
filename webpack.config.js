var precss = require("precss");
var autoprefixer = require("autoprefixer");

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js",
        publicPath: "build/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css!postcss" },
            { test: /\.(jpg|png)$/, loader: "file" }
        ]
    },
    postcss: function() {
        return [precss, autoprefixer];
    }
};