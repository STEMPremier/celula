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
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { useTable, usePagination, useRowSelect } from 'react-table';

import './table.less';

import Pagination from '../pagination';
import useRowSelectComponent from './useRowSelectComponet';

/**
 * `Tables` display information in a grid-like format of rows and columns. They organize information in a way that’s easy to scan, so that users can look for patterns and insights. Tables can contain interactive components (such as chips, buttons, or menus), non-interactive elements (such as badges).
 */
/* ### *Mobile Tables*
 * These list can support up to one inline link with additional actions placed within an ellipse menu in stacked tables. The purpose of this is to retain a relatively short row height. These lists are also stacked directly next to one another vertically allowing for no spacing. Text truncation is an option if desired.
 */
const Table = ({
  className,
  columns,
  data,
  pageSize,
  clickable,
  clickFn,
  selectable,
  selectionHeaderFn,
  selectionFn,
  style,
}) => {
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
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
    },
    usePagination,
    useRowSelect,
    useRowSelectComponent(selectionHeaderFn, selectionFn),
  );

  useEffect(() => setPageSize(pageSize), [pageSize]);

  const classes = cx(
    'ce-table',
    {
      'ce-table__clickable': clickable,
      'ce-table__selectable': selectable,
    },
    className,
  );

  const navToPage = pg => gotoPage(pg - 1);

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
      {pageCount > 1 && (
        <Pagination
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          currentPage={
            /* Pagination expects currentPage to be 1-index, and react-table provides the number 0-indexed */
            pageIndex + 1
          }
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
   * A class name, or string of class names, to add to the `<Table />`.
   */
  className: PropTypes.string,
  /**
   * An array for the column definition of your `<Table />`.
   */
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * An array of data (objects) for the `<Table />`.
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * The number of items per page in the `<Table />`.
   */
  pageSize: PropTypes.number,
  /**
   * Make the rows in the `<Table />` clickable.
   */
  clickable: PropTypes.bool,
  /**
   * A function to trigger when clicking on a row in the `<Table />`.
   * The function accepts 2 arguments, `row` and `event`, in that order: `(row, event) => {}`.
   *
   * @param {row} object - The row object for this row of the table.
   * @param {event} object - The event triggered by the click on the row.
   */
  clickFn: PropTypes.func,
  /**
   * Adds a checkbox in the `<Table />`, as the first column.
   */
  selectable: PropTypes.bool,
  /**
   * A function to trigger when clicking on the checkbox in the header row in the `<Table />`.
   * The function accepts 2 arguments, `row` and `event`, in that order: `(row, event) => {}`.
   *
   * @param {row} object - The row object for this row of the table.
   * @param {event} object - The event triggered by the click on the row.
   */
  selectionHeaderFn: PropTypes.func,
  /**
   * A function to trigger when clicking on the checkbox in a row in the `<Table />`.
   * The function accepts 2 arguments, `rows` and `event`, in that order: `(row, event) => {}`.
   *
   * @param {rows} object - The row object for this row of the table.
   * @param {event} object - The event triggered by the click on the row.
   */
  selectionFn: PropTypes.func,
  /**
   * Any inline styles you would like to add to the `<Table />`. See the React [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Table.defaultProps = {
  className: '',
  pageSize: 10,
  clickable: false,
  clickFn: () => {},
  selectable: false,
  selectionHeaderFn: () => {},
  selectionFn: () => {},
  style: {},
};

export default Table;
/* eslint-enable react/jsx-props-no-spreading */
