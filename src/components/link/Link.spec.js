/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Link from '.';

describe('<Link />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(
        <Link
          address="https://app.tallo.com/register"
          text="hyperlink"
          textStyle="lowercase"
          color="blue"
        />,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
/* eslint-enable react/jsx-filename-extension */
