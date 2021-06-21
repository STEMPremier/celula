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

/**
 * `Checkboxes` allow the user to select one or more items from a set. They can be used to turn an
 * option on or off, select one or multiple items from a list, or present a list containing
 * sub-selections.
 */
const CheckboxGroup = ({
  children,
  className,
  disabled,
  errorMsg,
  formId,
  handleChange,
  label,
  name,
  selectedValues,
  style,
  // validators
}) => {
  const classes = cx(
    'ce-checkbox-group',
    {
      'ce-checkbox-group--disabled': disabled,
      'ce-checkbox-group--error': errorMsg,
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
      selectedValues={selectedValues}
      style={style}
    >
      {children}
    </FormControlGroup>
  );
};

CheckboxGroup.propTypes = {
  /**
   * The `Checkbox` components you want the `CheckboxGroup` to group together.
   */
  children: PropTypes.node.isRequired,
  /**
   * A class name, or a string of class names, to add to the `CheckboxGroup`.
   */
  className: PropTypes.string,
  /**
   * Disables the `CheckboxGroup` and all of its children.
   */
  disabled: PropTypes.bool,
  /**
   * An error message to display in the `CheckboxGroup`.
   */
  errorMsg: PropTypes.string,
  /**
   * The id of the form the `CheckboxGroup` belongs to.
   */
  formId: PropTypes.string,
  /**
   * A function to trigger when the state of the `CheckboxGroup` changes. The function recieves 2
   * arguments, `event`, and `values`.
   *
   * @param {Event} event - The event that triggered the change.
   * @param {[]} values - The array of selected values in the CheckboxGroup.
   */
  handleChange: PropTypes.func,
  /**
   * The `CheckboxGroup` legend.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name given to all the children of the `CheckboxGroup`.
   */
  name: PropTypes.string.isRequired,
  /**
   * The values used to pre-select some children of the `CheckboxGroup`.
   */
  selectedValues: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ),
  /**
   * Any inline styles you would like to add to the `CheckboxGroup`. See the React
   * [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  // validators: PropTypes.array,
};

CheckboxGroup.defaultProps = {
  className: '',
  disabled: false,
  errorMsg: '',
  formId: '',
  handleChange: () => {},
  selectedValues: [],
  style: {},
  // validators: [],
};

export default CheckboxGroup;
