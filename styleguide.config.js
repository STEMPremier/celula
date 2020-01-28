const path = require('path');
const webpackConfig = require('./webpack.config.js');

module.exports = {
  title: 'Célula Style Guide',
  pagePerSection: true,
  require: [path.join(__dirname, './src/styles/celula.less')],
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
      name: 'Palettes',
      description: 'This is a description about our color palettes.',
      content: 'src/styleguide/palettes.md',
    },
    {
      name: 'Typography',
      description: 'This is a word about our Typography.',
      content: 'src/styleguide/typography.md',
    },
    {
      name: 'Components',
      content: 'src/styleguide/components.md',
      sectionDepth: 1,
      sections: [
        {
          name: 'Atoms',
          components: path.join(__dirname, 'src/components/**/*.jsx'),
          ignore: [
            path.join(__dirname, 'src/components/avatar/*.jsx'),
            path.join(__dirname, 'src/components/badge/*.jsx'),
            path.join(__dirname, 'src/components/chart/**/*.jsx'),
            path.join(__dirname, 'src/components/dialog/**/*.jsx'),
            path.join(__dirname, 'src/components/form-controls/**/*.jsx'),
            path.join(__dirname, 'src/components/nav/*.jsx'),
          ],
        },
        {
          name: 'Molecules',
          sections: [
            {
              name: 'Charts',
              content: 'src/components/chart/chart.md',
              components: path.join(__dirname, 'src/components/chart/**/*.jsx'),
            },
            {
              name: 'Dialogs',
              content: 'src/components/dialog/dialog.md',
              components: path.join(
                __dirname,
                'src/components/dialog/**/*.jsx',
              ),
            },
            {
              name: 'Form Controls',
              content: 'src/components/form-controls/form-controls.md',
              components: path.join(
                __dirname,
                'src/components/form-controls/**/*.jsx',
              ),
            },
          ],
        },
      ],
    },
    {
      name: 'Header',
      description: 'This is a word about our Header.',
      content: 'src/styleguide/header.md',
      components: path.join(__dirname, 'src/components/nav/*.jsx'),
    },
    {
      name: 'Footer',
      description: 'This is a word about our Footer.',
      content: 'src/styleguide/footer.md',
    },
    {
      name: 'Sheets',
      description: 'This is a word about our Sheets.',
      content: 'src/styleguide/sheets.md',
      components: [
        path.join(__dirname, 'src/components/avatar/*.jsx'),
        path.join(__dirname, 'src/components/badge/*.jsx'),
      ],
    },
  ],
};
