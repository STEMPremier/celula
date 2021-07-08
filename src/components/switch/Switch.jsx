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
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ErrorBox } from '../form-controls/core';

import '../form-controls/core/selectable/selectable.less';

/**
 * A `Switch` toggles the state of a single setting on or off. They are the preferred way to
 * adjust settings on mobile. Use them to toggle a single option on or off or to immediately
 * activate or deactivate something.
 */
const Switch = ({
  checked,
  className,
  disabled,
  errorMsg,
  formId,
  handleChange: handler,
  label,
  name,
  style,
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
    <div className={classes} style={style}>
      <input
        className="ce-s-switch"
        checked={isChecked}
        disabled={disabled}
        form={formId}
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
   * Set the `Switch to on be default`.
   */
  checked: PropTypes.bool,
  /**
   * A class name, or a string of class names, to add to the `Switch`.
   */
  className: PropTypes.string,
  /**
   * Disables the `Switch`.
   */
  disabled: PropTypes.bool,
  /**
   * An error message to display under the `<Switch  />`.
   */
  errorMsg: PropTypes.string,
  /**
   * The id of the form the `Switch` belongs to.
   */
  formId: PropTypes.string,
  /**
   * A function to trigger when the state of the `Switch` changes.
   */
  handleChange: PropTypes.func,
  /**
   * The `Switch` label.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name given to all the children of the `Switch`.
   */
  name: PropTypes.string,
  /**
   * Any inline styles you would like to add to the `Switch`. See the React
   * [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * The value of the `Switch`.
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
  formId: '',
  handleChange: () => {},
  name: 'name',
  style: {},
};

export default Switch;
