/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './table.less';

// import SystemIcon from '../icon/SystemIcon';

import Checkbox from '../form-controls/checkbox/Checkbox';

const Table = ({
  className,
  handleClick,
  headings,
  label,
  name,
  rows,
  selectable,
  // status,
}) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState(false);

  const onChangeSelectAll = event => {
    setSelectAll(!selectAll);
    setSelected(!selected);
  };

  const mobileViewObject = {
    mobileHeadings: headings,
    mobileData: rows
  }

  const classes = cx('ce-table', 
    {
      'ce-table--selectable': selectable
    },
  className);

  return (
    <div
      className={classes} 
      label={label}
      headings={headings}
      rows={rows}
      name={name}
      onChange={selectable ? handleClick : false}
      selectable={selectable}
    >
      <div className="ce-table__container-desktop">
        <div className="ce-table__header-row">
          {selectable && (
            <Checkbox name="headerCheckbox" value={selectAll} checked={selectAll} handleChange={() => onChangeSelectAll()} />
          )}
       
          {headings.map(header => (
            <div className="ce-table__header-cell">{header}</div>
          ))}
        </div>
          {rows.map(rowItems => (
             <div className={`ce-table__data-row ${  selectable ? "ce-table--selectable": null}`}>
               {selectable && (
                 <Checkbox name="rowCheckbox" value={rowItems.data} checked={selected} />
               )}
             
              {rowItems.data.map(rowData => (
                 <div className="ce-table__data-cell ">
                {rowData} 
                 </div>
              ))}
             </div>
          ))}
      </div>

      
      <div className="ce-table__container-mobile">
        <div className="ce-table__mobile-row">
        {rows.map(rowItems => (
             <div className={`ce-table__mobile-card-container ${  selectable ? "ce-table--selectable": null}`}>
               {selectable && (
                <div className="ce-table__mobile-checkbox">
                  <Checkbox name="name" value={rowItems.data} checked={selected} />
                </div>
               )}
            
               <div className="ce-table__mobile-data-container">
               <div className="ce-table__mobile-headings">
                  {headings.map(mobileHeading => (
                     <span>
<strong>
{mobileHeading}
:
</strong>
                     </span>
               ))}
               </div>
                <div className="ce-table__mobile-card-data">
               {rowItems.data.map(rowData => (
                 <div className="ce-table__mobile-card-row-data">{rowData}</div>
               ))}
                </div>
               </div>
             </div>
           )
          )}
        </div>
      </div>
    </div>
  );
};

Table.propTypes = {
  /**
   * A class name, or string of class names, to add to the `<Table />`.
   */
  className: PropTypes.string,
  /**
   * A function to trigger when the state of the `<Table />` changes.  This function is only accessible if the "selectable" prop is set to true.  The default for both "selectable" and this handleClick function are both false.
   */
  handleClick: PropTypes.func,
  /**
   * The `<Table />` label.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name given to all the children of the `<Table />`.
   */
  name: PropTypes.string,
  /**
   * The values that populate the header.  
   */
  headings: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ).isRequired,
  /**
   * The values that populate the row cells.  Each row of data must be an object in an array.  Each object must have a property called 'data' containing an array of values that will then be pushed into the table row.
   */
  rows: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ).isRequired,
  /**
   * Makes the interactive with hover, active and checkbox functionality.  The default is false, hiding the checkbox column. 
   */
  selectable: PropTypes.bool,
  // status: PropTypes.bool,
};

Table.defaultProps = {
  className: '',
  name: '',
  handleClick: () => {},
  selectable: false,
  // status: false,
};

export default Table;
