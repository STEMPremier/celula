import React from 'react';
import PropTypes from 'prop-types';

import './secondary-icons/icons.svg';
import './icon.less';
import { SECONDARY_ICONS } from './types';

const COLORS = ['primary', 'secondary'];

/**
 * These light icons are mostly used as an actionable element.
 * Alternatively, they can be used as avatars or indicators with two varying gradient options.
 */
const SecondaryIcon = props => {
  const { color, name } = props;

  return (
    <svg className={`ce-icon ce-icon--system ce-icon--${color}`}>
      <use xlinkHref={`#icons_${name}`} />
    </svg>
  );
};

SecondaryIcon.propTypes = {
  /**
   * The color of the `<SecondaryIcon /> background gradient.
   */
  color: PropTypes.oneOf(COLORS),
  /**
   * The `<SecondaryIcon />`
   */
  name: PropTypes.oneOf(SECONDARY_ICONS).isRequired,
};

SecondaryIcon.defaultProps = {
  color: 'primary',
};

export default SecondaryIcon;
