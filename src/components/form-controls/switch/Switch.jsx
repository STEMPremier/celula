import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ErrorBox } from '../core';

import './switch.less';

const Switch = ({
  checked,
  className,
  disabled,
  errorMsg,
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
        checked={isChecked}
        disabled={disabled}
        id={id}
        name={name}
        onChange={handleChange}
        type="checkbox"
        value={value}
      />
      <label htmlFor={id}>
        <span>{label}</span>
      </label>
      {errorMsg && <ErrorBox errorMsg={errorMsg} />}
    </div>
  );
};

Switch.propTypes = {
  /**
   * Set the `<Switch /> to on be default`.
   */
  checked: PropTypes.bool,
  /**
   * A class name, or string of class names, to add to the `<Switch />`.
   */
  className: PropTypes.string,
  /**
   * Disables the `<Switch />`.
   */
  disabled: PropTypes.bool,
  /**
   * An error message to display under the `<Switch  />`.
   */
  errorMsg: PropTypes.string,
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
  handleChange: () => {},
  name: 'name',
};

export default Switch;
