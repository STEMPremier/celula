/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import cx from 'classnames';

import './checkboxes.less';

class CheckboxGroup extends Component {
  state = {
    checkedValues: [this.props.defaultValue],
  };

  handleChangeGroup = event => {
    const { checkedValues } = this.state;
    let values = checkedValues;
    // NOT SURE WHY THIS IS SAYING IT IS UNUSED BC THE WHOLE CLICK AND UNCLICK THING BREAKS IF I REMOVE THIS FUNCTION
    // eslint-disable-next-line no-unused-expressions
    event.target.checked === true
      ? values.push(event.target.value)
      : (values = values.filter(
          arrayValue => arrayValue === event.target.value,
        ));
    this.setState({ checkedValues: values });
  };

  renderChildren = () => {
    const { children, name } = this.props;
    const { checked } = this.state;

    return React.Children.map(children, child => {
      const props = {
        checked: checked === child.props.value,
        // handleChange: this.handleChange,
        defaultValue: this.props.defaultValue,
        name,
      };
      return React.cloneElement(child, { ...props });
    });
  };

  render() {
    const {
      className,
      disabled,
      error,
      form,
      label,
      name,
      defaultValue,
      // validators
    } = this.props;

    const classes = cx(
      'ce-checkbox',
      {
        'ce-checkbox--disabled': disabled,
        'ce-checkbox--error': error,
      },
      className,
    );

    return (
      <fieldset
        className={classes}
        name={name}
        form={form}
        defaultValue={defaultValue}
        onChange={this.handleChangeGroup}
        disabled={disabled}
      >
        <legend>
          {label}
          {/* {error && <div className="ce-checkbox--error-text">{error}</div>} */}
        </legend>
        {this.renderChildren()}
      </fieldset>
    );
  }
}

CheckboxGroup.propTypes = {
  /**
   * DOUBLE CHECK WITH IAN BECAUSE NOT ACTUALLY IN THE STORY
   */
  children: PropTypes.node.isRequired,
  /**
   * A class name added to the `<CheckboxGroup />`.
   */
  className: PropTypes.string,
  /**
   * Makes the entire `<CheckboxGroup />` inactive.
   */
  disabled: PropTypes.bool,
  /**
   * The error message on the `<CheckboxGroup />`.
   */
  error: PropTypes.string,
  /**
   * The name of the form the `<CheckboxGroup />` belongs to.
   */
  form: PropTypes.string,
  /**
   * A function that is passed to the all `<Checkbox />`s to be called when the `<Checkbox />` is clicked.
   */
  // ASK IAN ABOUT WHAT TO DO HERE
  // handleChange: PropTypes.func.isRequired,
  /**
   * The text that gets placed into the legend element.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name is a unique name for the `<CheckboxGroup />` given to all the `<Checkbox />`s.
   */
  name: PropTypes.string.isRequired,
  // validators: PropTypes.array,
  /**
   * This optional value preassigns checked to certain checkboxes in the `<CheckboxGroup />`.  The string values will be pushed into the defaultValue array.
   */
  // ASK IAN ABOUT ALL THESE TYPES BEING APPLICABLE OR IF WE SHOULD RESTRICT IT
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
  ]),
};

CheckboxGroup.defaultProps = {
  className: '',
  disabled: false,
  error: '',
  form: '',
  defaultValue: '',
  // validators: [],
};

export default CheckboxGroup;
