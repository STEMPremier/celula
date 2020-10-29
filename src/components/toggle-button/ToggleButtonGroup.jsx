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

import { FormControlGroup } from '../form-controls/core';
import { COLORS, SIZES } from '../../utils/constants';

import './toggle-button-group.less';

const ToggleButtonGroup = ({
  children,
  className,
  color,
  disabled,
  formId,
  handleChange,
  name,
  selectedValue,
  size,
}) => {
  const classes = cx(
    'ce-toggle-button-group',
    {
      [`ce-toggle-button-group--${size}`]: SIZES.includes(
        size.toString().toLowerCase(),
      ),
      [`ce-toggle-button-group--${color}`]:
        COLORS.includes(color.toString().toLowerCase()) && !disabled,
      'ce-toggle-button-group--disabled': disabled,
    },
    className,
  );

  return (
    <FormControlGroup
      childProps={{ size, color }}
      className={classes}
      disabled={disabled}
      handleChange={handleChange}
      formId={formId}
      name={name}
      selectedValues={[selectedValue]}
    >
      {children}
    </FormControlGroup>
  );
};

ToggleButtonGroup.propTypes = {
  /**
   * The `<ToggleButton />` components you want the `<ToggleButtonGroup />` to group together.
   */
  children: PropTypes.node.isRequired,
  /**
   * A class name, or string of class names, to add to the `<ToggleButtonGroup />`.
   */
  className: PropTypes.string,
  /**
   * The color of the `<ToggleButtonGroup />`.\
   */
  // color: PropTypes.oneOf(COLORS),
  color: PropTypes.oneOf(['primary', 'secondary', 'black', 'inverted']),
  /**
   * Disables the `<ToggleButtonGroup />` and all of its children.
   */
  disabled: PropTypes.bool,
  /**
   * The id of the form the `<ToggleButtonGroup />` belongs to.
   */
  formId: PropTypes.string,
  /**
   * A function to trigger when the state of the `<ToggleButtonGroup />` changes.
   */
  handleChange: PropTypes.func,
  /**
   * The name given to all the children of the `<ToggleButtonGroup />`.
   */
  name: PropTypes.string.isRequired,
  /**
   * The value used to pre-select a child of the `<ToggleButtonGroup />`.
   */
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  /**
   * The size of the `<ToggleButtonGroup />`.
   */
  // size: PropTypes.oneOf(SIZES),
  size: PropTypes.oneOf(['small', 'large', 'jumbo']),
  // validators: PropTypes.array,
};

ToggleButtonGroup.defaultProps = {
  className: '',
  color: 'primary',
  disabled: false,
  formId: '',
  handleChange: () => {},
  selectedValue: '',
  size: 'large',
};

export default ToggleButtonGroup;
