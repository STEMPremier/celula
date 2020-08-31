/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './table.less';

import SystemIcon from '../icon/SystemIcon';

const Table = ({
  className,
  handleChange,
  headings,
  label,
  name,
  rows,
  status,
}) => {
  const classes = cx('ce-table', className);
  const propHeadings = [
    'First Name',
    'Last Name',
    'Company',
    'Job Title',
    'Age',
  ];

  return (
    <div>
      <body>
        <table
          headings={headings}
          rows={rows}
          label={label}
          name={name}
          onChange={handleChange}
          className={classes}
        >
          {headings && (
            <tr>
              {status && <th>Status</th>}
              {headings.map(header => (
                <th>{header}</th>
              ))}
            </tr>
          )}

          {rows.map(rowItems => (
            <tr>
              <td className="ce-table__status-container">
                <div className="ce-table__status-systemicon">
                  <SystemIcon name="navigate" color="black" />
                </div>

                <div className="ce-table__status-circle" />
                {rowItems.status}
              </td>
              {rowItems.data.map(rowData => (
                <td>{rowData}</td>
              ))}
            </tr>
          ))}
        </table>
      </body>
    </div>
  );
};

Table.propTypes = {
  /**
   * A class name, or string of class names, to add to the `<Switch />`.
   */
  className: PropTypes.string,
  /**
   * A function to trigger when the state of the `<Switch />` changes.
   */
  handleChange: PropTypes.func,
  /**
   * The `<Switch />` label.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name given to all the children of the `<Switch />`.
   */
  name: PropTypes.string,
  /**
   * The value of the `<Switch />`.
   */
  headings: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ).isRequired,
  /**
   * oinoinoin
   */
  rows: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ),
  status: PropTypes.bool,
};

Table.defaultProps = {
  className: '',
  name: '',
  handleChange: () => {},
  rows: [''],
  status: false,
};

export default Table;
