import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { CheckboxGroup, Checkbox } from '.';

describe('<CheckboxGroup />', () => {
  describe('render()', () => {
    test('render the CheckboxGroup component', () => {
      const wrapper = shallow(
        <CheckboxGroup
          label="CheckboxGroup Test Label"
          name="CheckboxGroup Test Name"
          handleChangeGroup={() => {}}
        >
          <Checkbox
            label="Checkbox Test Label 1"
            value="Checkbox Value Here 1"
          />
          <Checkbox
            label="Checkbox Test Label 2"
            value="Checkbox Value Here 2"
          />
        </CheckboxGroup>,
      );

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
