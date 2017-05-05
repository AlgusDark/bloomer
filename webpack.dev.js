const path = require('path');

const config = {
  entry: ['./example/app.tsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'awesome-typescript-loader'
        ],
        exclude: /node_modules/
      },
      
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ]
  },
};

module.exports = config;