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
