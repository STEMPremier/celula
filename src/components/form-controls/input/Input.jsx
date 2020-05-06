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
];

const ICON = ['get icons to plus in here?????'];

const SIZE = ['small', 'large', 'jumbo'];

class Input extends React.Component {
  state = {
    value: '',
  };

  handleChange = event =>
    this.setState({
      value: [event.target.value],
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
      tooltip,
      validators,
      value,
    } = this.props;

    return (
      <div>
        <label label={label} />

        <input
          className={classes}
          type={htmlType}
          value={value}
          toolTip={toolTip}
          onChange={this.handleChange}
          icon={icon}
          disabled={disabled}
        />
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
  label: PropTypes.string,
  required,
  size: PropTypes.string,
  toolTip: PropTypes.string,
  // validators:
  value: PropTypes.any.required,
};

Input.defaultProps = {
  className: '',
  disabled: false,
  error: '',
  htmlType: 'text',
};
