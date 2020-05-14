import React from 'react';
import PropTypes from 'prop-types';

import * as CONSTANTS from '../../utils/constants';

import './icons/icons.svg';
import './icon.less';

const { COLORS, SYSTEM_ICONS } = CONSTANTS;

/**
 * System icons are designed to be simple, modern and friendly.
 * Each icon is reduced to its minimal form, expressing essential characteristics within the interface.
 */
const SystemIcon = props => {
  const { color, name } = props;

  return (
    <span className="ce-icon ce-icon__system">
      <svg className={`ce-icon--${color}`}>
        <use xlinkHref={`#icons_system-${name}`} />
      </svg>
    </span>
  );
};

SystemIcon.propTypes = {
  /*
   * The color of the `<SystemIcon />`
   */
  color: PropTypes.oneOf(COLORS),
  /**
   * The `<SystemIcon />`.
   */
  name: PropTypes.oneOf(SYSTEM_ICONS).isRequired,
};

SystemIcon.defaultProps = {
  color: 'black',
};

export default SystemIcon;
