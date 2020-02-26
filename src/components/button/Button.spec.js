/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from '.';

describe('<Button />', () => {
  describe('render()', () => {
    test('renders the compnent', () => {
      const wrapper = shallow(<Button handleClick={() => {}}>click me</Button>);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
/* eslint-enable react/jsx-filename-extension */
