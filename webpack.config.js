"use strict"
const path = require('path');
const publicDirPath = path.resolve(__dirname, `public`);

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: publicDirPath
    },
    devServer: {
        contentBase: publicDirPath,
        open: true,
        compress: true,
        port: 1337,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                  },
                ],
              },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
};
