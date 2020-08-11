import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import SystemIcon from '../../icon/SystemIcon';
import { ErrorBox } from '../core';

import { SYSTEM_ICONS as ICONS } from '../../../utils/constants';

import './select.less';

const Select = ({
  btnOptions: { btnClick, btnIcon },
  className,
  disabled,
  errorMsg,
  formId,
  handleChange: handler,
  helpText,
  icon,
  label,
  name,
  options,
  placeholder,
  selectedValue,
}) => {
  const [fieldValue, setFieldValue] = useState(selectedValue);
  const [errMsg, setErrMsg] = useState(errorMsg);

  const id = `${name}`;
  const classes = cx(
    'ce-select',
    {
      'ce-select--disabled': disabled,
      'ce-select--error': errorMsg,
    },
    className,
  );

  useEffect(() => {
    setFieldValue(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    setErrMsg(errorMsg);
  }, [errorMsg]);

  const handleChange = event => {
    const { value } = event.target;

    setFieldValue(value);
    handler(value);
  };

  return (
    <div className={classes}>
      <label htmlFor={id}>{label}</label>
      {helpText && <span className="ce-select__help-text">{helpText}</span>}
      <div className="ce-select__container">
        {icon && (
          <div className="ce-select__icon">
            <SystemIcon name={icon} />
          </div>
        )}
        <select
          name={name}
          label={label}
          form={formId}
          id={id}
          disabled={disabled}
          value={fieldValue}
          onChange={handleChange}
        >
          <option key={placeholder} value="">
            {placeholder}
          </option>
          {options.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        {btnIcon && (
          <button
            className="ce-select__button"
            onClick={btnClick}
            type="button"
          >
            <SystemIcon name={btnIcon} color="inverted" />
          </button>
        )}
      </div>
      {errMsg && <ErrorBox errorMsg={errMsg} />}
    </div>
  );
};

Select.propTypes = {
  /**
   * The options to configure the (optional) right-side button.
   * `btnClick` is a function to trigger when the `<Select />` button is clicked.
   * `btnIcon` is the icon you would like as the `<Select />` button label.
   */
  btnOptions: PropTypes.shape({
    btnClick: PropTypes.func,
    btnIcon: PropTypes.oneOf([...ICONS, '']),
  }),
  /**
   * A class name, or string of class names, to add to the `<Select />`.
   */
  className: PropTypes.string,
  /**
   * Disables the `<Select />`.
   */
  disabled: PropTypes.bool,
  /**
   * An error message to display in the `<Select />`.
   */
  errorMsg: PropTypes.string,
  /**
   * The id of the form the `<Select />` belongs to.
   */
  formId: PropTypes.string,
  /**
   * A function to trigger when the state of the `<Select />` changes.
   */
  handleChange: PropTypes.func,
  /**
   * Any text to assist the user with this `<Select />`.
   */
  helpText: PropTypes.string,
  /**
   * An icon to include on the left side of the `<Select />`.
   */
  icon: PropTypes.oneOf([...ICONS, '']),
  /**
   * The `<Select />` label.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name given to the `<Select />`. It connects the label to the `<Select />`.
   */
  name: PropTypes.string.isRequired,
  /**
   * The options is the array of objects containing the name and value of each select row.
   */
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool]),
  ).isRequired,
  /**
   * Placeholder text for the `<Select />`/
   */
  placeholder: PropTypes.string,
  /**
   * The value used to pre-select an option of the `<Select />`.
   */
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Select.defaultProps = {
  btnOptions: {
    btnClick: () => {},
    btnIcon: '',
  },
  className: '',
  disabled: false,
  errorMsg: '',
  formId: '',
  handleChange: () => {},
  helpText: '',
  icon: '',
  placeholder: 'Select one',
  selectedValue: '',
};

export default Select;
