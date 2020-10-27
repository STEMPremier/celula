const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ceConfig = require('../webpack.config.js');

const plugins = [];

module.exports = {
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-docs',
  ],
  stories: ['../src/**/**/*.stories.@(jsx|mdx)'],
  webpackFinal: async (config, { configType }) => {
    console.log('env of Storybook process', configType);
    const rule = config.module.rules.find(r =>
      // it can be another rule with file loader
      // we should get only svg related
      r.test && r.test.toString().includes('svg') &&
      // file-loader might be resolved to js file path so "endsWith" is not reliable enough
      r.loader && r.loader.includes('file-loader')
    );
    rule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

    if (configType.toLowerCase() === 'production') {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: '[name].min.css',
        }),
      );
    }

    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          ...ceConfig.module.rules,
        ],
      },
      plugins: [
        ...config.plugins,
        ...plugins,
      ],
    };
  },
};
