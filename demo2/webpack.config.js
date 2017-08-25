const config = {
    entry: {
        bundle1: './index1.js',
        bundle2: './index2.js'
    },
    output: {
        filename: '[name].js'
    }
};

module.exports = config;