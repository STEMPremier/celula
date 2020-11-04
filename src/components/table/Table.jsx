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
const useRowSelectComponents = (instance) => {
  // visibleColumns (a property on the instance object) is an array of functions. Each of which will allow you to decorate some aspect of the columns. In our case, we are adding a checkbox to the beginning of each row.
  instance.visibleColumns.push((decorators) => [
    // This object is a 'constructor' for a column in the table. `useTable` will use the `Header` and `Cell` properties to determine what to put in our column. In our case they are components, but they could be strings.
    {
      id: 'selection',
      Header: ({ getToggleAllRowsSelectedProps }) => (
        <Checkbox
          value="allRows[]"
          label="label"
          {...getToggleAllRowsSelectedProps()}
        />
      ),
      Cell: ({ row }) => (
        <Checkbox
          value={row.id}
          label={row.id}
          {...row.getToggleRowSelectedProps()}
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
  // handleClick,
  pageSize,
  rowFunction = undefined,
  selectable,
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
    useRowSelectComponents,
  );

  useEffect(() => setPageSize(pageSize), [pageSize]);
  useEffect(() => toggleHideColumn('selection'), [selectable]);

  const classes = cx(
    'ce-table',
    {
      'ce-table__selectable': selectable,
      'ce-table__clickable': rowFunction,
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
              className: 'ce-table__row',
              ...row.getRowProps(),
              onClick: event => rowFunction(row, event),
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
   * A function to trigger when a checkbox in the `<Table />` changes.
   * This function is only accessible if the "selectable" prop is set to true.
   * The default for the selectable and this handleClick function are both false.
   */
  // handleClick: Pr parameters={{ docs: { disable: true } }}opTypes.func,
  /**
   * The number of items per page in the `<Table />`.
   */
  pageSize: PropTypes.number,
  /**
   * A function to trigger when clicking on a row in the `<Table />`. Also enables the rows to be clickable.
   * The function accepts 2 arguments, `row` and `event`, in that order: `(row, event) => {}`.
   *
   * @param {row} object - The row object for this row of the table.
   * @param {event} object - The event triggered by the click on the row.
   */
  /* NOTE: As I am using the presence of a function as a trigger for some functionality,
   * turning off the `default value` warning is preferable than setting a default
   * function that will evaluate to true, forcing me to set up an otherwise unneeded bool prop.
   */
  rowFunction: PropTypes.func, // eslint-disable-line
  /**
   * Automatically include a checkbox in the `<Table />`, as the first column.
   */
  selectable: PropTypes.bool,
};

Table.defaultProps = {
  className: '',
  // handleClick: () => {},
  pageSize: 10,
  selectable: false,
};

export default Table;
