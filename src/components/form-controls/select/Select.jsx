import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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
    } = this.props;

    const { showLabel, selectedValue } = this.state;

    const id = `${name}`;

    const classes = cx(
      'ce-select',
      {
        'ce-select--disabled': disabled,
        'ce-select--error': errorMsg,
        'ce-select--show-arrow': showIcon,
      },
      className,
    );

    return (
      <div className={classes}>
        {showLabel && <label htmlFor={id}>{label}</label>}
        <div className="ce-select--box">
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
              className="ce-select--outside-arrow"
              onClick={rightIconClick}
              type="button"
            >
              <SystemIcon
                name="navigate"
                className="ce-select--arrow"
                color="white"
              />
            </button>
          )}
        </div>
        <div className="ce-select--background-state" />
        {errorMsg && (
          <div className="ce-select--error-box-wrapper">
            <div className="ce-select--arrow" />
            <div className="ce-select--error-box">
              <div className="ce-select--error-box-text">{errorMsg}</div>
            </div>
          </div>
        )}
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
   * The select will appear with the right arrow
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
   * This function is accesible to the user for clickable events on the right arrow in the gradient
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
  rightIconClick: () => {},
};

export default Select;
