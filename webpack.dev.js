const path = require('path');

const config = {
  entry: ['./example/app.tsx'],
  output: {
    path: path.resolve(__dirname, 'example'),
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
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'tsconfig.dev.json'
            }
          }
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