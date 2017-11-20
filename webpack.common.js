'use strict';

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const meta = require('./data/meta');

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
            }//,
            // {
            //     test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
            //     //use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
            //     loader: 'file'
            // }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: '../data/images', to: 'images'}
        ]),
        new ExtractTextPlugin('[name].min.css'),
        new HtmlWebpackPlugin({
            title: meta.title,
            meta: {
                description: meta.description,
                keywords: meta.keywords.join(',')
            },
            cache: true,
            showErrors: true,
            template: path.join(srcPath, 'index.html')
        })
    ]
};
