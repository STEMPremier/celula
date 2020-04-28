import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './radio.less';

/**
 * I am a `<Radio />` description.
 */
const Radio = props => {
  const { checked, className, disabled, label, name, value } = props;
  const id = `${name}_${value}`;
  const classes = cx('ce-radio', className);

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
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

Radio.propTypes = {
  /**
   * Select the `<Radio />`.
   * @ignore
   */
  checked: PropTypes.bool,
  /**
   * A class name added to the `<RadioGroup />`.
   */
  className: PropTypes.string,
  /**
   * Make the `<Radio />` inactive.
   * @ignore
   */
  disabled: PropTypes.bool,
  /**
   * This component is to be treated as a radio button in `<FormControlGroup />`.
   * @ignore
   */
  isA: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  /**
   * The `<Radio />` label.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name of the `<RadioGroup />` this `<Radio />` belongs to. This is created and provided by the `<RadioGroup .>`
   * @ignore
   */
  name: PropTypes.string,
  /**
   * The value of the `<Radio />`.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

Radio.defaultProps = {
  checked: false,
  className: '',
  disabled: false,
  isA: 'radio',
  name: undefined,
};

export default Radio;
