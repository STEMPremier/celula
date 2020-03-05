/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './radios.less';
// import { types } from '@babel/core';
/* eslint-disable no-unused-expressions */
const Radio = props => {
  const { className, checked, id, label, value, disabled, name } = props;

  const classes = cx(
    'ce-radio',
    {
      'ce-radio--checked': checked,
    },
    className,
  );
  const update = event => {
    console.log('event.target.value', event.target.value);
    console.log('props', props);
    // checked = true;
  };
  return (
    <div className={classes}>
      <label htmlFor={id} className="ce-radio--button">
        <input
          type="radio"
          value={value}
          name={name}
          id={id}
          checked={checked}
          onClick={update}
          disabled={disabled}
        />
        <span className="circle">
          <span />
        </span>
        {label}
      </label>
    </div>
  );
};

Radio.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  /**
   * Make the radio option inactive.
   */
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

Radio.defaultProps = {
  className: '',
  checked: false,
  disabled: false,
};

export default Radio;
