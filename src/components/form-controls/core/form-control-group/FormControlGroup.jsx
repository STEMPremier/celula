/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 *  `FormControlGroup` is used for grouping arbitrary form-control-like componets that need to operate like checkboxes or a radio buttons.
 *  It is the basis for the 'gouping' components found through out the ui kit.
 *
 * `FormControlGroup` has no specific styles beyone those it children componets bring with them.
 */
const FormControlGroup = props => {
  const {
    className,
    disabled,
    errorClass,
    errorMsg,
    formId,
    label,
    name,
    selectedValues,
  } = props;
  const [values, setValues] = useState(selectedValues);

  useEffect(() => {
    setValues(values);
  }, [selectedValues]);

  const handleCheckboxChange = event => {
    const { handleChange } = props;
    const { checked, value } = event.target;
    let selectedVals = [...values];

    if (checked) {
      selectedVals.push(value);
    } else {
      selectedVals = selectedVals.filter(val => val !== value);
    }

    handleChange(value);
    setValues(values);
  };

  const handleRadioChange = event => {
    const { handleChange } = props;
    const { value } = event.target;

    handleChange(value);
    setValues([values]);
  };

  const handleChange = event => {
    let { children } = props;
    let childType;

    children = React.Children.toArray(children);

    for ( const child of children ) { // eslint-disable-line no-restricted-syntax
      childType = child.props.isA;
      break;
    }

    // there are only 2 types of children, ever
    if (childType === 'radio') handleRadioChange(event);
    if (childType === 'checkbox') handleCheckboxChange(event);
  };

  const renderChildren = () => {
    const { children, childProps } = props;

    return React.Children.map(children, child => {
      const newProps = {
        checked: values.includes(child.props.value),
        name,
        ...childProps,
      };

      return React.cloneElement(child, { ...newProps });
    });
  };

  return (
    <fieldset
      className={className}
      disabled={disabled}
      form={formId}
      onChange={handleChange}
    >
      <legend>{label}</legend>
      {renderChildren()}
      <span className={errorClass}>{errorMsg}</span>
    </fieldset>
  );
};

FormControlGroup.propTypes = {
  /**
   * Props passed to all the children of the `<FormControlGroup />`.
   */
  childProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * The components you want the `<FormControlGroup />` to group together.
   */
  children: PropTypes.node.isRequired,
  /**
   * A class name, or a string of class names, to add to the `<FormControlGroup />`.
   */
  className: PropTypes.string,
  /**
   * Disables the `<FormControlGroup />` and all of it's children.
   */
  disabled: PropTypes.bool,
  /**
   * A class name, or string of class names, to add to your `<FormControlGroup />` if there is an error message.
   */
  errorClass: PropTypes.string,
  /**
   * An error message to display in the `<FormControlGroup />`.
   */
  errorMsg: PropTypes.string,
  /**
   * The id of the form the `<FormControlGroup />` belongs to.
   */
  formId: PropTypes.string,
  /**
   * A function to trigger when the state of the `<FormControlGroup />` changes.
   */
  handleChange: PropTypes.func,
  /**
   * The `<FormControlGroup />` legend.
   */
  label: PropTypes.string,
  /**
   * The name given to all the children of the `<FormControlGroup />`.
   */
  name: PropTypes.string.isRequired,
  /**
   * An array of values used to pre-select children of the `<FormControlGroup />`.
   */
  selectedValues: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ),
};

FormControlGroup.defaultProps = {
  childProps: {},
  className: '',
  disabled: false,
  errorMsg: '',
  errorClass: '',
  formId: '',
  handleChange: () => {},
  label: '',
  selectedValues: [],
};

export default FormControlGroup;
/* eslint-enable prettier/prettier */
