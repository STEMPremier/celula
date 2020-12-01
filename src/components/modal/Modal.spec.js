/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Modal from '.';

describe('<Modal />', () => {
  describe('render()', () => {
    test('render the Modal component', () => {
      const wrapper = shallow(
        <Modal title="Test Modal" trigglerLabel="Click">
          <p>Modal Contents.</p>
        </Modal>,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
/* eslint-enable react/jsx-filename-extension */
