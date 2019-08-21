const path = require('path');
const flowright = require('lodash.flowright');
const TerserPlugin = require('terser-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || '';

function generateBaseConfig() {
  const config ={
    mode: '',
    devtool: '',
    entry: {
      "tui-kit": './src/index.js",
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {},
    plugins: [],
  };

  return config;
}

function applyEnv(config) {
  const newConfig ={
    ...config,
  };

  if (NODE_ENV === 'production') {
    newConfig = {
      ...config,
      mode: 'production',
      devtool: 'source-map',
      optimization: {
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              chunks: 'initial',
              name: 'javascripts/vendor.js',
              enforce: true,
            },
          },
        },
        minimizer: [
          new TerserPlugin({
            sourceMap: true,
            parallel: true,
          }),
        ],
      },
    };
  } else {
    newConfig = {
      ...config,
      mode: 'development',
      devtool: 'cheap-module-eval-source-map',
    };
  }

  return newConfig;
}

function applyLoaders(config) {
  const newConfig = {
    ...config,
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // keep options here, so you can control them programatically, if needed
        options: {
          presets: [
            ['@babel/preset-env', {
              useBuiltIns: 'usage',
              corejs: 3,
            }],
            '@babel/preset-react'
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
        }
      }],
    },
  };

  return newConfig;
}

const configurate = flowright(
  applyLoaders,
  applyEnv,
  generateBaseConfig,
);

module.exports = configurate();
