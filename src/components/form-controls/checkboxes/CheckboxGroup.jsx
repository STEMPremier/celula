import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './checkbox.less';

class CheckboxGroup extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    checkedValues: [this.props.selectedValues],
  };

  handleChange = event => {
    const { handleChange } = this.props;
    const { checkedValues } = this.state;
    let values = checkedValues.flat();

    if (event.target.checked) {
      values.push(event.target.value);
    } else {
      values = values.filter(arrayValue => arrayValue !== event.target.value);
    }

    this.setState({ checkedValues: values });

    handleChange(event.target.value);
  };

  renderChildren = () => {
    const { children, name, selectedValues } = this.props;

    return React.Children.map(children, child => {
      const props = {
        selectedValues,
        name,
      };
      return React.cloneElement(child, { ...props });
    });
  };

  render() {
    const {
      className,
      disabled,
      errorMsg,
      formId,
      label,
      name,
      // validators
    } = this.props;

    const classes = cx(
      'ce-checkbox',
      {
        'ce-checkbox--disabled': disabled,
        'ce-checkbox--error': errorMsg,
      },
      className,
    );

    return (
      <fieldset
        className={classes}
        name={name}
        form={formId}
        onChange={this.handleChange}
        disabled={disabled}
      >
        <legend>
          {label}
          {errorMsg && (
            <div className="ce-checkbox--error-text">{errorMsg}</div>
          )}
        </legend>
        {this.renderChildren()}
      </fieldset>
    );
  }
}

CheckboxGroup.propTypes = {
  /**
   * The `<Checkbox />` components you want the `<CheckboxGroup />` to group together.
   */
  children: PropTypes.node.isRequired,
  /**
   * A class name, or string of class names, to add to the `<CheckboxGroup />`.
   */
  className: PropTypes.string,
  /**
   * Disables the `<CheckboxGroup />` and all of its children.
   */
  disabled: PropTypes.bool,
  /**
   * An error message to display in the `<CheckboxGroup />`.
   */
  errorMsg: PropTypes.string,
  /**
   * The id of the form the `<CheckboxGroup />` belongs to.
   */
  formId: PropTypes.string,
  /**
   * A function to trigger when the state of the `<CheckboxGroup />` changes.
   */
  handleChange: PropTypes.func,
  /**
   * The `<CheckboxGroup />` legend.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name given to all the children of the `<CheckboxGroup />`.
   */
  name: PropTypes.string.isRequired,
  /**
   * The values used to pre-select some children of the `<CheckboxGroup />`.
   */
  selectedValues: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ),
  // validators: PropTypes.array,
};

CheckboxGroup.defaultProps = {
  className: '',
  disabled: false,
  errorMsg: '',
  formId: '',
  handleChange: () => {},
  selectedValues: [],
  // validators: [],
};

export default CheckboxGroup;
