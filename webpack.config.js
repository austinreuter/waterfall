const path = require('path');
const webpack = require('webpack');
const _ = require('underscore');
const fs = require('fs');

module.exports = {
	entry: './server/app.js',
	output: {
		path: path.resolve(__dirname, 'client'),
		filename: 'main.bundle.js'
	},
	node: {
		fs: 'empty',
		net: 'empty'
	},
	module: {
		loaders: [
      {
      	test: /\.js$/,
      	loader: 'babel-loader',
      	exclude: [/node_modules/],
      	query: {
      		presets: ['es2015']
      	}
      }
		]
	}
}