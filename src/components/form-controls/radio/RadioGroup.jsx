import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import FormControlGroup from '../core';

import './radios.less';

const RadioGroup = props => {
  const {
    children,
    className,
    disabled,
    errorMsg,
    formId,
    handleChange,
    label,
    name,
    selectedValue,
    // validators,
  } = props;

  const classes = cx(
    'ce-radio-group',
    {
      'ce-radio--disabled': disabled,
      'ce-radio--error': errorMsg,
    },
    className,
  );

  return (
    <FormControlGroup
      className={classes}
      disabled={disabled}
      errorClass="ce-radio-error--text"
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
   * A function to trigger when the state of the `<RadioGroup />` changes.
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
  // validators: PropTypes.array,
};

RadioGroup.defaultProps = {
  className: '',
  disabled: false,
  errorMsg: '',
  formId: '',
  handleChange: () => {},
  selectedValue: '',
  // validators: [],
};

export default RadioGroup;
