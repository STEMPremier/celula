/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { ProductIcon, SecondaryIcon, SystemIcon } from '.';

describe('<ProductIcon />', () => {
  describe('render', () => {
    test('renders the component', () => {
      const wrapper = shallow(<ProductIcon name="music" />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

describe('<SecondaryIcon />', () => {
  describe('render', () => {
    test('renders the component with an icon', () => {
      const wrapper = shallow(<SecondaryIcon name="image" />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders the component with text', () => {
      const wrapper = shallow(<SecondaryIcon text="+1" />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

describe('<SystemIcon />', () => {
  describe('render', () => {
    test('renders the component', () => {
      const wrapper = shallow(<SystemIcon name="share" />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
/* eslint-enable react/jsx-filename-extension */
