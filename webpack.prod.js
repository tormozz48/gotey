'use strict';

const path = require('path');
const merge = require('lodash/merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const commonConfig = require('./webpack.common');

module.exports = merge(
    {},
    commonConfig,
    {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        'drop_console': true,
                        unsafe: true
                    }
                }
            }),
            new ExtractTextPlugin('[name].min.css'),
            new webpack.EnvironmentPlugin(['NODE_ENV'])
        ]
    }
);
