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

import Button from '../../button';

// import { BUTTON_TYPES as TYPES, COLORS, SIZES } from '../../../utils/constants';

/**
 * A `SubmitButton` allows users to submit forms with a single tap. They are typically placed
 * throughout your UI in every form.
 *
 * A `SubmitButton` does not have a `handleClick` prop. That is because clicking it submits
 * the form that `SubmitButton` is a part of/associated with, rather than triggering a function
 * attached directly to it.
 */
const SubmitButton = ({
  children,
  className,
  color,
  disabled,
  size,
  style,
  type,
}) => (
  <Button
    className={className}
    color={color}
    disabled={disabled}
    handleClick={() => {}}
    htmlType="submit"
    size={size}
    style={style}
    type={type}
  >
    {children}
  </Button>
);

SubmitButton.propTypes = {
  /**
   * The `SubmitButton` label.
   */
  children: PropTypes.string.isRequired,
  /**
   * A class name, or a string of class names, to add to the `SubmitButton`.
   */
  className: PropTypes.string,
  /**
   * The color of the `SubmitButton`.
   */
  // color: PropTypes.oneOf(COLORS),
  color: PropTypes.oneOf(['primary', 'secondary', 'black', 'inverted']),
  /**
   * Disables the `SubmitButton`.
   */
  disabled: PropTypes.bool,
  /**
   * The size of the `SubmitButton`.
   */
  // size: PropTypes.oneOf(SIZES),
  size: PropTypes.oneOf(['small', 'large', 'jumbo']),
  /**
   * Any inline styles you would like to add to the `SubmitButton`. See the React
   * [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * Which type of `SubmitButton` to render.
   */
  // type: PropTypes.oneOf(TYPES),
  type: PropTypes.oneOf(['solid', 'outline', 'text']),
};

SubmitButton.defaultProps = {
  className: '',
  color: 'primary',
  disabled: false,
  size: 'small',
  style: {},
  type: 'solid',
};

export default SubmitButton;
