/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './radios.less';

class RadioGroup extends Component {
  state = {
    checkedValue: this.props.value,
  };

  handleChange = event => {
    this.setState(
      { checkedValue: event.target.value },
      this.props.handleChange,
    );
  };

  renderChildren = () => {
    const { children, name } = this.props;
    const { checkedValue } = this.state;

    return React.Children.map(children, child => {
      const props = {
        checked: checkedValue === child.props.value,
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
      // validators,
    } = this.props;

    const classes = cx(
      'ce-radio',
      {
        'ce-radio--disabled': disabled,
        'ce-radio--error': error,
      },
      className,
    );

    return (
      <fieldset
        className={classes}
        name={name}
        form={form}
        onChange={this.handleChange}
        disabled={disabled}
      >
        <legend>
          {label}
          {error && <div className="ce-radio-error--text">{error}</div>}
        </legend>
        {this.renderChildren()}
      </fieldset>
    );
  }
}

RadioGroup.propTypes = {
  /**
   * This is the `<Radio />`s for the `<RadioGroup />`.
   */
  children: PropTypes.node.isRequired,
  /**
   * A class name added to the `<RadioGroup />`.
   */
  className: PropTypes.string,
  /**
   * Makes the entire `<RadioGroup />` inactive.
   */
  disabled: PropTypes.bool,
  /**
   * The error message on the `<Radio />`.
   */
  error: PropTypes.string,
  /**
   * The name of the form the `<RadioGroup />` belongs to.
   */
  form: PropTypes.string,
  /**
   * A function that is passed to the all `<Radios />`s to be called when the `<Radio />` is clicked.
   */
  handleChange: PropTypes.func.isRequired,
  /**
   * The text that gets placed into the legend element.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name is a unique name for the `<RadioGroup />` given to all the Radios.
   */
  name: PropTypes.string.isRequired,
  // validators: PropTypes.array,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
};

RadioGroup.defaultProps = {
  className: '',
  disabled: false,
  error: '',
  form: '',
  value: '',
  // validators: [],
};

export default RadioGroup;
/* eslint-enable react/destructuring-assignment */
