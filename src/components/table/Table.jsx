/* Copyright 2020 Tallo Inc.,
 *
 * This file is part of Celula.
 *
 * Celula is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { useTable, usePagination, useRowSelect } from 'react-table';

import CircularLoader from '../circular-loader';
import Pagination from '../pagination';
import useRowSelectComponent from './useRowSelectComponet';
import { functionOrUndef } from '../../utils/propValidators';

import './table.less';

/**
 * A `Table` displays information in a grid-like format of rows and columns. They organize
 * information in a way that’s easy to scan, so that users can look for patterns and insights.
 * Tables can contain interactive components (such as chips, buttons, or menus), non-interactive
 * elements (such as badges).
 */
/* ### *Mobile Tables*
 * These list can support up to one inline link with additional actions placed within an ellipse
 * menu in stacked tables. The purpose of this is to retain a relatively short row height. These
 * lists are also stacked directly next to one another vertically allowing for no spacing. Text
 * truncation is an option if desired.
 */
const Table = ({
  className,
  clickable,
  clickFn,
  columns,
  data,
  fetchData,
  loading,
  pageCount: serversidePageCount, // for serverside pagination
  pageSize: clientsidePageSize, // for clientside pagination
  selectable,
  selectionHeaderFn,
  selectionFn,
  showTotal,
  style,
  totalItems,
}) => {
  const options = {
    columns,
    data,
    initialState: { pageIndex: 0 },
  };

  // If we have both pageCount and fetchData, we assume server-side pagination.
  if (serversidePageCount && fetchData) {
    options.manualPagination = true;
    options.pageCount = serversidePageCount;
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    options,
    usePagination,
    useRowSelect,
    useRowSelectComponent(selectionHeaderFn, selectionFn),
  );

  // When (if) the prop pageSize changes, tell the Table
  useEffect(() => setPageSize(clientsidePageSize), [clientsidePageSize]);

  // When (if) any one of (prop) fetchData, (the react-table states) pageIndex, or pageSize
  // changes, fetch new data.
  useEffect(() => {
    if (fetchData) fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  const classes = cx(
    'ce-table',
    {
      'ce-table__clickable': clickable,
      'ce-table__selectable': selectable,
    },
    className,
  );

  const navToPage = pg => gotoPage(pg);

  /* This is all the math to make `Showing [x] - [y] of [z]` work
   *
   * First figure out where the page should stop:
   * - Multiply the number of items per page by the page number you are on.
   *   - Keep in mind that you have the pageIndex which is 0-index, and this is all about display,
   *     so you will need to use a 1-indexed page number.
   * Second figure out where the page should start:
   * - Subtract the number of items per page, less one, from where this page stops (the number from
   *   step 1)
   * Last check and see if 'where this page stops' is after the last item, and display the correct
   * `to`.
   * - If the number for where this page stops is larger than the total number of items you have,
   *   display the total number of items rather than the number from step 1
   *
   * E.g. Assume our pageSize is 10, current pageIndex is 2, and we have 27 totalItems:
   *
   * to = 10 * (2 + 1)               // 30
   * displayFrom = 30 - (10 - 1)     // 21
   * displayTo = 27 > 30 ? 30 : 27   // 27
   */
  const [to, setTo] = useState(0);
  const [displayFrom, setDisplayFrom] = useState(0);
  const [displayTo, setDisplayTo] = useState(0);

  useMemo(() => setTo(pageSize * (pageIndex + 1)), [pageIndex, pageSize]);
  useMemo(() => setDisplayFrom(to - (pageSize - 1)), [to, pageSize]);
  // eslint-disable-next-line prettier/prettier
  useMemo(() => setDisplayTo(totalItems > to ? to : totalItems), [to, totalItems]);

  return (
    <>
      <div className={classes} style={style} {...getTableProps()}>
        {/* table header */}
        <div className="ce-table__header" role="rowgroup">
          {headerGroups.map(headerGroup => (
            <div
              key={headerGroup.id}
              className="ce-table__header--group"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map(column => (
                <div
                  key={column.id}
                  className="ce-table__heading"
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* table body */}
        <div className="ce-table__body" {...getTableBodyProps()}>
          {loading && <CircularLoader indeterminate />}
          {page.map(row => {
            prepareRow(row);

            const rowProps = {
              className: `ce-table__row${
                row.isSelected ? ' ce-table__row--selected' : ''
              }`,
              ...row.getRowProps(),
              onClick: clickable
                ? event => clickFn(row.original, event)
                : () => {},
              tabIndex: clickable ? '0' : null,
            };

            return (
              <div key={row.id} {...rowProps}>
                {row.cells.map(cell => (
                  <div
                    key={cell.id}
                    className="ce-table__cell"
                    {...cell.getCellProps()}
                  >
                    <div className="ce-table__cell-heading">
                      {typeof cell.column.Header === 'string'
                        ? `${cell.render('Header')}:`
                        : cell.render('Header')}
                    </div>
                    <div className="ce-table__cell-body">
                      {cell.render('Cell')}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      {showTotal && (
        <span className="ce-table--info">
          {'Showing '}
          <strong>{displayFrom}</strong>
          {' - '}
          <strong>{displayTo}</strong>
          {' of '}
          <strong>{totalItems}</strong>
        </span>
      )}
      {pageCount > 1 && (
        <Pagination
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          currentPage={pageIndex}
          gotoPage={navToPage}
          nextPage={nextPage}
          pageCount={pageCount}
          prevPage={previousPage}
        />
      )}
    </>
  );
};

Table.propTypes = {
  /**
   * A class name, or a string of class names, to add to the `Table`.
   */
  className: PropTypes.string,
  /**
   * Make the rows in the `Table` clickable.
   */
  clickable: PropTypes.bool,
  /**
   * A function to trigger when clicking on a row in the `Table`.
   * The function accepts 2 arguments, `row` and `event`, in that order: `(row, event) => {}`.
   *
   * @param {row} object - The row object for this row of the `Table`.
   * @param {event} object - The event triggered by the click on the row.
   */
  clickFn: PropTypes.func,
  /**
   * An array for the column definition of your `Table`.
   */
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * An array of data (objects) for the `Table`.
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * A function the `Table` uses to fetch data. This is only used when utilizing server-side
   * pagination.
   */
  fetchData: functionOrUndef,
  /**
   * The loading state of a `Table` with controlled pagination.
   */
  loading: PropTypes.bool,
  /**
   * Used to tell the `Table` how many pages are there when utilizing server-side pagination.
   */
  pageCount: PropTypes.number,
  /**
   * The number of items per page in the `Table`.
   */
  pageSize: PropTypes.number,
  /**
   * Adds a checkbox in the `Table`, as the first column.
   */
  selectable: PropTypes.bool,
  /**
   * A function to trigger when clicking on the checkbox in the header row in the `Table`.
   * The function accepts 2 arguments, `row` and `event`, in that order: `(row, event) => {}`.
   *
   * @param {row} object - The row object for this row of the `Table`.
   * @param {event} object - The event triggered by the click on the row.
   */
  selectionHeaderFn: PropTypes.func,
  /**
   * A function to trigger when clicking on the checkbox in a row in the `Table`.
   * The function accepts 2 arguments, `rows` and `event`, in that order: `(row, event) => {}`.
   *
   * @param {rows} object - The row object for this row of the `Table`.
   * @param {event} object - The event triggered by the click on the row.
   */
  selectionFn: PropTypes.func,
  /**
   * Show the total below the `Table`.
   */
  showTotal: PropTypes.bool,
  /**
   * Any inline styles you would like to add to the `Table`. See the React
   * [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * The number of total items in the `Table`.
   */
  totalItems: PropTypes.number,
};

Table.defaultProps = {
  className: '',
  clickable: false,
  clickFn: () => {},
  fetchData: undefined,
  loading: false,
  pageCount: 0,
  pageSize: 10,
  selectable: false,
  selectionHeaderFn: () => {},
  selectionFn: () => {},
  showTotal: false,
  style: {},
  totalItems: 0,
};

export default Table;
/* eslint-enable react/jsx-props-no-spreading */
