/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import FileUploader from '.';

describe('<FileUploader />', () => {
  describe('render()', () => {
    test('render the FileUploader component', () => {
      const wrapper = shallow(
        <FileUploader label="test label" name="test">
          Children
        </FileUploader>,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
