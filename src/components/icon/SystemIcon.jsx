import React from 'react';
import PropTypes from 'prop-types';

import './system-icons/icons.svg';
import './icon.less';

import { SYSTEM_ICONS } from './types';

const COLORS = [
  'primary',
  'secondary',
  'black',
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'white',
];

/**
 * Icons are for sprucing up the joint.
 */
const SystemIcon = props => {
  const { color, name } = props;

  return (
    <svg className={`ce-icon ce-icon--system ce-icon--${color}`}>
      <use xlinkHref={`#icons_${name}`} />
    </svg>
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
