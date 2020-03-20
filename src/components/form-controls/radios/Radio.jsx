import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './radios.less';

const Radio = props => {
  const { className, checked, label, value, disabled, name } = props;
  const id = `${name}_${value}`;
  const classes = cx(
    'ce-radio',
    {
      'ce-radio--checked': checked,
    },
    className,
  );

  return (
    <div className={classes}>
      <div className="ce-radio--button">
        <input
          type="radio"
          value={value}
          name={name}
          id={id}
          checked={checked}
          disabled={disabled}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
};

Radio.propTypes = {
  /**
   * A class name added to the `<RadioGroup />`.
   */
  className: PropTypes.string,
  /**
   * The current checked state.
   */
  checked: PropTypes.bool,
  /**
   * Make the `<RadioGroup />` inactive.
   */
  disabled: PropTypes.bool,
  /**
   * Need to assign a matching name to each `<Radio />` in the `<RadioGroup />`.
   * @ignore
   */
  name: PropTypes.string,
  /**
   * The label you assign is the text that shows up next to each individual `<Radio />` button.
   */
  label: PropTypes.string.isRequired,
  /**
   * The value is not visible to the user, but rather it is the unique value passed when selecting each individual `<Radio />` button.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

Radio.defaultProps = {
  className: '',
  checked: false,
  disabled: false,
  name: undefined,
};

export default Radio;
