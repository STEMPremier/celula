/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CheckboxGroup from './CheckboxGroup';
import Checkbox from './Checkbox';

describe('<CheckboxGroup />', () => {
  describe('render()', () => {
    test('render the CheckboxGroup component', () => {
      const wrapper = shallow(
        <CheckboxGroup
          label="CheckboxGroup Test Label"
          name="CheckboxGroup Test Name"
        >
          <Checkbox label="Checkbox Test Label" value="Checkbox Value Here" />
        </CheckboxGroup>,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
