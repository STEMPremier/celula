/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Table from '.';

describe('<Table />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(
        <Table
          label="This is a label"
          name="Name"
          headings={['Heading 1', 'heading 2']}
          rows={[
            { data: ['row 1 cell 1', 'row 2 cell 2'] },
            { data: ['row 2 cell 1', 'row 2 cell 2'] },
          ]}
        />,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
/* eslint-enable react/jsx-filename-extension */
