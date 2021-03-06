module.exports = {
    entry: './src/index.js',
    output: {
        libraryTarget: 'umd',
        filename: 'build/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]

    }
};