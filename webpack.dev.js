'use strict';

const path = require('path');
const merge = require('lodash/merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const outputPath = path.resolve(__dirname, 'www');
const commonConfig = require('./webpack.common');

module.exports = merge(
    {},
    commonConfig,
    {
        devtool: 'eval-source-map',
        devServer: {
            contentBase: outputPath,
            historyApiFallback: true,
            inline: true,
            hot: true
        },
        plugins: [
            new ExtractTextPlugin('[name].min.css'),
            new webpack.HotModuleReplacementPlugin()
        ]
    }
);
