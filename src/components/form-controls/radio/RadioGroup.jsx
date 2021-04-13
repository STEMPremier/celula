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

import { FormControlGroup } from '../core';

import '../core/selectable/selectable-group.less';

const RadioGroup = ({
  children,
  className,
  disabled,
  errorMsg,
  formId,
  handleChange,
  label,
  name,
  selectedValue,
  style,
  // validators,
}) => {
  const classes = cx(
    'ce-radio-group',
    {
      'ce-radio-group--disabled': disabled,
      'ce-radio-group--error': errorMsg,
    },
    className,
  );

  return (
    <FormControlGroup
      className={classes}
      disabled={disabled}
      errorMsg={errorMsg}
      formId={formId}
      handleChange={handleChange}
      label={label}
      name={name}
      selectedValues={[selectedValue]}
      style={style}
    >
      {children}
    </FormControlGroup>
  );
};

RadioGroup.propTypes = {
  /**
   * The `<Radio />` components you want the `<RadioGroup />` to group together.
   */
  children: PropTypes.node.isRequired,
  /**
   * A class name, or string of class names, to add to the `<RadioGroup />`.
   */
  className: PropTypes.string,
  /**
   * Disables the `<RadioGroup />` and all of its children.
   */
  disabled: PropTypes.bool,
  /**
   * An error message to display in the `<RadioGroup />`.
   */
  errorMsg: PropTypes.string,
  /**
   * The id of the form the `<RadioGroup />` belongs to.
   */
  formId: PropTypes.string,
  /**
   * A function to trigger when the state of the `<RadioGroup />` changes. The function recieves 2 arguments, `event`, and `values`.
   *
   * @param {Event} event - The event that triggered the change.
   * @param {[]} values - The array of selected values in the <RadioGroup />.
   */
  handleChange: PropTypes.func,
  /**
   * The `<RadioGroup />` legend.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name given to all the children of the `<RadioGroup />`.
   */
  name: PropTypes.string.isRequired,
  /**
   * The value used to pre-select a child of the `<RadioGroup />`.
   */
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  /**
   * Any inline styles you would like to add to the `<RadioGroup />`. See the React [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  // validators: PropTypes.array,
};

RadioGroup.defaultProps = {
  className: '',
  disabled: false,
  errorMsg: '',
  formId: '',
  handleChange: () => {},
  selectedValue: '',
  style: {},
  // validators: [],
};

export default RadioGroup;
