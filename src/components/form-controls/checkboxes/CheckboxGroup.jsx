/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './checkboxes.less';

class CheckboxGroup extends Component {
  state = {
    checkedValues: [],
  };

  handleChangeGroup = event => {
    // eslint-disable-next-line no-console
    console.log('checkbox grp', event.target);
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line react/no-access-state-in-setstate
    // eslint-disable-next-line react/destructuring-assignment
    const values = this.state.checkedValues;
    let index;
    if (event.target.checked) {
      values.push(event.target.value);
    } else {
      index = values.indexOf(event.target.value);
      values.splice(index, 1);
    }
    // eslint-disable-next-line react/destructuring-assignment
    this.setState({ checkedValues: values });
    // this.props.handleChange;
  };

  renderChildren = () => {
    const { children, name } = this.props;
    const { checked } = this.state;

    return React.Children.map(children, child => {
      const props = {
        checked: checked === child.props.value,
        handleChange: this.handleChange,
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
      // handleChangeGroup,
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
  // handleChangeGroup: PropTypes.func.isRequired,
  /**
   * The text that gets placed into the legend element.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name is a unique name for the ` <RadioGroup />` given to all the Radios.
   */
  name: PropTypes.string.isRequired,
  // validators: PropTypes.array,
};

CheckboxGroup.defaultProps = {
  className: '',
  disabled: false,
  error: '',
  form: '',
  // validators: [],
};

export default CheckboxGroup;
