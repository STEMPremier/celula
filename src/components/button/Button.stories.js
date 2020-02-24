/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { action } from '@storybook/addon-actions';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
};

export const Standard = () => (
  <Button handleClick={action('clicked')}>Standard Button</Button>
);

export const Outline = () => (
  <Button handleClick={action('clicked')} type="outline">
    Outline Button
  </Button>
);

export const Text = () => (
  <Button handleClick={action('clicked')} type="text">
    Text Button
  </Button>
);

/* eslint-enable react/jsx-filename-extension */
/* eslint-enable import/no-extraneous-dependencies */
