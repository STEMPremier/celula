/* eslint-disable no-case-declarations */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './input.less';

import { ErrorBox } from '../core';

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
  'text',
  'time',
  'url',
  'week',
];

class Input extends Component {
  state = {
    value: this.props.value,
    isValid: true,
    hasIcon: !!this.props.icon,
    isDate: false,
  };

  componentDidMount = () => {
    const { htmlType } = this.props;
    if (
      htmlType === 'month' ||
      htmlType === 'datetime-local' ||
      htmlType === 'week'
    ) {
      this.setState({
        isDate: true,
      });
    }
  };

  checkValiditiy = () => {
    let valid = true;

    switch (this.props.htmlType) {
      case 'email':
        // eslint-disable-next-line no-useless-escape
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(
          this.state.value,
        );
        break;
      case 'password':
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
            valid = true;
          } else {
            valid = false;
          }
        };
        passwordSatisfiesThree(this.state.value);
        break;
      case 'url':
        const pattern = new RegExp(
          '^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$',
          'i',
        ); // fragment locator
        valid = pattern.test(this.state.value);
        break;
      default:
        valid = true;
    }

    // sets state for all types depending on the isValid boolean
    if (valid === false) {
      this.setState({
        isValid: false,
      });
    } else {
      this.setState({
        isValid: true,
      });
    }
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const {
      className,
      disabled,
      errorIcon,
      errorMsg,
      gradientIconBoxClick,
      helperText,
      htmlType,
      icon,
      label,
      // toolTip,
      max,
      min,
      name,
      placeholderText,
      showGradientIconBox,
      // validators,
    } = this.props;

    const { value, isValid, hasIcon, isDate } = this.state;

    const classes = cx(
      'ce-input',
      {
        [`ce-input--${htmlType}`]: TYPES.includes(
          htmlType.toString().toLowerCase(),
        ),
        'ce-input--disabled': disabled,
        'ce-input--error': !isValid || errorMsg,
        'ce-input--error-icon': errorIcon,
      },
      className,
    );

    return (
      <div className={classes}>
        <label className="ce-input--label" htmlFor={name}>
          {label}
        </label>
        {helperText && (
          <div className="ce-input--helper-text">{helperText}</div>
        )}
        <div className="ce-input--box">
          <div className="ce-input--wrapping-div">
            {hasIcon && (
              <div className="ce-input--icon">
                <SystemIcon name={icon} />
              </div>
            )}
            <input
              name={name}
              type={htmlType}
              placeholder={placeholderText}
              value={value}
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
            {((!isValid && errorIcon) || (errorMsg && errorIcon)) && (
              <span className="ce-input--error-icon">
                <SystemIcon name="warning" color="red" />
                <span className="ce-input--error-icon-text">{errorMsg}</span>
              </span>
            )}

            {showGradientIconBox && (
              <button
                className="ce-input--gradient-button"
                onClick={gradientIconBoxClick}
                type="submit"
              >
                <SystemIcon
                  name="navigate"
                  className="ce-input--icon-in-box"
                  color="white"
                />
              </button>
            )}
          </div>
        </div>

        {((!isValid && !errorIcon) || (errorMsg && !errorIcon)) && (
          <ErrorBox errorMsg={errorMsg || 'Invalid Response'} />
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
   * The default error styling is the outlined input with the error message box.  This errorIcon styling selection replaces that default error styling.
   */
  errorIcon: PropTypes.bool,
  /**
   * The error message that will appear in the error box below the input.  The presence of the error message automatically triggers error state on the component.
   */
  errorMsg: PropTypes.string,
  /**
   * This function is accesible to the user for clickable events on the right arrow in the gradient
   */
  gradientIconBoxClick: PropTypes.func,
  /**
   * The helper text is above the input but is seperate from the label.  An example would be "This can be a high level summary like 'I serve foos to homeless people'."
   */
  helperText: PropTypes.string,
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
  /**
   * Placeholder text inside the `<Input />`.
   */
  placeholderText: PropTypes.string,
  // validators:
  // toolTip: PropTypes.string,
  /**
   * This will make the right arrow button appear with the `<Input />`.
   */
  showGradientIconBox: PropTypes.bool,
  // toolTip: PropTypes.string,
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
  errorIcon: null,
  errorMsg: '',
  helperText: '',
  icon: '',
  placeholderText: '',
  // toolTip: null,
  htmlType: 'text',
  showGradientIconBox: false,
  min: '',
  max: '',
  gradientIconBoxClick: () => {},
};

export default Input;
