import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import SystemIcon from '../../icon/SystemIcon';
import { ErrorBox } from '../core';

import {
  INPUT_TYPES as TYPES,
  SYSTEM_ICONS as ICONS,
} from '../../../utils/constants';

import './input.less';

class Input extends Component {
  /* eslint-disable react/destructuring-assignment */
  state = {
    value: this.props.value,
    isValid: true,
    isDate:
      this.state.htmlType === 'month' ||
      this.state.htmlType === 'datetime-local' ||
      this.state.htmlType === 'week',
  };
  /* eslint-enable react/destructuring-assignment */

  checkValiditiy = () => {
    const { htmlType } = this.props;
    const { value } = this.state;
    let valid = true;

    switch (htmlType) {
      case 'email': {
        // eslint-disable-next-line no-useless-escape
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(value);
        break;
      }
      case 'password': {
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
        passwordSatisfiesThree(value);
        break;
      }
      case 'url': {
        const pattern = new RegExp(
          '^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$',
          'i',
        ); // fragment locator
        valid = pattern.test(value);
        break;
      }
      default: {
        valid = true;
      }
    }

    this.setState({
      isValid: valid,
    });
  };

  handleChange = event => {
    const { handleChange } = this.props;
    const { value } = event.target;

    this.setState({
      value,
    });

    handleChange(value);
  };

  render() {
    const {
      btnOptions,
      className,
      disabled,
      errorIcon,
      errorMsg,
      formId,
      helperText,
      htmlType,
      icon,
      label,
      max,
      min,
      name,
      placeholder,
    } = this.props;

    const { value, isValid, isDate } = this.state;
    const { btnClick, btnIcon } = btnOptions;

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
        <label htmlFor={name}>{label}</label>
        {helperText && (
          <div className="ce-input__helper-text">{helperText}</div>
        )}
        <div className="ce-input--box">
          <div className="ce-input--wrapping-div">
            {icon && (
              <div className="ce-input__icon">
                <SystemIcon name={icon} />
              </div>
            )}
            <input
              disabled={disabled}
              form={formId}
              icon={icon}
              max={max}
              min={min}
              name={name}
              onBlur={this.checkValiditiy}
              onChange={this.handleChange}
              placeholder={placeholder}
              type={htmlType}
              value={value}
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

            {btnIcon && (
              <button
                className="ce-input--gradient-button"
                onClick={btnClick}
                type="button"
              >
                <SystemIcon name={btnIcon} color="white" />
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
   * The options to configure the (optional) right-side button.
   * `btnClick` is a function to trigger when the `<Input />` button is clicked.
   * `btnIcon` is the icon you would like as the `<Input />` button label.
   */
  btnOptions: PropTypes.shape({
    btnClick: PropTypes.func,
    btnIcon: PropTypes.oneOf([...ICONS, '']),
  }),
  /**
   * A class name, or string of class names, to add to the `<Input />`.
   */
  className: PropTypes.string,
  /**
   * Disables the `<Input />`.
   */
  disabled: PropTypes.bool,
  /**
   * The default error styling is the outlined input with the error message box.  This errorIcon styling selection replaces that default error styling.
   */
  errorIcon: PropTypes.bool,
  /**
   * An error message to display in the `<Input />`.
   */
  errorMsg: PropTypes.string,
  /**
   * The id of the form the `<Input />` belongs to.
   */
  formId: PropTypes.string,
  /**
   * A function to trigger when the state of the `<Input />` changes.
   */
  handleChange: PropTypes.func,
  /**
   * Any text to assist the user with this `<Input />`.
   */
  helperText: PropTypes.string,
  /**
   * The html type of the `<Input />`.
   */
  htmlType: PropTypes.oneOf(TYPES),
  /**
   * An icon to include on the left side of the `<Input />`.
   */
  icon: PropTypes.string,
  /**
   * The `<Input />` label.
   */
  label: PropTypes.string.isRequired,
  /**
   *  The latest date, or largest number to accept as valid input.
   *  Note that the date and time format will vary depending on the type of input and the max must match that format.
   */
  max: PropTypes.string,
  /**
   *  The earliest date, or smallest number to accept as valid input.
   *  Note that the date and time format will vary depending on the type of input and the min must match that format.
   */
  min: PropTypes.string,
  /**
   * The name given to the `<Input />`. It connects the label to the `<Select />`.
   */
  name: PropTypes.string.isRequired,
  /**
   * Placeholder text for the `<Input />`/
   */
  placeholder: PropTypes.string,
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
  btnOptions: {
    btnClick: () => {},
    btnIcon: '',
  },
  className: '',
  disabled: false,
  errorIcon: null,
  errorMsg: '',
  formId: () => {},
  handleChange: () => {},
  helperText: '',
  htmlType: 'text',
  icon: '',
  max: '',
  min: '',
  placeholder: '',
};

export default Input;
