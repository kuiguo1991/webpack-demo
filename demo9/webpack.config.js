const webpack = require('webpack');

const config = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(true)
        })
    ]
};
module.exports = config;