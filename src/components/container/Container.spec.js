import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Container from '.';

describe('<Container />', () => {
  describe('render()', () => {
    test('render the Container component', () => {
      const wrapper = shallow(
        <Container>
          <span>This is stuff in a container.</span>
        </Container>,
      );

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
