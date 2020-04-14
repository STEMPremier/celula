/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  describe('render()', () => {
    test('render the CheckboxGroup', () => {
      const wrapper = shallow(
        <Checkbox
          label="Checkbox Test Label 1"
          value="Checkbox Value Here 1"
        />,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
