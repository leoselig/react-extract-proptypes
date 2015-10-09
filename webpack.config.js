var path = require('path');

module.exports = {
  module: {
    loaders: [{
      loader: 'babel',
      test: /\.jsx?$/,
      include: [
        path.resolve('./src'),
        path.resolve('./test')
      ]
    }]
  }
};
