/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 *  `FormControlGroup` is used for grouping arbitrary form-control-like componets that need to operate like checkboxes or a radio buttons.
 *  It is the basis for the 'gouping' components found through out the ui kit.
 *
 * `FormControlGroup` has no specific styles beyone those it children componets bring with them.
 */
const FormControlGroup = (
  {
    children,
    className,
    disabled,
    errorClass,
    errorMsg,
    formId,
    handleChange: handler,
    label,
    name,
    selectedValues,
  },
  ...props
) => {
  const [fieldValues, setFieldValues] = useState(selectedValues);

  useEffect(() => {
    setFieldValues(selectedValues);
  }, [selectedValues]);

  const handleCheckboxChange = event => {
    const { checked, value } = event.target;
    let selectedVals = [...fieldValues];

    if (checked) {
      selectedVals.push(value);
    } else {
      selectedVals = selectedVals.filter(val => val !== value);
    }

    handler(value);
    setFieldValues(selectedVals);
  };

  const handleRadioChange = event => {
    const { value } = event.target;

    handler(value);
    setFieldValues([value]);
  };

  const handleChange = event => {
    const childs = React.Children.toArray(children);
    let childType;

    for ( const child of childs ) { // eslint-disable-line no-restricted-syntax
      childType = child.props.isA;
      break;
    }

    // there are only 2 types of children, ever
    if (childType === 'radio') handleRadioChange(event);
    if (childType === 'checkbox') handleCheckboxChange(event);
  };

  const renderChildren = () => {
    const { childProps } = props;

    return React.Children.map(children, child => {
      const newProps = {
        checked: fieldValues.includes(child.props.value),
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
