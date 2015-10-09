var _ = require('lodash');

// Karma configuration
// Generated on Fri Oct 09 2015 13:40:11 GMT+0200 (Mitteleuropäische Sommerzeit)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      'test/runner.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    webpack: _.extend(require('./webpack.config'), {
      devtool: 'inline-source-map'
    }),


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*': ['webpack'],
      'test/**/*': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    plugins: [
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-junit-reporter',
      'karma-webpack',
      'karma-sinon-chai',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-ie-launcher'
    ].map(function(plugin) {
      return require(plugin);
    }),

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
    browsers: ['Chrome', 'Firefox', 'IE'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
