import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ErrorBox } from '../core';

import SystemIcon from '../../icon/SystemIcon';

import './select.less';

class Select extends Component {
  state = {
    showLabel: false,
    // eslint-disable-next-line react/destructuring-assignment
    selectedValue: this.props.selectedValue,
  };

  handleChange = event => {
    const { handleChange } = this.props;
    const { value } = event.target;

    this.setState({ selectedValue: value });

    handleChange(value);
  };

  render() {
    const {
      buttonClick,
      buttonIcon,
      buttonShow,
      className,
      disabled,
      errorMsg,
      formId,
      label,
      name,
      options,
    } = this.props;

    const { showLabel, selectedValue } = this.state;

    const id = `${name}`;

    const classes = cx(
      'ce-select',
      {
        'ce-select--disabled': disabled,
        'ce-select--error': errorMsg,
      },
      className,
    );

    return (
      <div className={classes}>
        {showLabel && <label htmlFor={id}>{label}</label>}
        <div className="ce-select__container">
          <select
            name={name}
            label={label}
            form={formId}
            id={id}
            disabled={disabled}
            value={selectedValue}
            onChange={this.handleChange}
          >
            <option key={label}>{label}</option>
            {options.map(item => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          {buttonShow && (
            <button
              className="ce-select__button"
              onClick={buttonClick}
              type="button"
            >
              <SystemIcon
                name={buttonIcon}
                className="ce-select__button__icon"
                color="white"
              />
            </button>
          )}
        </div>
        <div className="ce-select__background" />
        {errorMsg && <ErrorBox errorMsg={errorMsg} />}
      </div>
    );
  }
}

Select.propTypes = {
  /**
   * This function is accesible to the user for clickable events on the icon in the gradient to the right.
   */
  buttonClick: PropTypes.func,
  /**
   * Assign an icon to go in the gradient right hand square.  If you use the buttonShow prop as true, this icon will default to "navigate".  See the <SystemIcon /> for more options on what to enter into this icon prop.
   */
  buttonIcon: PropTypes.string,
  /**
   * The select will appear with the gradient box with icon to the right.
   */
  buttonShow: PropTypes.bool,
  /**
   * A class name added to the select.
   */
  className: PropTypes.string,
  /**
   * Make the selected disabled
   */
  disabled: PropTypes.bool,
  /**
   * The error message in the error box.
   */
  errorMsg: PropTypes.string,
  /**
   * The form the select belongs to.
   */
  formId: PropTypes.string,
  /**
   * A function that is called when changing the `<Select />`.
   */
  handleChange: PropTypes.func.isRequired,
  /**
   * The label is required for accessibilty even if you assign a default value.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name for the select is required for accessibilty purposes of attaching a unique id.
   */
  name: PropTypes.string.isRequired,
  /**
   * The options is the array of objects containing the name and value of each select row.
   */
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool]),
  ).isRequired,
  /**
   * The value is the optional preselected default option to appear in the select.
   */
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Select.defaultProps = {
  buttonClick: () => {},
  buttonIcon: 'navigate',
  buttonShow: false,
  className: '',
  disabled: false,
  errorMsg: '',
  formId: '',
  selectedValue: '',
};

export default Select;
