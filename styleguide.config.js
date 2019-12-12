const path = require('path');
const webpackConfig = require('./webpack.config.js');

module.exports = {
  title: 'Célula Style Guide',
  require: [
    path.join(__dirname, './src/styles/celula.less'),
  ],
  webpackConfig: { ...webpackConfig },
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/src/components/**/index.{js, jsx, ts, tsx}',
  ],
  sections: [
    {
      name: 'Typography',
      description: 'This is a word about our Typography.',
      content: 'src/styleguide/content/typography.md',
    },
    {
      name: 'Colors',
      description: 'This is a description about our color pallette.',
      content: 'src/styleguide/content/colors.md',
    },
    {
      name: 'Components',
      content: 'src/styleguide/content/components.md',
      components: path.join(__dirname, 'src/components/**/*.jsx'),
    },
  ],
};
