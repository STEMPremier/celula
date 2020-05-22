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
    valid: this.props.error !== true,
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

    // keep the default valid state of false if coming from the boolean

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
    // console.log('handleChange props', this.props);
    // put min and max checks in the IF statements here when applicable
    const { htmlType } = this.props;
    if (htmlType === 'month') {
      console.log('event.target.value', event.target.value);
      console.log('min', this.props.min);
      console.log('max', this.props.max);
    }
    if (
      htmlType === 'text' ||
      htmlType === 'email' ||
      htmlType === 'password' ||
      htmlType === 'url' ||
      htmlType === 'search'
    ) {
      this.setState({
        value: event.target.value,
      });
      // }
      // if (htmlType === 'datetime-local' || htmlType) {
      // console.log('inside datetime handleChange', event.target.value);
      // }
      // this.checkValiditiy();
    }
  };

  // handleClick = event => {
  //   // console.log('clicked', event.target);
  //   if (this.props.htmlType === 'text' || this.props.htmlType === 'email') {
  //     this.setState({
  //       value: event.target.value,
  //     });
  //   }
  //   if (this.props.htmlType === 'datetime-local') {
  //     console.log(event.target.value);
  //   }
  // };

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
      // value,
    } = this.props;

    const { value, startDate, valid } = this.state;

    console.log('valid', valid);

    const classes = cx(
      'ce-input',
      {
        [`ce-input--${htmlType}`]: TYPES.includes(
          htmlType.toString().toLowerCase(),
        ),
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
            // onClick={this.handleClick}
            onChange={this.handleChange}
            onBlur={this.checkValiditiy}
            icon={icon}
            disabled={disabled}
            min={min}
            max={max}
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
  htmlType: PropTypes.oneOf([...TYPES, 'default']),
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
  htmlType: 'text',
  showArrow: false,
  min: '',
  max: '',
  rightArrowClick: () => {},
};

export default Input;
