/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import LinearLoader from '.';

describe('<LinearLoader />', () => {
  describe('render()', () => {
    test('render the LinearLoader component', () => {
      const wrapper = shallow(<LinearLoader />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
/* eslint-enable react/jsx-filename-extension */
