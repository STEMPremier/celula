import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
// import centered from '@storybook/addon-centered/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator(withKnobs);
// addDecorator(centered); // Wraps the components in both canvas, and docs

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})
