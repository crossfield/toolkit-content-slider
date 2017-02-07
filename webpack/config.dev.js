var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/content-slider.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'content-slider.js',
    libraryTarget: 'umd',
    library: 'ContentSlider'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [' ', '.js']
  },
  externals: {
    "react": 'react',
    "react-dom": "react-dom"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}