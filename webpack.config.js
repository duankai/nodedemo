const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry:[
    './client/index'
  ],

  output:{
    path: path.join(__dirname, './dist'),
    filename: bundle.js,
    publicPath:'/static'
  },

  module: {
    loaders:[
      {
        test:/.jsx?$/,
        loaders:['babel?preset[]=react, presets[]=es2015'],
        exclude:/node_modules/,
      },
      {
        test:/.scss$/,
        loaders:['style','css'],
        include:path.join(__dirname, './client/style'),
      }
    ]
  },

  resolve:{
    extensions:['','js']
  }

}
