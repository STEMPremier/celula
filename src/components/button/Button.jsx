import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { BUTTON_TYPES as TYPES, COLORS, SIZES } from '../../utils/constants';

import './button.less';

/**
 * `Buttons` allow users to take actions, and make choices, with a single tap. They are typically placed throughout your UI, in places like dialogs, modal windows, forms, cards, and toolbars.
 */
const Button = ({
  children,
  className,
  color,
  handleClick,
  htmlType,
  size,
  type,
  disabled,
}) => {
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
   * The `<Button />` label.
   */
  children: PropTypes.string.isRequired,
  /**
   * A class name, or string of class names, to add to the `<Button />`.
   */
  className: PropTypes.string,
  /**
   * The color of the `<Button />`.
   */
  color: PropTypes.oneOf(COLORS),
  /**
   * Disables the `<Button />`.
   */
  disabled: PropTypes.bool,
  /**
   * A function to trigger when the `<Button />` is clicked.
   */
  handleClick: PropTypes.func.isRequired,
  /**
   * The type of `<Button />`. This should always be `button` unless you are making a `<SubmitButton />`.
   *
   * @ignore
   */
  htmlType: PropTypes.oneOf(['button', 'submit']),
  /**
   * The size of the `<Button />`.
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * Which type of `<Button />` to render.
   */
  type: PropTypes.oneOf(TYPES),
};

Button.defaultProps = {
  className: '',
  color: 'primary',
  disabled: false,
  htmlType: 'button',
  size: 'large',
  type: 'default',
};

export default Button;
