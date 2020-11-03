module.exports = plop => {
  const currentYear = new Date(Date.now()).getFullYear();

  plop.setHelper('currentYear', () => currentYear);
  plop.setWelcomeMessage('What would you like to generate?');
  plop.setGenerator('component', {
    description: 'All the files and folders for a new React component.',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'What would you like to name the component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path:
          'src/components/{{lowerCase componentName}}/{{properCase componentName}}.jsx',
        templateFile: 'src/generators/templates/component.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{lowerCase componentName}}/{{lowerCase componentName}}.less',
        templateFile: 'src/generators/templates/componentLess.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{lowerCase componentName}}/{{properCase componentName}}.spec.js',
        templateFile: 'src/generators/templates/componentSpec.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{lowerCase componentName}}/{{properCase componentName}}.stories.mdx',
        templateFile: 'src/generators/templates/componentStory.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{lowerCase componentName}}/index.js',
        templateFile: 'src/generators/templates/componentIndex.hbs',
      },
    ],
  });
};
