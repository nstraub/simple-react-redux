module.exports = {
    entry: './src/index.js',
    output: {
        path: './lib',
        libraryTarget: 'umd',
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            }
        ]
    }
};