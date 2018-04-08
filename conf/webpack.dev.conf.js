const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


const config = require('./webpack.base.conf');
config.devServer = {
	hot: true,
    stats: {
        colors: true
    },
    historyApiFallback: true,
    compress: true,
    port: 7003
};

config.plugins = (config.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        title: 'CreditCard DEV',
        filename: 'index.html',
        template: 'src/index.html'
    }),
]);

module.exports = config;