import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './radios.less';

// const status = ["selected", "unselected"];

const Radio = props => {
  const { className, checked, id, label, value, disabled } = props;

  const classes = cx(
    'ce-radio',
    {
      // [`ce-radio--${status}`]: status,
      'ce-radio--label': label,
      'ce-radio--disabled': disabled,
      'ce-radio--checked': checked,
    },
    className,
  );

  return (
    <div className={classes}>
      <label htmlFor={id} className="radioContainer">
        <input
          type="radio"
          value={value}
          id={id}
          checked={checked}
          disabled={disabled}
        />
        <span className="circle">
          <span />
        </span>
        {label}
      </label>
    </div>
  );
};

Radio.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  /**
   * Make the radio option inactive.
   */
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
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
};

export default Radio;
