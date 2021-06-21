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

// import { COLORS, SIZES, SYSTEM_ICONS } from '../../utils/constants';
import { SIZES } from '../../utils/constants';

import './icons/icons.svg';
import './icon.less';

/**
 * System icons are designed to be simple, modern and friendly.
 * Each icon is reduced to its minimal form, expressing essential characteristics within the
 * interface.
 */
const SystemIcon = ({ className, color, name, size, style, title }) => {
  const classes = cx(
    'ce-icon',
    'ce-icon__system',
    {
      [`ce-icon--${size}`]: SIZES.includes(size.toString().toLowerCase()),
    },
    className,
  );

  return (
    <span className={classes} style={style}>
      <svg
        aria-hidden={!title}
        className={color && `ce-icon--${color}`}
        role="img"
      >
        <title>{title || name}</title>
        <use xlinkHref={`#icons_system-${name}`} />
      </svg>
    </span>
  );
};

SystemIcon.propTypes = {
  /**
   * A class name, or a string of class names, to add to the `SystemIcon`.
   */
  className: PropTypes.string,
  /*
   * The color of the `SystemIcon`
   */
  // color: PropTypes.oneOf(['', ...COLORS]),
  color: PropTypes.oneOf(['', 'primary', 'secondary', 'black', 'inverted']),
  /**
   * The `SystemIcon`.
   */
  // name: PropTypes.oneOf(SYSTEM_ICONS).isRequired,
  name: PropTypes.oneOf([
    'share',
    'preview',
    'export',
    'follow',
    'message',
    'badges',
    'website',
    'edit',
    'clear',
    'navigate',
    'down',
    'up',
    'user',
    'visibility',
    'help',
    'close',
    'calendar',
    'warning',
    'add',
    'filter',
    'menu',
    'search',
    'tutorial',
    'yes',
    'no',
    'hobby',
    'interest',
    'outdoor',
    'indoor',
    'popular',
  ]).isRequired,
  /**
   * The size you want the `SystemIcon` to be.
   */
  // size: PropTypes.oneOf(SIZES),
  size: PropTypes.oneOf(['small', 'large', 'jumbo']),
  /**
   * Any inline styles you would like to add to the `SystemIcon`. See the React
   * [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * By default, we hide `SystemIcons` from assitive technologies,
   * such as screen readers, because there should be useful text
   * associated with most icons.
   *
   * If you need to use an icon with no text, just add a descriptive title,
   * and the icon will no longer be hidden from those technologies.
   */
  title: PropTypes.string,
};

SystemIcon.defaultProps = {
  className: '',
  color: '',
  size: 'large',
  style: {},
  title: '',
};

export default SystemIcon;
