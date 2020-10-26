/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
import React, { useMemo } from 'react';
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
        <Checkbox {...getToggleAllRowsSelectedProps()} />
      ),
      Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
    },
    ...decorators,
  ]);
};
/* eslint-enable react/display-name */
/* eslint-enable react/prop-types */

const Table = ({
  className,
  columns,
  data,
  // handleClick,
  rowFunction = undefined,
  selectable,
}) => {
  // Memoize the data, and the columns to prevent rerenders, unless one of them actually changes.
  const info = useMemo(() => data, []);
  const cols = useMemo(() => columns, []);

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
    // setPageSize,
    // state: { pageIndex, pageSize },
    state: { pageIndex },
  } = useTable(
    { columns: cols, data: info },
    usePagination,
    useRowSelect,
    selectable ? useRowSelectComponents : () => {}, // This is the mechanism for turning on/off the checkbox column
  );

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
              className="ce-table__header--group"
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.id}
            >
              {headerGroup.headers.map((column) => (
                <div
                  className="ce-table__heading"
                  {...column.getHeaderProps()}
                  key={column.id}
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
              onClick: rowFunction,
            };

            return (
              <div {...rowProps} key={row.id}>
                {row.cells.map((cell) => (
                  <div
                    className="ce-table__cell"
                    {...cell.getCellProps()}
                    key={cell.id}
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
   * The column definition for your `<Table />`. See [LINK TO react-table]
   */
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * The data for the `<Table />`.
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * A function to trigger when the state of the `<Table />` changes.
   * This function is only accessible if the "selectable" prop is set to true.
   * The default for the selectable and this handleClick function are both false.
   */
  // handleClick: PropTypes.func,
  /**
   * A function to trigger when clicking on a row. Also enables the rows to be clickable.
   *
   * NOTE: As I am using the presence of a function as a trigger for some functionality,
   * turning off the `default value` warning is preferable than setting a default
   * function that will evaluate to true, forcing me to set up an otherwise unneeded bool prop.
   */
  rowFunction: PropTypes.func, // eslint-disable-line
  /**
   * Automatically include a checkbox in the table, as the first column.
   */
  selectable: PropTypes.bool,
};

Table.defaultProps = {
  className: '',
  // handleClick: () => {},
  selectable: false,
};

export default Table;
