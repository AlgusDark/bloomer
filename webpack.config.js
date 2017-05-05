const path = require('path');
const webpack = require('webpack');

const config = {
	entry: {
		'bulma-react': ['./src/index.ts'],
		'bulma-react.min': ['./src/index.ts']
	},
	output: {
		path: path.resolve(__dirname, 'bundles'),
		filename: '[name].js',
		libraryTarget: 'umd',
		library: 'BulmaReact',
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
		"react": "React",
		"react-dom": "ReactDOM"
	},
};

module.exports = config;