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
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 *  `FormControlGroup` is used for grouping arbitrary form-control-like componets that need to
 *  operate like checkboxes or a radio buttons. It is the basis for the 'gouping' components found
 *  through out the ui kit.
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
    style,
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

    setFieldValues(selectedVals);
    handler(event, selectedVals);
  };

  const handleRadioChange = event => {
    const { value } = event.target;

    setFieldValues([value]);
    handler(event);
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
      style={style}
    >
      <legend>{label}</legend>
      {renderChildren()}
      <span className={errorClass}>{errorMsg}</span>
    </fieldset>
  );
};

FormControlGroup.propTypes = {
  /**
   * Props passed to all the children of the `FormControlGroup`.
   */
  childProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * The components you want the `FormControlGroup` to group together.
   */
  children: PropTypes.node.isRequired,
  /**
   * A class name, or a string of class names, to add to the `FormControlGroup`.
   */
  className: PropTypes.string,
  /**
   * Disables the `FormControlGroup` and all of it's children.
   */
  disabled: PropTypes.bool,
  /**
   * A class name, or string of class names, to add to your `FormControlGroup` if there is an error message.
   */
  errorClass: PropTypes.string,
  /**
   * An error message to display in the `FormControlGroup`.
   */
  errorMsg: PropTypes.string,
  /**
   * The id of the form the `FormControlGroup` belongs to.
   */
  formId: PropTypes.string,
  /**
   * A function to trigger when the state of the `FormControlGroup` changes. The function recieves 2 arguments, `event`, and `values`.
   *
   * @param {Event} event - The event that triggered the change.
   * @param {[]} values - The array of selected values in the FormControlGroup.
   */
  handleChange: PropTypes.func,
  /**
   * The `FormControlGroup` legend.
   */
  label: PropTypes.string,
  /**
   * The name given to all the children of the `FormControlGroup`.
   */
  name: PropTypes.string.isRequired,
  /**
   * An array of values used to pre-select children of the `FormControlGroup`.
   */
  selectedValues: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ),
  /**
   * Any inline styles you would like to add to the `FormControlGroup`. See the React [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
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
  style: {},
};

export default FormControlGroup;
/* eslint-enable prettier/prettier */
