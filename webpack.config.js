const path = require('path');
const flow = require('lodash.flow');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const MODES = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
  TEST: 'test',
};
const env = process.env.NODE_ENV || MODES.DEVELOPMENT;
const banner = `Copyright 2020 Tallo Inc.,

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU Lesser General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.`;

function generateBaseConfig() {
  let devtool;
  let mode;

  if (env === MODES.PRODUCTION) {
    devtool = 'source-map';
    mode = MODES.PRODUCTION;
  } else {
    devtool = 'cheap-module-eval-source-map';
    mode = MODES.DEVELOPMENT;
  }

  return {
    context: path.resolve(__dirname),
    entry: {
      celula: ['./src/index.js'],
    },
    externals: ['react', 'prop-types'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      library: 'celula',
      libraryTarget: 'umd',
    },
    plugins: [],
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    devtool,
    mode,
  };
}

function applyLoaders(config) {
  const styleLoader =
    env === MODES.PRODUCTION ? MiniCssExtractPlugin.loader : 'style-loader';

  return {
    ...config,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.less$/,
          use: [styleLoader, 'css-loader', 'less-loader'],
        },
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
        },
        {
          test: /\.png$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
    },
  };
}

function applyPlugins(config) {
  let { plugins } = config;

  if (env === MODES.PRODUCTION) {
    plugins = [
      ...plugins,
      new MiniCssExtractPlugin({
        filename: '[name].min.css',
      }),
    ];
  } else {
    plugins = [...plugins];
  }

  return {
    ...config,
    plugins,
  };
}

function applyOptimizations(config) {
  const optimization = {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        parallel: true,
        extractComments: {
          filename: 'LICENSE.txt',
          banner: () => banner,
        },
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          },
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'celula',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  };

  return {
    ...config,
    optimization: env === MODES.PRODUCTION ? optimization : null,
  };
}

const configurate = flow(
  generateBaseConfig,
  applyLoaders,
  applyPlugins,
  applyOptimizations,
);

/* The object that `configurate()` returns may have null or undefined values.
 * I don't know how webpack will react to that, nor do I wish to find out.
 * So this function creates a new object from all the values in the generated
 * one but omits all keys with a null, or undefined value.
 *
 * `a` is the accumulator object; the new object
 * `k` is the key whose value we are checking
 * `v` is the value we are evaluating for the keys inclusion
 */
module.exports = Object.entries(configurate()).reduce(
  (a, [k, v]) => (v == null ? a : { ...a, [k]: v }),
  {},
);
