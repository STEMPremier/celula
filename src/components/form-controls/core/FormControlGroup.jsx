/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 *  `FormControlGroup` is used for grouping arbitrary form-control-like componets that need to operate like checkboxes or a radio buttons.
 *  It is the basis for the 'gouping' components found through out the ui kit.
 *
 * `FormControlGroup` has no specific styles beyone those it children componets bring with them.
 */
class FormControlGroup extends Component {
  state = {
    selectedValues: this.props.selectedValues, // eslint-disable-line react/destructuring-assignment
  };

  handleCheckboxChange = event => {
    const { handleChange } = this.props;
    let { selectedValues } = this.state;

    if (event.target.checked) {
      selectedValues.push(event.target.value);
    } else {
      selectedValues = selectedValues.filter(val => val !== event.target.value);
    }

    handleChange(event.target.value);

    this.setState({ selectedValues });
  };

  handleRadioChange = event => {
    const { handleChange } = this.props;

    handleChange(event.target.value);

    this.setState({ selectedValues: [event.target.value] });
  };

  handleChange = event => {
    let { children } = this.props;
    let childType;

    children = React.Children.toArray(children);

    for ( const child of children ) { // eslint-disable-line no-restricted-syntax
      childType = child.props.isA;
      break;
    }

    // there are only 2 types of children, ever
    if (childType === 'radio') this.handleRadioChange(event);
    if (childType === 'checkbox') this.handleCheckboxChange(event);
  };

  renderChildren = () => {
    const { childProps, children, name } = this.props;
    const { selectedValues } = this.state;

    return React.Children.map(children, child => {
      const props = {
        checked: selectedValues.includes(child.props.value),
        name,
        ...childProps,
      };

      return React.cloneElement(child, { ...props });
    });
  };

  render() {
    const { className, disabled, errorClass, errorMsg, formId, label } = this.props;

    return (
      <fieldset
        className={className}
        disabled={disabled}
        form={formId}
        onChange={this.handleChange}
      >
        <legend>{label}</legend>
        {this.renderChildren()}
        <span className={errorClass}>{errorMsg}</span>
      </fieldset>
    );
  }
}

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
