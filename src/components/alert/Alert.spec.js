import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Alert from '.';

describe('<Alert />', () => {
  describe('render()', () => {
    test('render the Alert component', () => {
      const wrapper = shallow(<Alert type="info" text="alert text" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
