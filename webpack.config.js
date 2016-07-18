var path = require('path');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    library: 'angular-aphrodite',
    libraryTarget: 'CommonJs',
    path: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [{
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  },
  externals: {
    'angular': 'angular',
    'aphrodite': 'aphrodite'
  }
}
