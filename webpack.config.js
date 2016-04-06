var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],

  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
    //__dirname eferencing the name of the directory that the currently executing script resides in
  },
  
  module: {
    loaders: [
    	{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}  
    	//tells Webpack to run the babel-loader on all extensions that end in .js
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
}
