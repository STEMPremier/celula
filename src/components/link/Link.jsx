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

import './link.less';

import { COLORS, LINK_TEXT_STYLES as TYPES } from '../../utils/constants';

/**
 * Typically `Links` are used inline with a paragraph while standard all caps complement button groups or individually.
 */
const Link = ({ className, textStyle, color, address, style, text }) => {
  const classes = cx(
    'ce-link',
    {
      [`ce-link--${textStyle}`]: TYPES.includes(
        textStyle.toString().toLowerCase(),
      ),
      [`ce-link--${color}`]: COLORS.includes(color.toString().toLowerCase()),
    },
    className,
  );

  return (
    <a className={classes} href={address} style={style}>
      {text}
    </a>
  );
};

Link.propTypes = {
  /**
   * The http address the `<Link />` points to.
   */
  address: PropTypes.string.isRequired,
  /**
   * A class name, or string of class names, to add to the `<Link />`.
   */
  className: PropTypes.string,
  /**
   * The color of the `<Link />`.
   */
  // color: PropTypes.oneOf(COLORS),
  color: PropTypes.oneOf(['primary', 'secondary', 'black', 'inverted']),
  /**
   * Any inline styles you would like to add to the `<Link />`. See the React [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * The text the `<Link />` displays.
   */
  text: PropTypes.string.isRequired,
  /**
   * The `<Link />` text type.
   */
  // textStyle: PropTypes.oneOf(TYPES),
  textStyle: PropTypes.oneOf(['lowercase', 'uppercase']),
};

Link.defaultProps = {
  className: '',
  color: 'primary',
  style: {},
  textStyle: 'uppercase',
};

export default Link;
