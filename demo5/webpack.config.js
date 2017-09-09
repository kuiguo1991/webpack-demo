const config = {
    entry: './index.js',
    output: {
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'image/[name]_[hash].[ext]',
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = config;