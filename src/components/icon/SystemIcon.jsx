import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import * as CONSTANTS from '../../utils/constants';

import './icons/icons.svg';
import './icon.less';

const { COLORS, SIZES, SYSTEM_ICONS } = CONSTANTS;

/**
 * System icons are designed to be simple, modern and friendly.
 * Each icon is reduced to its minimal form, expressing essential characteristics within the interface.
 */
const SystemIcon = props => {
  const { color, name, size } = props;

  /* eslint-disable prettier/prettier */
  const classes = cx(
    'ce-icon',
    'ce-icon__system',
    {
      [`ce-icon--${size}`]: SIZES.includes(size.toString().toLowerCase()),
    },
  );
  /* eslint-enable prettier/prettier */

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
  color: PropTypes.oneOf('', ...COLORS),
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
