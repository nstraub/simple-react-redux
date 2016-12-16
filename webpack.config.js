var path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        path: './build',
        filename: 'simple-react-redux.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            }
        ]
    }};