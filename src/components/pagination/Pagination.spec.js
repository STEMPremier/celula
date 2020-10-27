/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Pagination from '.';

describe('<Pagination />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const canNextPage = true;
      const canPreviousPage = true;

      const wrapper = shallow(
        <Pagination
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          currentPage={1}
          gotoPage={() => console.log('Navigate to a different page.')}
          nextPage={() => console.log('Navigate up a page.')}
          pageCount={10}
          prevPage={() => console.log('Navigate down a page.')}
        />,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
/* eslint-enable react/jsx-filename-extension */
