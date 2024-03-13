// All this three lines bellow are importings
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// Here goes all configuration
module.exports = {
  mode: 'development',
  // entry: './src/app/product-list/index.jsx',
  entry: {
    'product-list': './src/app/product-list/index.jsx',
    'product-detail': './src/app/product-detail/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // apply to all JS/JSX files
        exclude: /node_modules/, // exclude all files on node_modules
        loader: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css',
      // chunkFilename: 'clientlib-chunks/resources/[name].[hash]-ltr.css',
    }),
    new HtmlWebpackPlugin({
      template: 'static/index.html', // create a template to start from
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
		chunkIds: "named",
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: "initial",
					minChunks: 2,
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
					minSize: 0 // This is example is too small to create commons chunks
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
	},
  devServer: {
    host: 'localhost', // where to run
    historyApiFallback: true,
    port: 4200, //given port to exec. app
    open: true, // open new tab
    hot: true, // Enable webpack's Hot Module Replacement
  },
};
