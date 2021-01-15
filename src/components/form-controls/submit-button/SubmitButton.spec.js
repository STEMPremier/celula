import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SubmitButton from '.';

describe('<SubmitButton />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(
        <SubmitButton handleClick={() => {}}>click me</SubmitButton>,
      );

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
