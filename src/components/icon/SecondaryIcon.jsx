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

import { COLORS, SECONDARY_ICONS, SIZES } from '../../utils/constants';

import './icons/icons.svg';
import './icon.less';

/* eslint-disable no-unused-vars */
// Our custom props validator. I am not in love with the name, but a descriptive name was absurdly long.
function nameOrText(props, propName, componentName = 'SecondaryIcon') {
  const types = ['name', 'text'];
  const otherProp = types.filter(e => e !== propName)[0]; // filter returns an array, I just need the element.

  let error;

  // First make sure we have at least one of them.
  if (!props[propName] && !props[otherProp]) {
    error = new Error(
      `${propName} and ${otherProp} are blank. You must provide one or the other.`,
    );
  }

  // If we have a name, we need to make sure it is in the list.
  if (props.name && !SECONDARY_ICONS.includes(props.name)) {
    error = new Error(
      `Invalid prop: name. Prop must be one of ${SECONDARY_ICONS.join(', ')}.`,
    );
  }

  // If we have text, it can't be longer than 2 characters.
  if (props.text && props.text.length > 2) {
    error = new Error(
      `Invalid prop: text. Prop cannot be longer than 2 characters.`,
    );
  }

  // And lastly, you can have one OR the other, not both.
  if (props[propName] && props[otherProp]) {
    error = new Error(
      `${propName} and ${otherProp} both have values. You must provide one or the other, but not both`,
    );
  }

  return error;
}
/* eslint-enable no-unused-vars */

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
