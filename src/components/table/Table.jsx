/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './table.less';

// SPENT HOURS TRYING TO LINE UP ROWS UNDER COLUMNS
// BY MAPPING OVER A JOINT DATATABLE OBJECT BUT DIVS WITH MAPPING BREAK THE FORMAT
// NOW NEED TO CREATE FUNCTIONS THAT WILL PUT THE HEADERS AND ROWS IN STATE THAT I CAN
// ACCESS QUICKLY IN THE JSX TABLE TAGS
// DO ALL LOGIC ABOVE THE RETURN

const Table = ({ className, handleChange, headings, label, name }) => {
  const [headers, setHeaders] = useState();
  const [rows, setRows] = useState();

  const classes = cx('ce-table', className);
  const propHeadings = [
    'First Name',
    'Last Name',
    'Company',
    'Job Title',
    'Age',
  ];
  // const getHeaders = headingData => {
  //   // headingData.map(header => setHeaders(header));
  //   console.log('headingData', headingData);

  // };

  // const propRows = [{
  //   data: [{
  //     cell1: '',
  //     cell2: ''
  //   }]
  // }]

  const propRows = [
    {
      data: ['Jenny', 'Schutzman', 'Tallo', 'Software Engineer', '36'],
      status: '',
    },
    {
      data: ['David', 'Morrow', 'Gildan', 'Supply Chain Manager', '43'],
      status: '',
    },
    {
      data: [
        'Gina',
        'Nicholas',
        'Proctor and Gamble',
        'Evaluation Data Manager',
        '34',
      ],
      status: '',
    },
  ];
  // // not sure if I should push it into something visible or map over rows in jsx
  // const row = propRows.map(item => item.data);
  // const rowItems = row.map(item => item);
  // console.log('rowItems', rowItems);
  // object.map(row => setRows(row));
  // object.map(row => console.log('row in map', row));
  // console.log('rows', rows);
  // console.log('headings', headings);

  // Build an object from the table props to insert into the mapped jsx tags
  // const dataObject = {
  //   rows: propRows.map(item => item.data),
  //   headers: propHeadings,
  // };
  // // rowItems(propRows);
  // console.log('dataObject', dataObject);
  // getHeaders(propHeadings);

  //   <tr>
  //   <th>{dataObject.headers}</th>
  // </tr>
  // <tr>
  //   {dataObject.rows.map(row => (
  //     <td>{row}</td>
  //   ))}
  // </tr>

  // FIRST ATTEMPT
  // {
  //   headers.map(header => (
  //     <div key={header}>
  //       <tr>
  //         <th>{header}</th>
  //       </tr>
  //     </div>
  //   ));
  // }
  // {
  //   rows.map(row => (
  //     <div key={row}>
  //       <tr>
  //         <td>{row.data}</td>
  //       </tr>
  //     </div>
  //   ));
  // }
  // END FIRST ATTEMPT JSX

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
          <tr>
            {propHeadings.map(header => (
              <th>{header}</th>
            ))}
          </tr>
          {propRows.map(rowItems => (
            <tr>
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
  // rows: PropTypes.arrayOf(
  //   PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  // ),
};

Table.defaultProps = {
  // rows: [''],
  name: '',
  handleChange: () => {},
  className: '',
};

export default Table;
