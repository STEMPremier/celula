import React from 'react';
import PropTypes from 'prop-types';

import './system-icons/icons.svg';
import './icon.less';

import T from './types';

/**
 * Icons are for sprucing up the joint.
 */
const SystemIcon = props => {
  const { name } = props;

  return (
    <svg className="ce-icon ce-icon--system">
      <use xlinkHref={`#icons_${name}`} />
    </svg>
  );
};

SystemIcon.propTypes = {
  /**
   * The `<SystemIcon />`.
   */
  name: PropTypes.oneOf(T.SYSTEM_ICONS).isRequired,
};

export default SystemIcon;
