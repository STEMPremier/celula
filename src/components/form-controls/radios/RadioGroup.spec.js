/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import RadioGroup from './RadioGroup';
import Radio from './Radio';

describe('<RadioGroup />', () => {
  describe('render()', () => {
    test('render the RadioGroup component', () => {
      const wrapper = shallow(
        <RadioGroup
          // eslint-disable-next-line prettier/prettier
          handleChange={() => { }}
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
