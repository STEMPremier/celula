import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from '.';

describe('<Button />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Button handleClick={() => {}}>click me</Button>);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
