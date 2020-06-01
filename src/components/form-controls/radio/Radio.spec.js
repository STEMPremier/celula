/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { RadioGroup, Radio } from '.';

describe('<Radio />', () => {
  describe('render()', () => {
    test('render the RadioGroup and Radio components', () => {
      const wrapper = shallow(
        <RadioGroup
          handleChange={() => {}}
          label="RadioGroup Test Label"
          name="RadioGroup Test Name"
        >
          <Radio label="Radio test label" value="Radio value here" />
        </RadioGroup>,
      );

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
/* eslint-enable react/jsx-filename-extension */
