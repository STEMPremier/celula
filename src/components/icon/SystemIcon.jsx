import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// import { COLORS, SIZES, SYSTEM_ICONS } from '../../utils/constants';
import { SIZES } from '../../utils/constants';

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
  // color: PropTypes.oneOf(['', ...COLORS]),
  color: PropTypes.oneOf(['', 'primary', 'secondary', 'black', 'inverted']),
  /**
   * The `<SystemIcon />`.
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
   * The size you want the `<SystemIcon />` to be.
   */
  // size: PropTypes.oneOf(SIZES),
  size: PropTypes.oneOf(['small', 'large', 'jumbo']),
};

SystemIcon.defaultProps = {
  color: '',
  size: 'large',
};

export default SystemIcon;
