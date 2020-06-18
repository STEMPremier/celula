import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import SystemIcon from '../../icon/SystemIcon';
import { ErrorBox } from '../core';

import { SYSTEM_ICONS as ICONS } from '../../../utils/constants';

import './select.less';

class Select extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    selectedValue: this.props.selectedValue,
  };

  handleChange = event => {
    const { handleChange } = this.props;
    const { value } = event.target;

    this.setState({ selectedValue: value });

    handleChange(value);
  };

  render() {
    const { selectedValue } = this.state;
    const {
      btnOptions,
      className,
      disabled,
      errorMsg,
      formId,
      helpText,
      label,
      name,
      options,
      placeholder,
    } = this.props;

    const { btnClick, btnIcon } = btnOptions;

    const id = `${name}`;
    const classes = cx(
      'ce-select',
      {
        'ce-select--disabled': disabled,
        'ce-select--error': errorMsg,
      },
      className,
    );

    return (
      <div className={classes}>
        <label htmlFor={id}>{label}</label>
        {helpText && <span className="ce-select__help-text">{helpText}</span>}
        <div className="ce-select__container">
          <select
            name={name}
            label={label}
            form={formId}
            id={id}
            disabled={disabled}
            value={selectedValue}
            onChange={this.handleChange}
          >
            <option value="">{placeholder}</option>
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
              <SystemIcon name={btnIcon} color="white" />
            </button>
          )}
        </div>
        {errorMsg && <ErrorBox errorMsg={errorMsg} />}
      </div>
    );
  }
}

Select.propTypes = {
  /**
   * The options to configure the (optional) right-side button.
   */
  btnOptions: PropTypes.shape({
    btnClick: PropTypes.func,
    btnIcon: PropTypes.oneOf(ICONS),
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
  handleChange: PropTypes.func.isRequired,
  /**
   * Any text to assist the user with this `<Select />`.
   */
  helpText: PropTypes.string,
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
  helpText: '',
  placeholder: 'Select one',
  selectedValue: '',
};

export default Select;
