import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './button.less';

const COLORS = [
  'primary',
  'secondary',
  'blue',
  'red',
  'purple',
  'orange',
  'green',
];

const SIZE = ['small', 'large', 'jumbo'];

const TYPE = ['text', 'outline'];

const Button = props => {
  const {
    children,
    className,
    color,
    handleClick,
    htmlType,
    size,
    type,
    disabled,
  } = props;

  const classes = cx(
    'ce-button',
    {
      [`ce-button--${type}`]: TYPE.includes(type.toString().toLowerCase()),
      [`ce-button--${size}`]: SIZE.includes(size.toString().toLowerCase()),
      [`ce-button--${color}`]: COLORS.includes(color.toString().toLowerCase()),
      'ce-button--disabled': disabled,
    },
    className,
  );

  /* eslint-disable react/button-has-type */
  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={handleClick}
      type={htmlType}
    >
      <span className="ce-button__label">{children}</span>
    </button>
  );
  /* eslint-enable react/button-has-type */
};

Button.propTypes = {
  /**
   * The text of the button.
   */
  children: PropTypes.string.isRequired,
  /**
   * A class name added to the button.
   */
  className: PropTypes.string,
  /**
   * The color of the button.
   */
  color: PropTypes.oneOf(COLORS),
  /**
   * A function that is called when the button is clicked.
   */
  handleClick: PropTypes.func.isRequired,
  /**
   * The type of button. This should always be `button` unless you are making a SubmitButton.
   *
   * @ignore
   */
  htmlType: PropTypes.oneOf(['button', 'submit']),
  /**
   * Make the button inactive.
   */
  disabled: PropTypes.bool,
  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(SIZE),
  /**
   * Which type of button to render.
   */
  type: PropTypes.oneOf(TYPE),
};

Button.defaultProps = {
  className: '',
  color: 'default',
  htmlType: 'button',
  size: 'small',
  type: 'default',
  disabled: false,
};

export default Button;
