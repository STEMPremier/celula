const ceConfig = require('../webpack.config.js');

module.exports = {
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  stories: ['../src/components/**/*.stories.js'],
  webpackFinal: async config => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: ceConfig.module.rules,
      },
    };
  },
};
