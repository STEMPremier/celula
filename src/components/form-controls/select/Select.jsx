import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ErrorBox } from '../core';

import SystemIcon from '../../icon/SystemIcon';

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
   * This function is accesible to the user for clickable events on the icon in the gradient to the right.
   * Assign an icon to go in the gradient right hand square.  If you use the buttonShow prop as true, this icon will default to "navigate".  See the <SystemIcon /> for more options on what to enter into this icon prop.
   */
  btnOptions: PropTypes.shape({
    btnClick: PropTypes.func,
    btnIcon: PropTypes.string,
  }),
  /**
   * A class name added to the select.
   */
  className: PropTypes.string,
  /**
   * Make the selected disabled
   */
  disabled: PropTypes.bool,
  /**
   * The error message in the error box.
   */
  errorMsg: PropTypes.string,
  /**
   * The form the select belongs to.
   */
  formId: PropTypes.string,
  /**
   * A function that is called when changing the `<Select />`.
   */
  handleChange: PropTypes.func.isRequired,
  /**
   * The label is required for accessibilty even if you assign a default value.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name for the select is required for accessibilty purposes of attaching a unique id.
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
   * The value is the optional preselected default option to appear in the select.
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
  placeholder: 'Select one',
  selectedValue: '',
};

export default Select;
