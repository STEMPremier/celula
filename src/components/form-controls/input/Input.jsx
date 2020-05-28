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

// const ICON = ['get icons to plus in here?????'];

// const SIZES = ['small', 'large', 'jumbo'];

class Input extends Component {
  state = {
    value: this.props.value,
    valid: this.props.error !== true,
    hasIcon: this.props.icon.length > 1,
    isDate: false,
  };

  componentDidMount = () => {
    if (this.props.htmlType === 'month') {
      this.setState({
        isDate: true,
      });
    }
    console.log('setting isDate to true');
  };

  // make a switch statement eventually
  checkValiditiy = () => {
    let isValid = true;

    if (this.props.htmlType === 'email') {
      // eslint-disable-next-line no-useless-escape
      isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        this.state.value,
      );
    }

    if (this.props.htmlType === 'password') {
      const minLength = 8;
      const passwordLongEnough = password =>
        !!(password && password.length >= minLength);

      const passwordHasUppercase = password =>
        !!(password && /[A-Z]/g.test(password));

      const passwordHasLowercase = password =>
        !!(password && /[a-z]/g.test(password));

      const passwordHasNumber = password =>
        !!(password && /[0-9]/g.test(password));

      const passwordHasSpecial = password =>
        !!(password && /[^A-Za-z0-9]/g.test(password));

      const passwordSatisfiesThree = password => {
        let count = 0;
        if (passwordHasUppercase(password)) count += 1;
        if (passwordHasLowercase(password)) count += 1;
        if (passwordHasNumber(password)) count += 1;
        if (passwordHasSpecial(password)) count += 1;
        const min8 = passwordLongEnough(password);
        if (count > 2 && min8 === true) {
          isValid = true;
        } else {
          isValid = false;
        }
      };
      passwordSatisfiesThree(this.state.value);
    }

    if (this.props.htmlType === 'url') {
      const pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$',
        'i',
      ); // fragment locator
      isValid = pattern.test(this.state.value);
    }
    // sets state for all types depending on the isValid boolean
    if (isValid === false) {
      this.setState({
        valid: false,
      });
    } else {
      this.setState({
        valid: true,
      });
    }
  };

  // note that the datetime-local handleChange only works when you have filled in the time.  Need more instruction about how to handle time before moving forward with datetime-local.
  handleChange = event => {
    // const { htmlType } = this.props;
    // if (htmlType === 'month') {
    //   console.log('event.target.value', event.target.value);
    //   console.log('min', this.props.min);
    //   console.log('max', this.props.max);
    // }
    // if (
    //   htmlType === 'text' ||
    //   htmlType === 'email' ||
    //   htmlType === 'password' ||
    //   htmlType === 'url' ||
    //   htmlType === 'search'
    // ) {
    this.setState({
      value: event.target.value,
    });
    // }
    // if (htmlType === 'datetime-local' || htmlType) {
    // console.log('inside datetime handleChange', event.target.value);
    // }
    // }
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
      htmlType,
      name,
      min,
      max,
      rightArrowClick,
      showArrow,
      // validators,
    } = this.props;

    const { value, valid, hasIcon, isDate } = this.state;

    const classes = cx(
      'ce-input',
      {
        [`ce-input--${htmlType}`]: TYPES.includes(
          htmlType.toString().toLowerCase(),
        ),
        // [`ce-input--${size}`]: SIZES.includes(size.toString().toLowerCase()),
        // [`ce-input--${icon}`]: ICON.includes(icon.toString().toLowerCase()),
        'ce-input--disabled': disabled,
        'ce-input--error': !valid,
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
          {hasIcon && (
            <div className="ce-input--icon">
              <SystemIcon name={icon} />
            </div>
          )}
          <input
            name={name}
            type={htmlType}
            value={value}
            toolTip={toolTip}
            size={size}
            onChange={this.handleChange}
            onBlur={this.checkValiditiy}
            icon={icon}
            disabled={disabled}
            min={min}
            max={max}
          />
          {isDate && (
            <div className="ce-input--date-icon">
              <SystemIcon name="calendar" />
            </div>
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

        {valid === false && (
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
  /**
   * A class name added to the `<Input />`.
   */
  className: PropTypes.string,
  /**
   * Make the `<Input />` inactive.
   */
  disabled: PropTypes.bool,
  /**
   * Make the `<Input />` display in error state.
   */
  error: PropTypes.string,
  /**
   * The error message that will appear in the error box below the input.
   */
  errorMessage: PropTypes.string,
  /**
   * The type of the `<Input />`.  Commonly used types include text, email, url, hidden, month, week, datetime-local, time, file, password, search, tel, and color.
   */
  htmlType: PropTypes.oneOf([...TYPES, 'default']),
  /**
   * Make an icon appear in the `<Input />`.
   */
  icon: PropTypes.string,
  /**
   * The `<Input />` label.
   */
  label: PropTypes.string.isRequired,
  /**
   *  The latest date to accept as a valid input.  Note that the date and time format will vary depending on the type of input and the max must match that format.
   */
  max: PropTypes.string,
  /**
   *  The earliest date to accept as a valid input.  Note that the date and time format will vary depending on the type of input and the min must match that format.
   */
  min: PropTypes.string,
  /**
   * The name of the `<Input />`.
   */
  name: PropTypes.string.isRequired,
  // validators:
  /**
   * This function is accesible to the user for clickable events on the right arrow in the gradient
   */
  rightArrowClick: PropTypes.func,
  /**
   * The size of the `<Input />`.  Options include 'small', 'large', and 'jumbo'.
   */
  size: PropTypes.string,
  // toolTip: PropTypes.string,
  /**
   * This will make the right arrow button appear with the `<Input />`.
   */
  showArrow: PropTypes.bool,
  toolTip: PropTypes.string,
  /**
   * The value of the `<Input />`.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

Input.defaultProps = {
  className: '',
  disabled: false,
  error: false,
  errorMessage: '',
  icon: '',
  size: 'small',
  toolTip: null,
  htmlType: 'text',
  showArrow: false,
  min: '',
  max: '',
  rightArrowClick: () => {},
};

export default Input;
