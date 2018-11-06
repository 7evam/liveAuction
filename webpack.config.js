/**
  @author Jason Seminara <js@ga.co>
  @description GA's Custom webpack config for most React apps
  @since 2018-06-01
*/
const path                     = require('path');
const HtmlWebpackPlugin        = require('html-webpack-plugin');
const ExtractTextPlugin        = require('extract-text-webpack-plugin');
const htmlTemplate             = require('html-webpack-template');
const { webpack_build: build } = require('./package');

// The main entry of your React app.
const entryPoint  = path.resolve(__dirname, build.entry);

// Where should we output?
const OUTPUT_DIR  = path.resolve(__dirname, build.output);

// The title of the page we're outputting
// and the id where we'll attach our react app
// @note this should match whatever's in the `entryPoint`
const htmlConfig = {
  title:      build.title,
  appMountId: build.react_mount_root,
};

/** ************ */

const fontLoaderConfig = {
  name:  'fonts/[name].[ext]',
  limit: 100,
};

// let's bring in local environmental variables
if (!('NODE_ENV' in process.env)) require('dotenv').config();

module.exports = {
  mode:  process.env.NODE_ENV,
  entry: [
    '@babel/polyfill',
    entryPoint,
  ],
  output: {
    path:       OUTPUT_DIR,
    filename:   'js/[name].js',
    publicPath: '/',
  },
  cache:   true,
  devtool: 'inline-source-map',
  stats:   {
    colors:  true,
    reasons: true,
  },
  devServer: {
    proxy: [{
      context: ['/auth', '/api'],
      target:  'http://localhost:3000/',
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      ...htmlConfig,
      xhtml:    true,
      inject:   false,
      favicon:  'favicon.ico',
      template: htmlTemplate,
    }),
    new ExtractTextPlugin('css/[name].css', {
      allChunks: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use:  [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader:  'postcss-loader', // Run post css actions
          options: {
            plugins() { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer'),
              ];
            },
          },
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      },
      {
        test: /\.jsx?$/,
        use:  [{
          loader: 'babel-loader',
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use:  ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:      'css-loader',
        }),
      },
      {
        test: /\.(png|gif|jpg)$/,
        use:  [{
          loader:  'file-loader',
          options: {
            name: 'images/[name].[ext]',
          },
        }],
      },
      {
        test: /\.ico$/,
        use:  [{
          loader:  'file-loader',
          options: {
            name: '/[name].[ext]',
          },
        }],
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'url-loader',
          options: {
            ...fontLoaderConfig,
            mimetype: 'application/font-woff',
          },
        }],
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'url-loader',
          options: {
            ...fontLoaderConfig,
            mimetype: 'application/octet-stream',
          },
        }],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'file-loader',
          options: fontLoaderConfig,
        }],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'url-loader',
          options: {
            ...fontLoaderConfig,
            mimetype: 'mimetype=image/svg+xml',
          },
        }],
      },
    ],
  },
};