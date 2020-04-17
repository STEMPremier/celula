/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './checkbox.less';

class Checkbox extends Component {
  state = {
    checked: false,
    showFocus: false,
  };

  componentDidMount() {
    const { checked } = this.props;

    if (checked) {
      this.setState({
        checked: true,
      });
    }
  }

  handleChange = event => {
    const { handleChange } = this.props;

    this.setState({
      checked: event.target.checked,
    });

    handleChange(event.target.value);
  };

  onMouseEnter = () => {
    this.setState(() => ({
      showFocus: true,
    }));
  };

  onMouseLeave = () => {
    this.setState(() => ({ showFocus: false }));
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
    const { checked, showFocus } = this.state;
    const id = `${name}_${value}`;
    const classes = cx(
      'ce-checkbox',
      {
        'ce-checkbox--disabled': disabled,
        'ce-checkbox--individual-checkbox-error': errorMsg,
      },
      className,
    );

    return (
      <div
        className={classes}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div className="ce-checkbox--box">
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
          <div className="ce-checkbox--background" />
          {showFocus && <div className="ce-checkbox--focus" />}
          {errorMsg && (
            <div className="ce-checkbox--error-box-wrapper">
              <div className="ce-checkbox--arrow" />
              <div className="ce-checkbox--error-box">
                <div className="ce-checkbox--error-box-text">{errorMsg}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Checkbox.propTypes = {
  /**
   * Select the `<Checkbox />`.
   */
  checked: PropTypes.bool,
  /**
   * A class name added to the `<CheckboxGroup />`.
   */
  className: PropTypes.string,
  /**
   * Make the `<Checkbox />` inactive.
   */
  disabled: PropTypes.bool,
  /**
   * An error message to display for a `<Checkbox />'.
   */
  errorMsg: PropTypes.string,
  /**
   * The id of the form the `<Checkbox />` belongs to. This value is overwritten by any value passed from an enclosing `<CheckboxGroup />`.
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
   * Need to assign a matching name to each `<Checkbox />` if it is being used outside of the `<CheckboxGroup />`.  In  a `<CheckboxGroup />`, each individual `<Checkbox />` will have the same name, but that will come from the `<CheckboxGroup />`.
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
