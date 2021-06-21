/* Copyright 2021 Tallo Inc.,
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
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import SystemIcon from '../icon/SystemIcon';

import { camelCase } from '../../utils/helpers';
import { functionOrUndef } from '../../utils/propValidators';
// import { SYSTEM_ICONS as ICONS } from '../../utils/constants';

import './chip.less';

/**
 * `Chips` are compact elements that represent an input, attribute, or action. They allow users to
 * make selections, filter content, or trigger actions.
 */
const Chip = ({
  actionFn,
  checked,
  className,
  icon,
  label,
  name,
  selectable,
  style,
  value,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const id = `${name}_${camelCase(label)}`;
  const classes = cx(
    'ce-chip',
    {
      'ce-chip--selectable': selectable,
      'ce-chip--selected': selectable && isChecked,
    },
    className,
  );

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleClear = () => {
    setIsChecked(false);
  };

  const handleChange = event => {
    setIsChecked(event.target.checked);
  };

  const handleAction = () => {
    if (actionFn) actionFn();
  };

  const labelProps = {
    className: 'ce-chip__label',
    htmlFor: id,
    onClick: handleAction,
  };

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <div className={classes} style={style}>
      {icon && (
        <span className="ce-chip__icon">
          <SystemIcon name={icon} />
        </span>
      )}
      {selectable && (
        <input
          checked={isChecked}
          id={id}
          name={name}
          onChange={handleChange}
          type="checkbox"
          value={value || camelCase(label)}
        />
      )}
      <label {...labelProps}>{label}</label>
      {selectable && (
        <button className="ce-chip__action" onClick={handleClear} type="button">
          <SystemIcon name="clear" title="Clear" />
        </button>
      )}
    </div>
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

Chip.propTypes = {
  /**
   * The action (function) the `Chip` triggers.
   */
  actionFn: functionOrUndef,
  /**
   * Select the `<Chip />`, if selectable.
   */
  checked: PropTypes.bool,
  /**
   * A class name, or a string of class names, to add to the `<Chip />`.
   */
  className: PropTypes.string,
  /**
   * An icon to include on the left side of the `<Chip />`.
   */
  // icon: PropTypes.oneOf([...ICONS, '']),
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
    '',
  ]),
  /**
   * The `Chip` label.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name given to the `Chip`. Used to keep track of different `Chips` when multiple are
   * present.
   */
  name: PropTypes.string,
  /**
   * Makes the `Chip` selectable, akin to a checkbox.
   */
  selectable: PropTypes.bool,
  /**
   * Any inline styles you would like to add to the `Chip`. See the React
   * [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * The value of the `Chip`. If one is not provided, and the `Chip` is selectable, the label will
   * be used instead.
   */
  // eslint-disable-next-line prettier/prettier
  value: PropTypes.oneOfType([ // eslint-disable-line react/require-default-props
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
};

Chip.defaultProps = {
  actionFn: undefined,
  checked: false,
  className: '',
  icon: '',
  name: '',
  selectable: false,
  style: {},
};

export default Chip;
