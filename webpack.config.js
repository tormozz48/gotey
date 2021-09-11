const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const meta = require('./data/meta');

const srcPath = path.resolve(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'www');

module.exports = {
  mode: process.WEBPACK_MODE || 'development',
  entry: path.join(srcPath, './index.js'),
  output: {
    path: outputPath,
    filename: 'index.bundle.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: './data/images', to: 'images'},
        {from: './search'},
      ],
    }),
    new HtmlWebpackPlugin({
      title: meta.title,
      meta: {
        description: meta.description,
        keywords: meta.keywords.join(','),
      },
      cache: true,
      showErrors: true,
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: outputPath,
    },
    liveReload: true,
    compress: true,
    open: true,
    port: 8080,
  },
};
