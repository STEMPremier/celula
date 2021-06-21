import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Chip from './Chip';

describe('Chip />', () => {
  describe('render()', () => {
    test('render the Chip', () => {
      const wrapper = shallow(<Chip label="Label" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
