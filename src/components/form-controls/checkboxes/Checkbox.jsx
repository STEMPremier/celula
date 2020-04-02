/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './checkboxes.less';

class Checkbox extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line react/prop-types
    // eslint-disable-next-line react/destructuring-assignment
    checked:
      // eslint-disable-next-line react/destructuring-assignment
      !!this.props.defaultGroupValue.includes(this.props.value) ||
      // eslint-disable-next-line react/destructuring-assignment
      this.props.checkedIndividualDefault,
    // eslint-disable-next-line react/destructuring-assignment
    // checked: this.props.checked,
  };

  handleChange = event => {
    this.setState({ checked: event.target.checked });
    // eslint-disable-next-line react/destructuring-assignment
    this.props.handleChange();
  };

  render() {
    const {
      className,
      disabled,
      name,
      label,
      value,
      form,
      checkedIndividualDefault,
    } = this.props;

    const { checked } = this.state;
    const id = `${name}_${value}`;
    const classes = cx(
      'ce-checkbox',
      {
        'ce-checkbox--disabled': disabled,
      },
      className,
    );

    return (
      <div className={classes}>
        <div className="ce-checkbox--box">
          <input
            type="checkbox"
            value={value}
            id={id}
            checkedIndividualDefault={checkedIndividualDefault}
            checked={checked}
            onClick={this.handleChange}
            disabled={disabled}
            name={name}
            form={form}
          />
          <label htmlFor={id}>{label}</label>
          <div className="ce-checkbox--background" />
        </div>
      </div>
    );
  }
}

Checkbox.propTypes = {
  /**
   * A class name added to the `<CheckboxGroup />`.
   */
  className: PropTypes.string,
  /**
   * The current checked state.
   */
  checkedIndividualDefault: PropTypes.bool,
  /**
   * Make the RadioGroup inactive.
   */
  disabled: PropTypes.bool,
  /**
   * Need to assign a matching name to each `<Checkbox />` if it is being used in the `<CheckboxGroup />`.  In  a `<CheckboxGroup />`, each individual `<Checkbox />` should have the same name.
   */
  name: PropTypes.string,
  /**
   * The handleChange function sets the checked state of the individual `<Checkbox />` and also trigger the handleChangeGroup of the `<CheckboxGroup />`.
   */
  handleChange: PropTypes.func,
  /**
   * The form value is over-written by any form value passed into the `<CheckboxGroup />`.
   */
  form: PropTypes.string,
  /**
   * The label you assign is the text that shows up next to each individual `<Checkbox />` button.
   */
  label: PropTypes.string.isRequired,
  /**
   * The value is not visible to the user, but rather it is the unique value passed when selecting each individual `<Checkbox />` button.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

Checkbox.defaultProps = {
  className: '',
  form: '',
  checkedIndividualDefault: false,
  name: '',
  disabled: false,
  handleChange: () => {},
  // error: ''
};

export default Checkbox;
