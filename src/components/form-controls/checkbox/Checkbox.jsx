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

import { ErrorBox } from '../core';

import '../core/selectable/selectable.less';

/**
 * `Checkboxes` allow the user to select one or more items from a set. They can be used to turn an option on or off, select one or multiple items from a list, or present a list containing sub-selections.
 */
const Checkbox = ({
  checked,
  className,
  disabled,
  errorMsg,
  formId,
  handleChange: handler,
  name,
  label,
  value,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const id = `${name}_${value}`;

  const classes = cx(
    'ce-checkbox',
    {
      'ce-checkbox--error': errorMsg,
    },
    className,
  );

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = event => {
    const { checked: targetChecked } = event.target;

    setIsChecked(targetChecked);
    handler(event);
  };

  const finProps = Object.entries(rest).reduce(
    (a, [k, v]) =>
      k === 'indeterminate' || k === 'isA' ? a : { ...a, [k]: v },
    {},
  );

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <div className={classes}>
      <input
        checked={isChecked}
        disabled={disabled}
        form={formId}
        id={id}
        name={name}
        onChange={handleChange}
        type="checkbox"
        value={value}
        {...finProps} // This lets us overwrite the previous declerations of the props. ie. For use as part of other display components.
      />
      <label htmlFor={id}>{label}</label>
      {errorMsg && <ErrorBox errorMsg={errorMsg} />}
    </div>
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

Checkbox.propTypes = {
  /**
   * Select the `<Checkbox />`.
   */
  checked: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  /**
   * A class name, or string of class names, to add to the `<Checkbox />`.
   */
  className: PropTypes.string,
  /**
   * Disables the `<Checkbox />`.
   */
  disabled: PropTypes.bool,
  /**
   * An error message to display under the `<Checkbox />`.
   */
  errorMsg: PropTypes.string,
  /**
   * The id of the form the `<Checkbox />` belongs to.
   * This value is set (and replaced) by the `formID` of an `<CheckboxGroup />` if present.
   */
  formId: PropTypes.string,
  /**
   * A function to trigger when the state of the `<Checkbox />` changes.
   */
  handleChange: PropTypes.func,
  /**
   * This component is to be treated as a checkbox in `<FormControlGroup />`.
   * @ignore
   */
  isA: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  /**
   * The `<Checkbox />` label.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name given to all the children of the `<Checkbox />`.
   * This value is set (and replaced) by the `name` of an `<CheckboxGroup />` if present.
   */
  name: PropTypes.string,
  /**
   * The value of the `<Checkbox />`.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

Checkbox.defaultProps = {
  checked: false,
  className: '',
  disabled: false,
  errorMsg: '',
  formId: '',
  handleChange: () => {},
  isA: 'checkbox',
  name: '',
};

export default Checkbox;
