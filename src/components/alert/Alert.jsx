import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import SecondaryIcon from '../../icon/SecondaryIcon';

import {
  // ALERT_COLORS as COLORS,
  ALERT_TYPES as TYPES,
  SECONDARY_ICONS as ICONS,
} from '../../utils/constants';

import './alert.less';

const Alert = ({
  className,
  type,
  iconLeft,
  dismissible,
  linkOptions: { name, address },
}) => {
  const classes = cx('ce-alert', {
    [`ce-alert-${type}`]: TYPES.includes(type.toString().toLowerCase()),
  });

  return (
    <div className={classes}>
      <span
        type={type}
        iconLeft={iconLeft}
        dismissible={dismissible}
        name={name}
        address={address}
      >
        This is an alert box
      </span>
    </div>
  );
};

Alert.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(TYPES),
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
  dismissible: false,
  linkOptions: { name: '', address: '' },
};
