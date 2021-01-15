/* Copyright 2020 Tallo Inc.,
 *
 * This file is part of Celula.
 *
 * Celula is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import SystemIcon from '../icon/SystemIcon';
import Link from '../link';

import {
  ALERT_TYPES as TYPES,
  // SYSTEM_ICONS as ICONS,
} from '../../utils/constants';

import './alert.less';

function allLinkOptions(props, propName, componentName = 'Alert') {
  const linkOptions = props[propName];

  let error;

  // We have linkName but not address
  if (linkOptions.linkName && !linkOptions.address) {
    error = new Error(
      `Invalid prop linkOptions for ${componentName}. You must supply both the linkName and address properties.`,
    );
  }

  // We have address, but not link name
  if (!linkOptions.linkName && linkOptions.address) {
    error = new Error(
      `Invalid prop linkOptions ${componentName}. You must supply both the linkName and address properties.`,
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
                color={type === 'error' ? 'inverted' : 'black'}
              />
            </div>
          )}
          <div className="ce-alert__text">
            {/* I don't know wtf is wrong with just using true/false for this boolean prop, but here we are. */}
            <span type={type} dismissible={dismissible ? 1 : 0}>
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
   * Adding the dismissible prop will activate the boolean to display the close "X" on the right hand side.  The onclick of the close "X" will hide the `<Alert />`.
   */
  dismissible: PropTypes.bool,
  /**
   * You can choose any of the System Icons to display on the left hand side of the `<Alert />` box.  See the icons sections for a full list of System Icons.
   */
  // icon: PropTypes.oneOf(['', ...ICONS]),
  icon: PropTypes.oneOf([
    '',
    'share',
    'preview',
    'export',
    'follow',
    'message',
    'badges',
    'website',
    'edit',
    'clear',
    'navigate',
    'down',
    'up',
    'user',
    'visibility',
    'help',
    'close',
    'calendar',
    'warning',
    'add',
    'filter',
    'menu',
    'search',
    'tutorial',
    'yes',
    'no',
    'hobby',
    'interest',
    'outdoor',
    'indoor',
    'popular',
  ]),
  /**
   * The linkOptions configures the optional `<Link />` component to the right of the `<Alert />`.  Both `linkName` and `address` are required for the `<Link />` component to appear.
   * `linkName` is the text that will appear as the `<Link />` itself.
   * `address` is the http address where the user will be redirected.
   */
  linkOptions: allLinkOptions,
  /**
   * The text is the message that will display in the alert.
   */
  text: PropTypes.string.isRequired,
  /**
   * Which type of `<Alert />` to render.
   */
  // type: PropTypes.oneOf(TYPES),
  type: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
};

Alert.defaultProps = {
  className: '',
  dismissible: undefined,
  icon: '',
  linkOptions: { linkName: '', address: '' },
  type: 'info',
};

export default Alert;
