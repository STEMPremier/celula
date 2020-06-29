import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { COLORS, SIZES, SYSTEM_ICONS } from '../../utils/constants';

import './icons/icons.svg';
import './icon.less';

/**
 * System icons are designed to be simple, modern and friendly.
 * Each icon is reduced to its minimal form, expressing essential characteristics within the interface.
 */
const SystemIcon = ({ color, name, size }) => {
  const classes = cx('ce-icon', 'ce-icon__system', {
    [`ce-icon--${size}`]: SIZES.includes(size.toString().toLowerCase()),
  });

  return (
    <span className={classes}>
      <svg className={color && `ce-icon--${color}`}>
        <use xlinkHref={`#icons_system-${name}`} />
      </svg>
    </span>
  );
};

SystemIcon.propTypes = {
  /*
   * The color of the `<SystemIcon />`
   */
  color: PropTypes.oneOf(['', ...COLORS]),
  /**
   * The `<SystemIcon />`.
   */
  name: PropTypes.oneOf(SYSTEM_ICONS).isRequired,
  /**
   * The size you want the `<SystemIcon />` to be.
   */
  size: PropTypes.oneOf(SIZES),
};

SystemIcon.defaultProps = {
  color: '',
  size: 'large',
};

export default SystemIcon;
