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
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { useTable, usePagination, useRowSelect } from 'react-table';

import './table.less';

import { Checkbox } from '../form-controls/checkbox';
import Pagination from '../pagination';

/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/**
 * A `useTable` compatible hook that will add a column of/for the checkbox. To be passed into the `useTable` hook.
 * @param {object} instance - a `useTable` instance object. It is not a class so much as a pile of arrays (of functions).
 */
const useRowSelectComponent = (checkboxFunction = () => {}) => instance => {
  // visibleColumns (a property on the instance object) is an array of functions. Each of which will allow you to decorate some aspect of the columns. In our case, we are adding a checkbox to the beginning of each row.
  instance.visibleColumns.push((decorators) => [
    // This object is a 'constructor' for a column in the table. `useTable` will use the `Header` and `Cell` properties to determine what to put in our column. In our case they are components, but they could be strings.
    {
      id: 'selection',
      Header: ({ getToggleAllPageRowsSelectedProps }) => (
        <Checkbox
          label="label"
          value="allRows[]"
          {...getToggleAllPageRowsSelectedProps()}
        />
      ),
      Cell: ({ row }) => (
        <Checkbox
          label={row.id}
          value={row.id}
          {...row.getToggleRowSelectedProps({
            /* When we override the deafult onChange handler provided by useRowSelect,
             * we have to manually trigger the toggleRowSelected function manually.
             */
            onChange: event => {
              row.toggleRowSelected(event.target.checked);
              checkboxFunction(row, event);
            },
          })}
        />
      ),
    },
    ...decorators,
  ]);
};
/* eslint-enable react/display-name */
/* eslint-enable react/prop-types */

/**
 * `Tables` display information in a grid-like format of rows and columns. They organize information in a way that’s easy to scan, so that users can look for patterns and insights. Tables can contain interactive components (such as chips, buttons, or menus), non-interactive elements (such as badges).
 *
 * ### *Mobile Tables*
 * These list can support up to one inline link with additional actions placed within an ellipse menu in stacked tables. The purpose of this is to retain a relatively short row height. These lists are also stacked directly next to one another vertically allowing for no spacing. Text truncation is an option if desired.
 */
const Table = ({
  className,
  columns,
  data,
  pageSize,
  clickable,
  rowFunction,
  selectable,
  checkboxFunction,
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
    toggleHideColumn,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        /* Based on the documentation at https://react-table.tanstack.com/docs/api/useTable
         * `intitialState.hiddenColumns` is supposed to be an array of column ids that you
         *  want to have hidden.
         *
         *  I cannot figure out why, but in this use case, I am seeing
         *  this work backwards. and ONLY with the checkbox columns (id = 'selection').
         */
        hiddenColumns: selectable ? ['selection'] : [],
      },
    },
    usePagination,
    useRowSelect,
    useRowSelectComponent(checkboxFunction),
  );

  useEffect(() => setPageSize(pageSize), [pageSize]);
  useEffect(() => toggleHideColumn('selection'), [selectable]);

  const classes = cx(
    'ce-table',
    {
      'ce-table__clickable': clickable,
      'ce-table__selectable': selectable,
    },
    className,
  );

  return (
    <>
      <div className={classes} {...getTableProps()}>
        {/* table header */}
        <div className="ce-table__header" role="rowgroup">
          {headerGroups.map((headerGroup) => (
            <div
              key={headerGroup.id}
              className="ce-table__header--group"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
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
          {page.map((row) => {
            prepareRow(row);

            const rowProps = {
              className: `ce-table__row${row.isSelected ? ' ce-table__row--selected' : ''}`,
              ...row.getRowProps(),
              onClick: clickable ? event => rowFunction(row, event) : () => {},
            };

            return (
              <div key={row.id} {...rowProps}>
                {row.cells.map((cell) => (
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
          currentPage={pageIndex}
          gotoPage={gotoPage}
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
   * An array for the column definition of your `<Table />`. See [react-table](https://react-table.tanstack.com/).
   */
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * An array of data (objects) for the `<Table />`. See [react-table](https://react-table.tanstack.com/).
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
  rowFunction: PropTypes.func,
  /**
   * Adds a checkbox in the `<Table />`, as the first column.
   */
  selectable: PropTypes.bool,
  /**
   * A function to trigger when clicking on a checkbox in a row in the `<Table />`.
   * The function accepts 2 arguments, `row` and `event`, in that order: `(row, event) => {}`.
   *
   * @param {row} object - The row object for this row of the table.
   * @param {event} object - The event triggered by the click on the row.
   */
  checkboxFunction: PropTypes.func,
};

Table.defaultProps = {
  className: '',
  pageSize: 10,
  clickable: false,
  rowFunction: () => {},
  selectable: false,
  checkboxFunction: () => {},
};

export default Table;
