const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '/docs/src'),
  dist: path.join(__dirname, '/docs/dist'),
  root: path.join(__dirname, '/docs'),
}

const getDevServer = (env) => {
  const devServer = {
    publicPath: '/',
    clientLogLevel: 'info',
    compress: true,
    contentBase: PATHS.dist,
    historyApiFallback: true,
    inline: true,
    hot: false,
  }

  return env.prod ? {} : devServer;
}

const getRules = (env) => {
  const commonRules = [
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: 'tsconfig.docs.json'
          }
        }
      ],
      exclude: /node_modules/
    },
    {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: env.prod ? 'dist/[hash:8].[ext]' : '[name].[ext]?[hash:8]',
        },
      }],
    },
  ];

  const productionRules = [
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
        ]
      })
    },
  ];

  const developmentRules = [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader?importLoaders=1&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]',
      ],
    },
  ];

  const extraRules = env.prod ? productionRules : developmentRules;

  return commonRules.concat(extraRules);
};

const getPlugins = (env) => {
  const commonPlugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('manifest'),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      filename: 'index.html',
      inject: 'body',
      title: 'Bloomer | A set of React Stateless Components',
      chunksSortMode: 'dependency',
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }),
  ];

  const productionPlugins = [
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
      comments: false
    }),
    new ExtractTextPlugin('dist/[name].[contenthash:8].css'),
    new CleanWebpackPlugin(['dist'], { root: PATHS.root }),
    new InlineManifestWebpackPlugin({ name: 'webpackManifest' }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"',
      },
    }),
  ];

  const developmentPlugins = [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"',
      },
    }),
  ];

  const extraPlugins = env.prod ? productionPlugins : developmentPlugins;

  return commonPlugins.concat(extraPlugins);
}

const config = env => (
  {
    devtool: env.prod ? 'source-map' : 'inline-source-map',

    context: PATHS.src,

    entry: `${PATHS.src}/app.tsx`,

    output: {
      path: PATHS.root,
      filename: env.prod ? 'dist/[name].[hash:8].js' : 'dist/[name].js',
    },

    module: {
      rules: getRules(env)
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },

    plugins: getPlugins(env),

    devServer: getDevServer(env),

    externals: {
      "react": "React",
      "react-dom": "ReactDOM",
      "highlight.js": "hljs",
    },
  }
);

module.exports = config;