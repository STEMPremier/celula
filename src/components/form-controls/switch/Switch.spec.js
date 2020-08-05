/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Switch } from '.';

describe('<Switch />', () => {
  describe('render()', () => {
    test('render the Switch component', () => {
      const wrapper = shallow(
        <Switch
          label="Switch Test Label"
          name="Switch Test Name"
          value="switch value"
        />,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
/* eslint-enable react/jsx-filename-extension */
