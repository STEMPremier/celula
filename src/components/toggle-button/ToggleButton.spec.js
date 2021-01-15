import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { ToggleButtonGroup, ToggleButton } from '.';

describe('<ToggleButton', () => {
  describe('render()', () => {
    test('render the ToggleButtonGroup and Toggle components', () => {
      const wrapper = shallow(
        <ToggleButtonGroup
          handleChange={() => {}}
          name="formTest"
          selectedValue="follow"
        >
          <ToggleButton icon="export" value="export" />
          <ToggleButton icon="follow" value="follow" />
          <ToggleButton icon="message" value="message" />
        </ToggleButtonGroup>,
      );

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
