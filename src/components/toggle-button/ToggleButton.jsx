import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { SystemIcon } from '../icon';
import * as CONSTANTS from '../../utils/constants';

import './toggle-button.less';

const { SIZES } = CONSTANTS;

/**
 * I am a `<ToggleButton />` description.
 */
const ToggleButton = props => {
  const { checked, className, disabled, icon, name, size, value } = props;
  const id = `${name}_${value}`;
  const classes = cx(
    'ce-toggle-button',
    {
      'ce-toggle-button--checked': checked,
    },
    className,
  );

  return (
    <div className={classes}>
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
   * Select the `<ToggleButton />`.
   * @ignore
   */
  checked: PropTypes.bool,
  /**
   * A class name added to the `<ToggleButton />`.
   */
  className: PropTypes.string,
  /**
   * Make the `<ToggleButton />` inactive.
   * @ignore
   */
  disabled: PropTypes.bool,
  /**
   * The `<ToggleButton />` icon.
   */
  icon: PropTypes.string.isRequired,
  /**
   * This component is to be treated as a radio button in `<FormControlGroup />`.
   * @ignore
   */
  isA: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  /**
   * The name of the `<ToggleButtonGroup />` this `<ToggleButton />` belongs to. This is created and provided by the `<RadioGroup .>`
   * @ignore
   */
  name: PropTypes.string,
  /**
   * The size of the `<ToggleButton />.
   * @ignore
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * The value of the `<ToggleButton />`.
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
  size: '',
};

export default ToggleButton;
