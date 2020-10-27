/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { data, columns } from './data';
import Table from '.';

describe('<Table />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(
        <Table
          columns={columns}
          data={data}
          rowFunction={event => console.log(event.target)}
        />,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
/* eslint-enable react/jsx-filename-extension */
