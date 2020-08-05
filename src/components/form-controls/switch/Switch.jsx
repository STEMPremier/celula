/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './switch.less';

import { ErrorBox } from '../core';

const Switch = ({
  checked,
  className,
  disabled,
  errorMsg,
  formId,
  handleChange: handler,
  label,
  name,
  value,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const id = `${name}_${value}`;

  const classes = cx(
    'ce-switch',
    {
      'ce-switch--disabled': disabled,
      'ce-switch--error': errorMsg,
    },
    className,
  );

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = event => {
    const { checked: targetChecked, value: targetValue } = event.target;
    setIsChecked(targetChecked);
    handler(targetValue);
  };

  return (
    <div className={classes}>
      <input
        className="ce-switch__checkbox"
        checked={isChecked}
        disabled={disabled}
        form={formId}
        id={id}
        name={name}
        onChange={handleChange}
        type="checkbox"
        value={value}
      />
      <label className="ce-switch__slider" htmlFor={id}>
        {label}
      </label>
      {errorMsg && <ErrorBox errorMsg={errorMsg} />}
    </div>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  errorMsg: PropTypes.string,
  formId: PropTypes.string,
  handleChange: PropTypes.func,
  // isA: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

Switch.defaultProps = {
  checked: false,
  className: '',
  disabled: false,
  errorMsg: '',
  formId: '',
  handleChange: () => {},
  // isA: 'switch',
  name: 'name',
};

export default Switch;
