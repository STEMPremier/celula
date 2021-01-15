import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Search from '.';

describe('<Search />', () => {
  describe('render()', () => {
    test('render the Search component', () => {
      const wrapper = shallow(
        <Search
          handleSearch={value => console.log(value)}
          label="test label"
          name="test"
        />,
      );

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
