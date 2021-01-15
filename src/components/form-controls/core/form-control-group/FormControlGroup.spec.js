import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import FormControlGroup from '.';
import { Radio } from '../../radio';
import { Checkbox } from '../../checkbox';

describe('FormControlGroup', () => {
  describe('render()', () => {
    test('render a FCG with Checkboxes', () => {
      const wrapper = shallow(
        <FormControlGroup
          label="FormControlGroup Test Label"
          name="FormControlGroup Test Name"
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
        </FormControlGroup>,
      );

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('render a FCG with Radios', () => {
      const wrapper = shallow(
        <FormControlGroup
          label="FormControlGroup Test Label"
          name="FormControlGroup Test Name"
          handleChangeGroup={() => {}}
        >
          <Radio label="Radio Test Label 1" value="Radio Value Here 1" />
          <Radio label="Radio Test Label 2" value="Radio Value Here 2" />
        </FormControlGroup>,
      );

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
