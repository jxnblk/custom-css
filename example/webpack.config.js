
module.exports = {
  entry: './example/entry.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader', },
      { test: /\.json/, loader: 'json-loader', },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  }
};

