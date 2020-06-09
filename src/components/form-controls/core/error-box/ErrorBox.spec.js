/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ErrorBox from '.';

describe('<ErrorBox />', () => {
  describe('render()', () => {
    test('render the ErrorBox component', () => {
      const wrapper = shallow(
        <ErrorBox errorMsg="This is an error message." />,
      );

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

/* eslint-enable react/jsx-filename-extension */
