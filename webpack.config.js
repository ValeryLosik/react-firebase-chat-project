var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool:'eval-source-map',
	entry:{
		main:[
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		path.resolve(__dirname,'./src/main.js')
		]
	},
	output:{
		path:path.resolve(__dirname,'public'),
		filename:'[name].js',
		publicPath:'/public/'
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module:{
		loaders:[
		{
			test:/\.jsx?$/,
			include:path.resolve(__dirname,'src'),
			loader:'react-hot!babel'
		},{
			test:/\.scss$/,
			include:path.resolve(__dirname,'src'),
			loader:'style!css!sass'
		}]
	}
};