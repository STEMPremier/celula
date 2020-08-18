/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Search from '.';

describe('<Search />', () => {
  describe('render()', () => {
    test('render the Search component', () => {
      const wrapper = shallow(<Search label="test label" name="test" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
