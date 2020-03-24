/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './icons/icons.svg';
import './icon.less';

import { SECONDARY_ICONS } from './types';

const COLORS = ['primary', 'secondary'];
const SIZES = ['small', 'large', 'jumbo'];

/**
 * These light icons are mostly used as an actionable element.
 * Alternatively, they can be used as avatars or indicators with two varying gradient options.
 */
const SecondaryIcon = props => {
  const { color, name, size } = props;

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

  return (
    <span className={classes}>
      <svg className="ce-icon--white">
        <use xlinkHref={`#icons_secondary-${name}`} />
      </svg>
    </span>
  );
};

SecondaryIcon.propTypes = {
  /**
   * The color of the `<SecondaryIcon />` background gradient.
   */
  color: PropTypes.oneOf(COLORS),
  /**
   * The `<SecondaryIcon />`.
   */
  name: PropTypes.oneOf(SECONDARY_ICONS).isRequired,
  /**
   * The size you want the `<SecondaryIcon />` to be.
   */
  size: PropTypes.oneOf(SIZES),
};

SecondaryIcon.defaultProps = {
  color: 'primary',
  size: 'small',
};

export default SecondaryIcon;
