/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './checkboxes.less';

class Checkbox extends Component {
  state = {
    checked: this.props.defaultValue === this.props.value,
  };

  handleChange = event => {
    // // eslint-disable-next-line no-console
    // console.log('indv checkbox', event.target);
    this.setState({ checked: event.target.checked });
  };

  render() {
    this.props.defaultValue
      ? console.log('this.props.defaultValue')
      : console.log('props in invd box', this.props) &&
        console.log('state in ind', this.state);
    // this.props
    //   ? console.log(
    //       'this.props.defaultValue in indv checkbox',
    //       this.props.defaultValue,
    //     )
    //   : null;
    const {
      className,
      disabled,
      name,
      label,
      value,
      form,
      // handleChange,
    } = this.props;
    const { checked } = this.state;
    const id = `${name}_${value}`;
    const classes = cx(
      'ce-checkbox',
      {
        // 'ce-checkbox--checked': checked,
      },
      className,
    );
    // if (value)
    return (
      <div className={classes}>
        <div className="ce-checkbox--box">
          <input
            type="checkbox"
            value={value}
            id={id}
            checked={checked}
            onChange={this.handleChange}
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
  // DUPLICATE HANDLECHANGE IN BOTH CHECKBOX AND GROUP.  LETS WAIT AND SEE WHERE THIS FALLS
}

Checkbox.propTypes = {
  /**
   * A class name added to the `<CheckboxGroup />`.
   */
  className: PropTypes.string,
  /**
   * The current checked state.
   */
  // checked: PropTypes.bool,
  /**
   * Make the RadioGroup inactive.
   */
  disabled: PropTypes.bool,
  // NAME NOT IN STORY
  /**
   * Need to assign a matching name to each `<Checkbox />` if being used the `<CheckboxGroup />`.  In  a `<CheckboxGroup />`, each individual `<Checkbox />` should have the same name.
   */
  name: PropTypes.string,
  // /**
  //  * The id will also be the name of the checkbox, unless in a group.
  //  */
  // id: PropTypes.string.isRequired,
  /**
   * The handleChange function is overwritten by any handleChange function passed into `<CheckboxGroup />`.
   */
  // handleChange: PropTypes.func.isRequired,
  /**
   * The form value is over-written by any form avlue passed into the `<CheckboxGroup />`.
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
  name: '',
  // checked: false,
  disabled: false,
  // error: ''
};

export default Checkbox;
