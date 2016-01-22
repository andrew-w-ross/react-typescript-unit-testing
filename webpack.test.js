var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './test/index',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'test.js'
  },
  module:{
	  loaders:[
		  {test:/\.tsx?$/, loader:"awesome-typescript",exclude:"node_modules"}
	  ]
  },
  externals: nodeModules,
  resolve:{
	  extensions:["",".tsx",".ts",".jsx",".js"]
  },
  plugins: [
	new ForkCheckerPlugin(),  
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin('require("source-map-support").install();',
                             { raw: true, entryOnly: true })
  ],
  devtool: 'sourcemap'
}