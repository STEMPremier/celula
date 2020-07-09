/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// eslint-disable-next-line no-unused-vars
import SystemIcon from '../icon/SystemIcon';

import {
  // ALERT_COLORS as COLORS,
  ALERT_TYPES as TYPES,
  SYSTEM_ICONS as ICONS,
} from '../../utils/constants';

import './alert.less';

const Alert = ({
  className,
  type,
  iconLeft,
  dismissible,
  linkOptions: { name, address },
  text,
}) => {
  const hasLeftIcon = iconLeft !== '';
  console.log('hasLeftIcon', hasLeftIcon);
  // const [hasIcon, setHasIcon] = useState(leftIcon)

  const classes = cx('ce-alert', {
    [`ce-alert--${type}`]: TYPES.includes(type.toString().toLowerCase()),
  });

  return (
    <div className={classes}>
      {hasLeftIcon && (
        <div className="ce-alert__leftIcon" iconLeft={iconLeft}>
          <SystemIcon name={iconLeft} />
        </div>
      )}
      <div className="ce-alert__text">
        <span
          type={type}
          dismissible={dismissible}
          name={name}
          address={address}
        >
          {text}
        </span>
      </div>
      <div className="ce-alert__link">
        <div className="ce-alert__link-text">LINK</div>
      </div>
    </div>
  );
};

Alert.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(TYPES),
  text: PropTypes.string,
  iconLeft: PropTypes.oneOf(ICONS),
  dismissible: PropTypes.bool,
  linkOptions: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
  }),
};

Alert.defaultProps = {
  className: '',
  type: 'info',
  iconLeft: '',
  text: 'alert text',
  dismissible: false,
  linkOptions: { name: '', address: '' },
};

export default Alert;
