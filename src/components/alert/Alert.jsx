/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import SystemIcon from '../icon/SystemIcon';
import Link from '../link';

import {
  ALERT_TYPES as TYPES,
  SYSTEM_ICONS as ICONS,
} from '../../utils/constants';

import './alert.less';

function allLinkOptions(props, propName, componentName = 'Alert') {
  const linkOptions = props[propName];

  let error;

  if (!linkOptions.linkName || !linkOptions.address) {
    error = new Error(
      `Invalid prop linkOptions.  You must supply both linkName and address inside the object.`,
    );
  }

  return error;
}

const Alert = ({
  className,
  type,
  icon,
  dismissible,
  text,
  linkOptions: { linkName, address },
}) => {
  const hasIcon = icon !== '';
  const showLink = linkName !== '' && address !== '';

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const classes = cx(
    'ce-alert',
    {
      [`ce-alert--${type}`]: TYPES.includes(type.toString().toLowerCase()),
    },
    className,
  );

  return (
    <div>
      {isVisible && (
        <div className={classes}>
          {hasIcon && (
            <div className="ce-alert__icon" icon={icon}>
              <SystemIcon
                name={icon}
                color={type === 'error' ? 'white' : 'black'}
              />
            </div>
          )}
          <div className="ce-alert__text">
            <span type={type} dismissible={dismissible}>
              {text}
            </span>
          </div>
          {showLink && (
            <div className="ce-alert__link">
              <Link
                address={address}
                text={linkName}
                color={type === 'error' ? 'inverted' : 'black'}
                className="ce-alert__link-text"
              />
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
                color={type === 'error' ? 'inverted' : 'black'}
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
  text: PropTypes.string.isRequired,
  /**
   * You can choose any of the System Icons to display on the left hand side of the `<Alert />` box.  See the icons sections for a full list of System Icons.
   */
  icon: PropTypes.oneOf(ICONS),
  /**
   * Adding the dismissible prop will activate the boolean to display the close "X" on the right hand side.  The onclick of the close "X" will hide the `<Alert />`.
   */
  dismissible: PropTypes.bool,
  /**
   * The linkOptions configures the optional `<Link />` component to the right of the `<Alert />`.  Both `linkName` and `address` are required for the `<Link />` component to appear.
   * `linkName` is the text that will appear as the `<Link />` itself.
   * `address` is the http address where the user will be redirected.
   */
  linkOptions: allLinkOptions,
};

Alert.defaultProps = {
  className: '',
  type: 'info',
  icon: '',
  dismissible: false,
  linkOptions: { linkName: '', address: '' },
};

export default Alert;
