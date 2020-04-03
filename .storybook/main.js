const path = require('path');

const ceConfig = require('../webpack.config.js');

module.exports = {
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-a11y/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  stories: ['../src/**/**/*.stories.(jsx|mdx)'],
  webpackFinal: async config => {
    const rule = config.module.rules.find(r =>
      // it can be another rule with file loader
      // we should get only svg related
      r.test && r.test.toString().includes('svg') &&
      // file-loader might be resolved to js file path so "endsWith" is not reliable enough
      r.loader && r.loader.includes('file-loader')
    );
    rule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          ...ceConfig.module.rules,
        ],
      },
    };
  },
};
