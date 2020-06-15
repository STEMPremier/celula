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

  handleSelectedValue = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const {
      className,
      disabled,
      errorMsg,
      name,
      formId,
      handleChange,
      label,
      options,
      showIcon,
      rightIconClick,
      icon,
    } = this.props;

    const { showLabel, selectedValue } = this.state;

    const id = `${name}`;

    const classes = cx(
      'ce-select',
      {
        'ce-select--disabled': disabled,
        'ce-select--error': errorMsg,
        'ce-select--show-icon': showIcon,
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
            onClick={handleChange}
            value={selectedValue}
            onChange={this.handleSelectedValue}
          >
            <option key={label}>{label}</option>
            {options.map(item => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          {showIcon && (
            <button
              className="ce-select__button"
              onClick={rightIconClick}
              type="button"
            >
              <SystemIcon
                name={icon}
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
   * A class name added to the select.
   */
  className: PropTypes.string,
  /**
   * Make the selected disabled
   */
  disabled: PropTypes.bool,
  /**
   * The select will appear with the gradient box with icon to the right.
   */
  showIcon: PropTypes.bool,
  /**
   * The label is required for accessibilty even if you assign a default value.
   */
  label: PropTypes.string.isRequired,
  /**
   * The value is the optional preselected default option to appear in the select.
   */
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The form the select belongs to.
   */
  formId: PropTypes.string,
  /**
   * The name for the select is required for accessibilty purposes of attaching a unique id.
   */
  name: PropTypes.string.isRequired,
  /**
   * A function that is called when changing the `<Select />`.
   */
  handleChange: PropTypes.func.isRequired,
  /**
   * Assign an icon to go in the gradient right hand square.  If you use the showIcon prop as true, this icon will default to "navigate".  See the <SystemIcon /> for more options on what to enter into this icon prop.
   */
  icon: PropTypes.string,
  /**
   * The error message in the error box.
   */
  errorMsg: PropTypes.string,
  /**
   * The options is the array of objects containing the name and value of each select row.
   */
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool]),
  ).isRequired,
  /**
   * This function is accesible to the user for clickable events on the icon in the gradient to the right.
   */
  rightIconClick: PropTypes.func,
};

Select.defaultProps = {
  className: '',
  disabled: false,
  formId: '',
  errorMsg: '',
  selectedValue: '',
  showIcon: false,
  icon: 'navigate',
  rightIconClick: () => {},
};

export default Select;
