import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './button.less';

const COLORS = [
  'primary',
  'secondary',
  'blue',
  'green',
  'orange',
  'purple',
  'red',
];
const SIZES = ['small', 'large', 'jumbo'];
const TYPES = ['text', 'outline'];

/**
 * `Buttons` allow users to take actions, and make choices, with a single tap. They are typically placed throughout your UI, in places like dialogs, modal windows, forms, cards, and toolbars.
 */
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
      [`ce-button--${type}`]: TYPES.includes(type.toString().toLowerCase()),
      [`ce-button--${size}`]: SIZES.includes(size.toString().toLowerCase()),
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
   * Make the button inactive.
   */
  disabled: PropTypes.bool,
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
   * The size of the button.
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * Which type of button to render.
   */
  type: PropTypes.oneOf([...TYPES, 'default']),
};

Button.defaultProps = {
  className: '',
  color: 'primary',
  disabled: false,
  htmlType: 'button',
  size: 'small',
  type: 'default',
};

export default Button;
