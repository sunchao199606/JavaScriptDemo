// webpack.config.js
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        main: "./src/scripts/main.js"
    },
    output: {
        publicPath: __dirname + "/dist/",
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery", // npm
            jQuery: 'jquery'
        })
    ]
};