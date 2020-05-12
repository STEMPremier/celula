/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */

/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './input.less';

import SystemIcon from '../../icon/SystemIcon';

const TYPES = [
  'color',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'month',
  'number',
  'password',
  'search',
  'tel',
  'time',
  'url',
  'week',
  'text',
];

const ICON = ['get icons to plus in here?????'];

const SIZES = ['small', 'large', 'jumbo'];

class Input extends Component {
  state = {
    value: this.props.value,
  };

  handleChange = event =>
    this.setState({
      value: event.target.value,
    });

  render() {
    const {
      className,
      disabled,
      error,
      htmlType,
      icon,
      label,
      size,
      toolTip,
      type,
      name,
      rightArrowClick,
      showArrow,
      // validators,
      // value,
    } = this.props;

    const { value } = this.state;

    const classes = cx(
      'ce-input',
      {
        [`ce-input--${type}`]: TYPES.includes(type.toString().toLowerCase()),
        [`ce-input--${size}`]: SIZES.includes(size.toString().toLowerCase()),
        [`ce-input--${icon}`]: ICON.includes(icon.toString().toLowerCase()),
        'ce-input--disabled': disabled,
        'ce-input--error': error,
        'ce-input--show-arrow': showArrow,
      },
      className,
    );

    return (
      <div className={classes}>
        <label className="ce-input--label" htmlFor={name}>
          {label}
        </label>
        <div className="ce-input--box">
          <input
            name={name}
            type={htmlType}
            value={value}
            toolTip={toolTip}
            size={size}
            onChange={this.handleChange}
            icon={icon}
            disabled={disabled}
          />
          {showArrow && (
            <button
              className="ce-input--outside-arrow"
              onClick={rightArrowClick}
              type="submit"
            >
              <SystemIcon
                name="navigate"
                className="ce-input--arrow"
                color="white"
              />
            </button>
          )}
        </div>
        <div className="ce-input--background-state" />
        {error && (
          <div className="ce-input--error-box-wrapper">
            <div className="ce-input--arrow" />
            <div className="ce-input-error-box">
              <div className="ce-input--error-box-text">{error}</div>
            </div>
          </div>
        )}

        <span error={error} />
      </div>
    );
  }
}

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  htmlType: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  toolTip: PropTypes.string,
  // validators:
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  type: PropTypes.oneOf([...TYPES, 'default']),
  name: PropTypes.string.isRequired,
  /**
   * This function is accesible to the user for clickable events on the right arrow in the gradient
   */
  rightArrowClick: PropTypes.func,
  /**
   * The input will appear with the right arrow
   */
  showArrow: PropTypes.bool,
};

Input.defaultProps = {
  className: '',
  disabled: false,
  error: '',
  htmlType: 'text',
  icon: '',
  size: 'small',
  toolTip: null,
  type: 'text',
  showArrow: false,
  rightArrowClick: () => {},
};

export default Input;
