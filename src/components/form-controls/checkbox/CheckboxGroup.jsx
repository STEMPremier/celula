import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { FormControlGroup } from '../core';

import './checkbox-group.less';

/**
 * `Checkboxes` allow the user to select one or more items from a set. They can be used to turn an option on or off, select one or multiple items from a list, or present a list containing sub-selections.
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
      errorClass="ce-checkbox-group--error__text"
      errorMsg={errorMsg}
      formId={formId}
      handleChange={handleChange}
      label={label}
      name={name}
      selectedValues={selectedValues}
    >
      {children}
    </FormControlGroup>
  );
};

CheckboxGroup.propTypes = {
  /**
   * The `<Checkbox />` components you want the `<CheckboxGroup />` to group together.
   */
  children: PropTypes.node.isRequired,
  /**
   * A class name, or string of class names, to add to the `<CheckboxGroup />`.
   */
  className: PropTypes.string,
  /**
   * Disables the `<CheckboxGroup />` and all of its children.
   */
  disabled: PropTypes.bool,
  /**
   * An error message to display in the `<CheckboxGroup />`.
   */
  errorMsg: PropTypes.string,
  /**
   * The id of the form the `<CheckboxGroup />` belongs to.
   */
  formId: PropTypes.string,
  /**
   * A function to trigger when the state of the `<CheckboxGroup />` changes.
   */
  handleChange: PropTypes.func,
  /**
   * The `<CheckboxGroup />` legend.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name given to all the children of the `<CheckboxGroup />`.
   */
  name: PropTypes.string.isRequired,
  /**
   * The values used to pre-select some children of the `<CheckboxGroup />`.
   */
  selectedValues: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ),
  // validators: PropTypes.array,
};

CheckboxGroup.defaultProps = {
  className: '',
  disabled: false,
  errorMsg: '',
  formId: '',
  handleChange: () => {},
  selectedValues: [],
  // validators: [],
};

export default CheckboxGroup;
