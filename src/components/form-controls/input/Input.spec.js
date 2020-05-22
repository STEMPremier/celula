/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// eslint-disable-next-line import/named
import { Input } from '.';

describe('<Input />', () => {
  describe('render()', () => {
    test('render the Input component', () => {
      const wrapper = shallow(
        <Input htmlType="text" label="test label" name="test" />,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
