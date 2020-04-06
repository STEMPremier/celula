import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './checkboxes.less';

class CheckboxGroup extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    checkedValues: this.props.defaultGroupValue,
  };

  handleChangeGroup = event => {
    const { checkedValues } = this.state;
    let values = checkedValues;

    if (event.target.checked) {
      values.push(event.target.value);
    } else {
      values = values.filter(arrayValue => arrayValue !== event.target.value);
    }
    this.setState({ checkedValues: values });
  };

  renderChildren = () => {
    const { children, name, defaultGroupValue } = this.props;
    // const { checked } = this.state;

    return React.Children.map(children, child => {
      const props = {
        // checked: checked === this.props.value,
        handleChange: this.handleChange,
        // eslint-disable-next-line object-shorthand
        defaultGroupValue,
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
      defaultGroupValue,
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
        defaultGroupValue={defaultGroupValue}
        onChange={this.handleChangeGroup}
        disabled={disabled}
      >
        <legend>
          {label}
          {error && <div className="ce-checkbox--error-text">{error}</div>}
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
   * The text that gets placed into the legend element.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name is a unique name for the `<CheckboxGroup />` given to all the `<Checkbox />`s.
   */
  name: PropTypes.string.isRequired,
  // validators: PropTypes.array,
  /**
   * This optional value preassigns checked to certain checkboxes in the `<CheckboxGroup />`.  The string values will be pushed into the defaultGroupValue array.
   */
  defaultGroupValue: PropTypes.arrayOf(PropTypes.any),
};

CheckboxGroup.defaultProps = {
  className: '',
  disabled: false,
  error: '',
  form: '',
  defaultGroupValue: '',
  // validators: [],
};

export default CheckboxGroup;
