'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcPath = path.resolve(__dirname, 'src');
const ouputPath = path.resolve(__dirname, 'www');

module.exports = {
    entry: {
        bundle: [
            path.join(srcPath, './index.js'),
            path.join(srcPath, './index.css')
        ]
    },
    context: srcPath,
    output: {
        path: ouputPath,
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {minimize: true}
                    }]
                })
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-0']
                    }
                }
            }
        ]
    }
};
