import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import FormControlGroup from '../form-controls/core';

import './button.less';

const ToggleButtonGroup = props => {
  const {
    // what props will we need?
    children,
    className,
    disabled,
    errorMsg,
    formId,
    handleChange,
    label,
    name,
    selectedValue,
    // validators
  } = props;

  const classes = cx(
    'ce-button-group',
    {
      'ce-toggle-button-group--disabled': disabled,
      'ce-toggle-button-group--error': errorMsg,
    },
    className,
  );

  return (
    <FormControlGroup
      className={classes}
      disabled={disabled}
      errorClass="ce-button-group-text--error"
      errorMsg={errorMsg}
      formId={formId}
      handleChange={handleChange}
      label={label}
      name={name}
      selectedValues={[selectedValue]}
    >
      {children}
    </FormControlGroup>
  );
};

ToggleButtonGroup.propTypes = {
  /**
   * The `<ToggleButtons />`s you want the `<ToggleButtonGroup />` to group together.
   */
  children: PropTypes.node.isRequired,
  /**
   * A class name, or string of class names, to add to the `<ToggleButtonGroup />`.
   */
  className: PropTypes.string,
  /**
   * Disables the `<ToggleButtonGroup />` and all of its children.
   */
  disabled: PropTypes.bool,
  /**
   * An error message to display in the `<ToggleButtonGroup />`.
   */
  errorMsg: PropTypes.string,
  /**
   * The id of the form the `<ToggleButtonGroup />` belongs to.
   */
  formId: PropTypes.string,
  /**
   * A function to trigger when the state of the `<ToggleButtonGroup />` changes.
   */
  handleChange: PropTypes.func.isRequired,
  /**
   * The `<ToggleButtonGroup />` legend..
   */
  label: PropTypes.string.isRequired,
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
  // validators: PropTypes.array,
};

ToggleButtonGroup.defaultProps = {
  className: '',
  disabled: false,
  errorMsg: '',
  formId: '',
  selectedValue: '',
  // validators: [],
};

export default ToggleButtonGroup;
