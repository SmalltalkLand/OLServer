const path = require('path');

module.exports = {
  target: 'node',
  entry: {index: './src/index.js'},
  module: {
    rules: [

    ],
  },
  resolve: {
    extensions: [ '.js' ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};