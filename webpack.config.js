module.exports = {
    entry: './src/index.js',
    output: {
        path: './lib',
        libraryTarget: 'umd',
        filename: 'index.js'
    },
    devtool: 'inline-source-map',
    module: {
        preLoaders: [
            { test: /\.js|jsx$/, exclude: /(src|node_modules)/, loaders: ['babel'] },
            { test: /\.js|jsx$/, include: /(src)/, exclude: /(node_modules)/, loaders: ['isparta'] }
        ],
    }
};