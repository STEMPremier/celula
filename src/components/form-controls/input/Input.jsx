/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './input.less';

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
      },
      className,
    );

    return (
      <div>
        <label label={label} />

        <input
          className={classes}
          type={htmlType}
          value={value}
          toolTip={toolTip}
          size={size}
          onChange={this.handleChange}
          icon={icon}
          disabled={disabled}
        />
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
};

export default Input;
