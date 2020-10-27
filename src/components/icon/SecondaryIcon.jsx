/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { COLORS, SECONDARY_ICONS, SIZES } from '../../utils/constants';

import './icons/icons.svg';
import './icon.less';

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

/**
 * These light icons are mostly used as an actionable element.
 * Alternatively, they can be used as avatars or indicators with two varying gradient options.
 */
const SecondaryIcon = ({ color, name, size, text }) => {
  /* eslint-disable prettier/prettier */
  const classes = cx(
    'ce-icon',
    'ce-icon__secondary',
    {
      [`ce-icon--${size}`]: SIZES.includes(size.toString().toLowerCase()),
      [`ce-icon--${color}`]: COLORS.includes(color.toString().toLowerCase()),
    },
  );
  /* eslint-enable prettier/prettier */

  const renderContents = () => {
    let contents;

    if (name) {
      contents = (
        <svg className="ce-icon--white">
          <use xlinkHref={`#icons_secondary-${name}`} />
        </svg>
      );
    }

    if (text) {
      contents = <span className="ce-icon--text">{text}</span>;
    }

    return contents;
  };

  return <span className={classes}>{renderContents()}</span>;
};

SecondaryIcon.propTypes = {
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
   * Up to 2 characters you would like in the `<SecondaryIcon />`, rather than a predefined one.
   */
  text: nameOrText,
};

SecondaryIcon.defaultProps = {
  color: 'primary',
  name: '',
  size: 'small',
  text: '',
};

export default SecondaryIcon;
