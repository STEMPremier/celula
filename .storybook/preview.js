import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator(withKnobs);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})
