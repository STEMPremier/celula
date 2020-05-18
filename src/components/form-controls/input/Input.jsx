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
    startDate: '',
    endDate: '',
    valid: true,
  };

  checkValiditiy = () => {
    if (this.props.type === 'email') {
      console.log('props inside checkValidity email', this.props);
      console.log('state inside checkValidity email', this.state);
    }
  };

  // note that the datetime-local handleChange only works when you have filled in the time.  Need more instruction about how to handle time before moving forward with datetime-local.
  handleChange = event => {
    this.checkValiditiy();
    // console.log('handleChange props', this.props);
    if (this.props.type === 'text' || this.props.type === 'email') {
      this.setState({
        value: event.target.value,
      });
    }
    if (this.props.type === 'datetime-local') {
      // console.log('inside datetime handleChange', event.target.value);
    }
  };

  handleClick = event => {
    console.log('clicked', event.target);
    if (this.props.type === 'text') {
      this.setState({
        value: event.target.value,
      });
    }
    if (this.props.type === 'datetime-local') {
      console.log(event.target.value);
    }
  };

  render() {
    const {
      className,
      disabled,
      error,
      errorMessage,
      icon,
      label,
      size,
      toolTip,
      type,
      name,
      min,
      max,
      rightArrowClick,
      showArrow,
      // validators,
      // value,
    } = this.props;

    const { value, startDate } = this.state;

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
          {this.props.type === 'text' ||
            ('email' && (
              <input
                name={name}
                type={type}
                value={value}
                toolTip={toolTip}
                size={size}
                onClick={this.handleClick}
                onChange={this.handleChange}
                icon={icon}
                disabled={disabled}
              />
            ))}
          {this.props.type === 'datetime-local' && (
            <input
              name={name}
              type={type}
              value={startDate}
              toolTip={toolTip}
              size={size}
              onClick={this.handleClick}
              onChange={this.handleChange}
              icon={icon}
              disabled={disabled}
              min={min}
              max={max}
              // min="2018-06-07T00:00"
              // max="2018-06-14T00:00"
              // pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
            />
          )}
          {this.props.type === 'month' && (
            <input
              name={name}
              type={type}
              value={value}
              toolTip={toolTip}
              size={size}
              onClick={this.handleClick}
              onChange={this.handleChange}
              icon={icon}
              disabled={disabled}
              min={min}
              max={max}
            />
          )}
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
          <div className="ce-input--background-state" />
        </div>

        {error && (
          <div className="ce-input--error-box-wrapper">
            <div className="ce-input--arrow" />
            <div className="ce-input--error-box">
              <span className="ce-input--error-box-text" error={error}>
                {errorMessage}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  toolTip: PropTypes.string,
  errorMessage: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
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
  error: false,
  errorMessage: '',
  icon: '',
  size: 'small',
  toolTip: null,
  type: 'text',
  showArrow: false,
  min: '',
  max: '',
  rightArrowClick: () => {},
};

export default Input;
