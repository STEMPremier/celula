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
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import '../core/selectable/selectable.less';

/**
 * A `Radio` allows the user to select one option from a set. Use radio buttons when the user needs
 * to see all available options.
 */
const Radio = ({ checked, className, disabled, label, name, style, value }) => {
  const id = `${name}_${value}`;
  const classes = cx('ce-radio', className);

  return (
    <div className={classes} style={style}>
      <input
        defaultChecked={checked}
        disabled={disabled}
        id={id}
        name={name}
        type="radio"
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

Radio.propTypes = {
  /**
   * Select the `Radio`.
   * @ignore
   */
  checked: PropTypes.bool,
  /**
   * A class name, or a string of class names, to add to the `RadioGroup`.
   */
  className: PropTypes.string,
  /**
   * Make the `Radio` inactive.
   * @ignore
   */
  disabled: PropTypes.bool,
  /**
   * This component is to be treated as a radio button in `FormControlGroup`.
   * @ignore
   */
  isA: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  /**
   * The `Radio` label.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name of the `RadioGroup` this `Radio` belongs to. This is created and provided by the
   * `RadioGroup`
   * @ignore
   */
  name: PropTypes.string,
  /**
   * Any inline styles you would like to add to the `Radio`. See the React
   * [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * The value of the `Radio`.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

Radio.defaultProps = {
  checked: false,
  className: '',
  disabled: false,
  isA: 'radio',
  name: undefined,
  style: {},
};

export default Radio;
