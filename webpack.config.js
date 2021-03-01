// webpack.config.js
const path = require("path");
const webpack = require("webpack");

module.exports = {
    //mode: "development",
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        libraryTarget: "umd",
        library: "my-Library",
        chunkFilename: "[name].chunk.js"
    },
    module: {
        rules: [
            // babel编译处理js文件
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        ['@babel/preset-env',
                            {
                                targets:
                                    {
                                        chrome: 41
                                    }
                            }
                        ]
                    ],
                    plugins: ['@babel/transform-runtime']
                }
            },
        ]
    },
    plugins: []
};
