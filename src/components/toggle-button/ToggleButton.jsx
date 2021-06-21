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
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { SystemIcon } from '../icon';
import { SIZES /* , SYSTEM_ICONS */ } from '../../utils/constants';

import './toggle-button.less';

const ToggleButton = ({
  checked,
  className,
  disabled,
  icon,
  name,
  size,
  style,
  value,
}) => {
  const id = `${name}_${value}`;
  const classes = cx(
    'ce-toggle-button',
    {
      'ce-toggle-button--checked': checked,
    },
    className,
  );

  return (
    <div className={classes} style={style}>
      <input
        defaultChecked={checked}
        disabled={disabled}
        id={id}
        name={name}
        type="radio"
        value={value}
      />
      <label htmlFor={id}>
        <span className="ce-toggle-button__label--hidden">{icon}</span>
        <SystemIcon name={icon} size={size} />
      </label>
    </div>
  );
};

ToggleButton.propTypes = {
  /**
   * Select the `ToggleButton`.
   * @ignore
   */
  checked: PropTypes.bool,
  /**
   * A class name, or a string of class names, to add to the `ToggleButton`.
   */
  className: PropTypes.string,
  /**
   * Make the `ToggleButton` inactive.
   * @ignore
   */
  disabled: PropTypes.bool,
  /**
   * The `ToggleButton` icon.
   */
  // icon: PropTypes.oneOf(SYSTEM_ICONS).isRequired,
  icon: PropTypes.oneOf([
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
  ]).isRequired,
  /**
   * This component is to be treated as a radio button in `FormControlGroup`.
   * @ignore
   */
  isA: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  /**
   * The name of the `ToggleButtonGroup` this `ToggleButton` belongs to. This is created and
   * provided by the `RadioGroup`
   * @ignore
   */
  name: PropTypes.string,
  /**
   * The size of the `ToggleButton.
   * @ignore
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * Any inline styles you would like to add to the `ToggleButton`. See the React
   * [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * The value of the `ToggleButton`.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

ToggleButton.defaultProps = {
  checked: false,
  className: '',
  disabled: false,
  isA: 'radio',
  name: undefined,
  size: 'large',
  style: {},
};

export default ToggleButton;
