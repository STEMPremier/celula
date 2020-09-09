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
