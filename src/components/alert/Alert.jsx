/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
  const showLink = name !== '' || address !== '';

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const classes = cx('ce-alert', {
    [`ce-alert--${type}`]: TYPES.includes(type.toString().toLowerCase()),
  });

  return (
    <div>
      {isVisible && (
        <div className={classes}>
          {hasLeftIcon && (
            <div className="ce-alert__leftIcon" iconLeft={iconLeft}>
              <SystemIcon
                name={iconLeft}
                color={type === 'error' ? 'white' : 'black'}
              />
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
          {showLink && (
            <div className="ce-alert__link">
              <div className="ce-alert__link-text">LINK</div>
            </div>
          )}
          {dismissible && (
            <button
              type="button"
              className="ce-alert__close"
              onClick={handleClose}
            >
              <SystemIcon
                name="close"
                color={type === 'error' ? 'white' : 'black'}
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

Alert.propTypes = {
  /**
   * A class name, or string of class names, to add to the `<Alert />`.
   */
  className: PropTypes.string,
  /**
   * The `<Alert />` has 4 type options to choose from: info, warning, error, and success.  Each is represented as a string in the TYPES array.  The selection of the type determines the color of the alert.
   */
  type: PropTypes.oneOf(TYPES),
  /**
   * The text is the message that will display in the alert.
   */
  text: PropTypes.string,
  /**
   * You can choose any of the System Icons to display on the left hand side of the `<Alert />` box.  See the icons sections for a full list of System Icons.
   */
  iconLeft: PropTypes.oneOf(ICONS),
  /**
   * Adding the dismissible prop will activate the boolean to display the close "X" on the right hand side.  The onclick of the close "X" will hide the `<Alert />`.
   */
  dismissible: PropTypes.bool,
  /**
   * These options configure the link on the right hand side.
   * Without setting the address and the name, the `<Link />` will not appear.
   * `name` is the text that will appear as the `<Link /> itself.
   * `address` is the http address where the link will direct the user.
   */
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
