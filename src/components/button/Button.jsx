/* Copyright 2020 Tallo Inc.,
 *
 * This file is part of Celula.
 *
 * Celula is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
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
  style,
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
      style={style}
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
  // color: PropTypes.oneOf(COLORS),
  color: PropTypes.oneOf(['primary', 'secondary', 'black', 'inverted']),
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
  // size: PropTypes.oneOf(SIZES),
  size: PropTypes.oneOf(['small', 'large', 'jumbo']),
  /**
   * Any inline styles you would like to add to the `<Button />`. See the React [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * Which type of `<Button />` to render.
   */
  // type: PropTypes.oneOf(TYPES),
  type: PropTypes.oneOf(['solid', 'outline', 'text']),
};

Button.defaultProps = {
  className: '',
  color: 'primary',
  disabled: false,
  htmlType: 'button',
  size: 'large',
  style: {},
  type: 'solid',
};

export default Button;
