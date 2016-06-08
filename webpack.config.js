var path = require('path');
var webpack = require('webpack');
var root_folder = path.resolve(__dirname)

module.exports = {
  context: root_folder,
  devtool: 'eval',
  entry: [
    './src/client'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  },
  proxy: {
    "*": "http://localhost:9090"
  }
};