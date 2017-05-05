const path = require('path');
const webpack = require('webpack');

const config = {
	entry: {
		'bulma-jsx': ['./src/index.ts'],
		'bulma-jsx.min': ['./src/index.ts']
	},
	output: {
		path: path.resolve(__dirname, 'bundles'),
		filename: '[name].js',
		libraryTarget: 'umd',
		library: 'BulmaJSX',
		umdNamedDefine: true
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	devtool: 'source-map',
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			include: /\.min\.js$/,
		}),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					'awesome-typescript-loader'
				],
				exclude: /node_modules/
			},
		]
	},
	externals: {
		react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
        umd: 'react',
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
        umd: 'react-dom',
      },
	},
};

module.exports = config;