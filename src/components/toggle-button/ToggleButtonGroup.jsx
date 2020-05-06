import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import FormControlGroup from '../form-controls/core';

import './toggle-button-group.less';

/**
 * I am a `<ToggleButtonGroup />` description.
 */
const ToggleButtonGroup = props => {
  const {
    children,
    className,
    disabled,
    formId,
    handleChange,
    name,
    selectedValue,
  } = props;

  const classes = cx(
    'ce-toggle-button-group',
    {
      'ce-toggle-button-group--disabled': disabled,
    },
    className,
  );

  return (
    <FormControlGroup
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
   * The id of the form the `<RadioGroup />` belongs to.
   */
  formId: PropTypes.string,
  /**
   * A function to trigger when the state of the `<RadioGroup />` changes.
   */
  handleChange: PropTypes.func,
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
  // validators: PropTypes.array,
};

ToggleButtonGroup.defaultProps = {
  className: '',
  disabled: false,
  formId: '',
  handleChange: () => {},
  selectedValue: '',
};

export default ToggleButtonGroup;
