var precss = require("precss");
var autoprefixer = require("autoprefixer");

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js",
        publicPath: __dirname + "/build/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css!postcss" },
            { test: /\.png$/, loader: "file" }
        ]
    },
    postcss: function() {
        return [precss, autoprefixer];
    }
};