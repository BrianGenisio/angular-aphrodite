var path = require('path');

module.exports = {
  entry: [
    './src/test'
  ],
  output: {
    path: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [{
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.html$/,
      loader: 'raw'
    }]
  }
}
