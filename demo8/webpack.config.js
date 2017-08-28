const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlwebpackPlugin({
            title: 'demo8',
            filename: 'index.html'
        })
    ]
};

module.exports = config;