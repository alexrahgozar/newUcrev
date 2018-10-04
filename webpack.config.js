var path = require("path")
// var HtmlWebpackPlugin = require('html-webpack-plugin')

var SRC_DIRC  = path.join(__dirname, '/client/src');
var DIST_DIRC = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIRC}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIRC

  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include : SRC_DIRC,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
            "presets":  [ "@babel/preset-env","@babel/preset-react"]
        }
      }
    ]
  }

}
