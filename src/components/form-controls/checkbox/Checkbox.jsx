import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ErrorBox } from '../core';

import './checkbox.less';

/**
 * `Checkboxes` allow the user to select one or more items from a set. They can be used to turn an option on or off, select one or multiple items from a list, or present a list containing sub-selections.
 */
class Checkbox extends Component {
  state = {
    checked: this.props.checked, // eslint-disable-line react/destructuring-assignment
  };

  // This changes the state when the `checked` prop changes, for non-grouped use
  componentDidUpdate(prevProps) {
    const { checked } = this.props;

    if (prevProps.checked !== checked) {
      /* eslint-disable react/no-did-update-set-state */
      this.setState({
        checked,
      });
      /* eslint-enable react/no-did-update-set-state */
    }
  }

  // This changes the `checked` state for all use-cases
  handleChange = event => {
    const { handleChange } = this.props;

    this.setState({
      checked: event.target.checked,
    });

    handleChange(event.target.value);
  };

  render() {
    const {
      className,
      disabled,
      errorMsg,
      formId,
      name,
      label,
      value,
    } = this.props;
    const { checked } = this.state;
    const id = `${name}_${value}`;
    const classes = cx(
      'ce-checkbox',
      {
        'ce-checkbox--disabled': disabled,
        'ce-checkbox--error': errorMsg,
      },
      className,
    );

    return (
      <div className={classes}>
        <input
          checked={checked}
          disabled={disabled}
          form={formId}
          id={id}
          name={name}
          onChange={this.handleChange}
          type="checkbox"
          value={value}
        />
        <label htmlFor={id}>{label}</label>
        {errorMsg && <ErrorBox errorMsg={errorMsg} />}
      </div>
    );
  }
}

Checkbox.propTypes = {
  /**
   * Select the `<Checkbox />`.
   */
  checked: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  /**
   * A class name, or string of class names, to add to the `<Checkbox />`.
   */
  className: PropTypes.string,
  /**
   * Disables the `<Checkbox />`.
   */
  disabled: PropTypes.bool,
  /**
   * An error message to display under the `<Checkbox />`.
   */
  errorMsg: PropTypes.string,
  /**
   * The id of the form the `<Checkbox />` belongs to.
   * This value is set (and replaced) by the `formID` of an `<CheckboxGroup />` if present.
   */
  formId: PropTypes.string,
  /**
   * A function to trigger when the state of the `<Checkbox />` changes.
   */
  handleChange: PropTypes.func,
  /**
   * This component is to be treated as a checkbox in `<FormControlGroup />`.
   * @ignore
   */
  isA: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  /**
   * The `<Checkbox />` label.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name given to all the children of the `<Checkbox />`.
   * This value is set (and replaced) by the `name` of an `<CheckboxGroup />` if present.
   */
  name: PropTypes.string,
  /**
   * The value of the `<Checkbox />`.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

Checkbox.defaultProps = {
  checked: false,
  className: '',
  disabled: false,
  errorMsg: '',
  formId: '',
  handleChange: () => {},
  isA: 'checkbox',
  name: '',
};

export default Checkbox;
