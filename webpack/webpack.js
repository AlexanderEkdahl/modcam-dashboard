/* eslint-disable */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(options) {
  var entry, plugins, cssLoaders;

  if (options.prod) {
    entry = [
      path.join(__dirname, '..', 'app/js/index.js')
    ];
    plugins = [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new HtmlWebpackPlugin({
        template: 'app/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        },
        inject: true
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      })
    ];

  } else {
    entry = [
      "webpack-dev-server/client?http://localhost:3000",
      "webpack/hot/only-dev-server",
      path.join(__dirname, '..', 'app/js/index.js')
    ];
    plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: 'app/index.html',
        inject: true
      })
    ]
  }

  return {
    entry: entry,
    output: {
      path: path.resolve(__dirname, '..', 'build'),
      filename: "js/bundle.js"
    },
    module: {
      loaders: [{
          test: /\.js$/,
          loader: 'babel',
          exclude: path.join(__dirname, '..', '/node_modules/')
        }, {
          test: /\.jpe?g$|\.gif$|\.png$/i,
          loader: "url-loader?limit=10000"
        }
      ]
    },
    plugins: plugins,
    target: "web",
    stats: false,
    progress: true
  }
}
