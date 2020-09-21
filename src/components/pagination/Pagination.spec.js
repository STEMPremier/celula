/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Pagination from '.';

describe('<Pagination />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(
        <Pagination data="['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']" />,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
/* eslint-enable react/jsx-filename-extension */
