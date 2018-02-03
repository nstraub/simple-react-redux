/*
 * Karma configuration
 * Generated on Fri Dec 16 2016 01:54:12 GMT-0300 (Pacific SA Summer Time)
 */
//noinspection ES6ConvertVarToLetConst
var webpackConfig = require('./webpack.config');
webpackConfig.entry = {};

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            './node_modules/phantomjs-polyfill-array-from/array-from-polyfill.js',
            './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
            'tests/index.js'
        ],


        // list of files to exclude
        exclude: [],


        // pre-process matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'tests/index.js': ['webpack']
        },

        webpack: {
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        options: {plugins: [['istanbul', {exclude: ['tests']}]]},
                        enforce: 'post'
                    }
                ]

            }
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
