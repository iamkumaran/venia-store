/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies, no-console */
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const copyfiles = require('copyfiles');
var glob = require('glob');
const path = require('path');
const multipleHtmlPlugins = require('./htmlWebpackPlugins.cjs');

// Plugin to copy  dist files to EDS location
class CopyFiles {
  // eslint-disable-next-line class-methods-use-this
  apply(compiler) {
    // Copy files only in production mode when running `npm run build`
    // if (compiler.options.mode !== 'production') {
    //   return null;
    // }
    compiler.hooks.done.tap('Copy', () => {
      // copy component files
      copyfiles(
        ['./dist/**/*', './blocks'],
        {
          all: true,
          up: 1,
          exclude: [
            './dist/vendor/**/*',
            './dist/**/*.html',
            './dist/styles/**/*',
            './dist/**/*.hot-update.js',
            './dist/**/*.hot-update.mjs',
            './dist/**/*.hot-update.json',
            './dist/chunks/**/*',
          ],
          verbose: true,
        },
        err => err && console.error(err)
      );
      // copy vendor file
      copyfiles(
        ['./dist/vendor/vendor.js', './scripts'],
        {
          up: 2,
        },
        err => err && console.error(err)
      );
      copyfiles(
        ['./dist/chunks/**/*', './scripts/chunks'],
        {
          up: 2,
        },
        err => err && console.error(err)
      );
      copyfiles(
        ['./dist/styles/styles.css', './styles'],
        {
          up: 2,
        },
        err => err && console.error(err)
      );
    });
  }
}

// Here goes all configuration
module.exports = {
  mode: 'development',
  entry: glob.sync('./react-app/app/*/*.{jsx,tsx}').reduce(function (obj, el) {
    // extract `component name` from directory path
    const compName = path.parse(el).dir.split('/').pop();
    // eslint-disable-next-line no-param-reassign
    obj[compName] = el;
    return obj;
  }, {}),
  devtool: false,
  experiments: {
    outputModule: true,
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].js',
    chunkFilename: './chunks/[name].js',
    publicPath: './scripts/', // to tell webpack to load "chunk" file from this path.
    library: {
      type: 'module',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/, // apply to all JS/JSX files
        exclude: /node_modules/, // exclude all files on node_modules
        loader: 'babel-loader',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css',
      chunkFilename: './chunks/[name].css',
    }),
    ...multipleHtmlPlugins,
    // don't copy files when running `npm run analyze`
    ...[process.env.npm_lifecycle_event !== 'analyze' && new CopyFiles()],
    ...[
      process.env?.WEBPACK_SERVE !== 'true' &&
        new webpack.BannerPlugin({
          banner: opt => {
            // append messages to JS and CSS file
            if (opt.filename.endsWith('.css')) {
              return '/* stylelint-disable */';
            }
            if (opt.filename.endsWith('.js')) {
              return '/* eslint-disable */';
            }
          },
          raw: true,
          stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
        }),
    ],
  ],
  externalsType: 'module',
  externals: [
    // Don't bundle EDS JS files.
    function ({ request }, callback) {
      if (request.includes('/scripts/aem')) {
        // Externalize to a commonjs module using the request path
        return callback(null, '/scripts/aem.js');
      }

      // Continue without externalizing the import
      callback();
    },
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  optimization: {
    // check dev or production mode
    minimize: process.env?.WEBPACK_SERVE !== 'true',
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          compress: {
            drop_console: ['log', 'info', 'warn', 'debug'],
          },
        },
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              calc: true,
              // convertValues: true,
              discardComments: {
                removeAll: true,
              },
              discardDuplicates: true,
              discardEmpty: true,
              mergeRules: true,
              normalizeCharset: true,
              svgo: true,
            },
          ],
        },
      }),
    ],
    chunkIds: 'named',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  devServer: {
    host: 'localhost', // where to run
    // historyApiFallback: true,
    port: 4200, // given port to exec. app
    // open: true, // open new tab
    hot: false, // Enable webpack's Hot Module Replacement
    watchFiles: ['./react-app/**/*'],
    devMiddleware: {
      // publicPath: '/dist/',
      writeToDisk: true,
    },
  },
  watchOptions: {
    aggregateTimeout: 600,
  },
};
