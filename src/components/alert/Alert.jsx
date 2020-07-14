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

const Alert = ({
  className,
  type,
  iconLeft,
  dismissible,
  text,
  linkOptions: { linkName, address },
}) => {
  const hasLeftIcon = iconLeft !== '';
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
          {hasLeftIcon && (
            <div className="ce-alert__leftIcon" iconLeft={iconLeft}>
              <SystemIcon
                name={iconLeft}
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
  iconLeft: PropTypes.oneOf(ICONS),
  /**
   * Adding the dismissible prop will activate the boolean to display the close "X" on the right hand side.  The onclick of the close "X" will hide the `<Alert />`.
   */
  dismissible: PropTypes.bool,
  /**
   * The linkOptions configures the optional `<Link />` component to the right of the `<Alert />`.  Both `linkName` and `address` are required for the `<Link />` component to appear.
   * `linkName` is the text that will appear as the `<Link />` itself.
   * `address` is the http address where the user will be redirected.
   */
  linkOptions: PropTypes.shape({
    linkName: PropTypes.string,
    address: PropTypes.string,
  }),
  // /**
  //  * The linkName is the text for the link that will appear to the user on the right hand side of the alert.  Without setting both the address and the name, the `<Link />` will not appear.
  //  */
  // linkName: PropTypes.string,
  // /**
  //  * The `address` is the http address where the link will direct the user.   Without setting both the address and the name, the `<Link />` will not appear.
  //  */
  // address: PropTypes.string,
};

Alert.defaultProps = {
  className: '',
  type: 'info',
  iconLeft: '',
  dismissible: false,
  linkOptions: { linkName: '', address: '' },
};

export default Alert;
