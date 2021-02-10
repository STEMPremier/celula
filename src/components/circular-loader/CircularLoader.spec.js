import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CircularLoader from '.';

describe('<CircularLoader />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<CircularLoader percentage={65} />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
