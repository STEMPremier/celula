/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Select from './Select';

describe('<Select />', () => {
  describe('render()', () => {
    test('render the Select component', () => {
      const wrapper = shallow(
        <Select
          handleChange={() => {}}
          label="Select Test Label"
          name="Select Test Name"
          options={[
            {
              name: 'testing options 1',
              value: 1,
            },
            {
              name: 'testing options 2',
              value: 2,
            },
          ]}
        />,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
