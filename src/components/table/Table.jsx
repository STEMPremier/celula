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
  handleChange,
  headings,
  label,
  name,
  rows,
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

  console.log('mobileViewObject', mobileViewObject)

  const classes = cx('ce-table', className);

  return (
    <div
      className={classes} 
      label={label}
      headings={headings}
      rows={rows}
      name={name}
      onChange={handleChange}
    >
      <div className="ce-table__container-desktop">
        <div className="ce-table__header-row">
        <Checkbox name="headerCheckbox" value={selectAll} checked={selectAll} handleChange={() => onChangeSelectAll()} />
          {headings.map(header => (
            <div className="ce-table__header-cell">{header}</div>
          ))}
        </div>
          {rows.map(rowItems => (
             <div className="ce-table__data-row">
               <Checkbox name="rowCheckbox" value={rowItems.data} checked={selected} />
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
             <div className="ce-table__mobile-card-container">
               <div className="ce-table__mobile-checkbox">
                 <Checkbox name="name" value={rowItems.data} checked={selected} />
               </div>
               <div className="ce-table__mobile-data-container">
               <div className="ce-table__mobile-headings">
                  {headings.map(mobileHeading => (
                     <span>{mobileHeading}</span>
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
  // status: PropTypes.bool,
};

Table.defaultProps = {
  className: '',
  name: '',
  handleChange: () => {},
  rows: [''],
  // status: false,
};

export default Table;
