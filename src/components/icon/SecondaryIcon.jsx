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

import { nameOrText } from '../../utils/propValidators';
import { COLORS, SIZES } from '../../utils/constants';

import './icons/icons.svg';
import './icon.less';

/**
 * These light icons are mostly used as an actionable element.
 * Alternatively, they can be used as avatars or indicators with two varying gradient options.
 */
const SecondaryIcon = ({
  className,
  color,
  name,
  size,
  style,
  text,
  title,
}) => {
  /* eslint-disable prettier/prettier */
  const classes = cx(
    'ce-icon',
    'ce-icon__secondary',
    {
      [`ce-icon--${size}`]: SIZES.includes(size.toString().toLowerCase()),
      [`ce-icon--${color}`]: COLORS.includes(color.toString().toLowerCase()),
    },
    className,
  );
  /* eslint-enable prettier/prettier */

  const renderContents = () => {
    let contents;

    if (name) {
      contents = (
        <svg aria-hidden={!title} className="ce-icon--white" role="img">
          <title>{title || name}</title>
          <use xlinkHref={`#icons_secondary-${name}`} />
        </svg>
      );
    }

    if (text) {
      contents = <span className="ce-icon--text">{text}</span>;
    }

    return contents;
  };

  return (
    <span className={classes} style={style}>
      {renderContents()}
    </span>
  );
};

SecondaryIcon.propTypes = {
  /**
   * A class name, or string of class names, to add to the `<SecondaryIcon />`.
   */
  className: PropTypes.string,
  /**
   * The color of the `<SecondaryIcon />` background gradient.
   */
  // color: PropTypes.oneOf(COLORS),
  color: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * The `<SecondaryIcon />`.
   */
  name: nameOrText,
  /**
   * The size you want the `<SecondaryIcon />` to be.
   */
  // size: PropTypes.oneOf(SIZES),
  size: PropTypes.oneOf(['small', 'large', 'jumbo']),
  /**
   * Any inline styles you would like to add to the `<SecondaryIcon />`. See the React [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * Up to 2 characters you would like in the `<SecondaryIcon />`, rather than a predefined one.
   */
  text: nameOrText,
  /**
   * By default, we hide SecondaryIcons from assitive technologies,
   * such as screen readers, because there should be useful text
   * associated with most icons.
   *
   * If you need to use an icon with no text, just add a descriptive title,
   * and the icon will no longer be hidden from those technologies.
   */
  title: PropTypes.string,
};

SecondaryIcon.defaultProps = {
  className: '',
  color: 'primary',
  name: '',
  size: 'small',
  style: {},
  text: '',
  title: '',
};

export default SecondaryIcon;
