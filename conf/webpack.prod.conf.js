const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


const config = require('./webpack.base.conf');

config.plugins = (config.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_console: true
        },
    }),
    new HtmlWebpackPlugin({
        title: '发现',
        filename: 'index.html',
        template: 'src/index.html'
    }),
]);

module.exports = config;