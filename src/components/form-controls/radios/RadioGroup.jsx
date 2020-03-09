import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './radios.less';

class RadioGroup extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    checkedValue: this.props.value,
  };

  handleChange = event => {
    this.setState(
      { checkedValue: event.target.value },
      // eslint-disable-next-line react/destructuring-assignment
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
      <form>
        <fieldset
          className={classes}
          name={name}
          form={form}
          onChange={this.handleChange}
          disabled={disabled}
        >
          <legend className="ce-radio-group--label">
            {label}
            {error && <div className="ce-radio-error--text">{error}</div>}
          </legend>
          {this.renderChildren()}
        </fieldset>
      </form>
    );
  }
}

RadioGroup.propTypes = {
  /**
   * This is the Radios for the radio group.
   */
  children: PropTypes.node.isRequired,
  /**
   * A class name added to the` <RadioGroup />`.
   */
  className: PropTypes.string,
  /**
   * Makes the entire radio group inactive.
   */
  disabled: PropTypes.bool,
  /**
   * The error message on the radio. I JUST NOW SAW THIS....SHOULD I CHANGE HOW THE ERROR MESSAGE IS DISPLAYED
   */
  error: PropTypes.string,
  /**
   * The name of the form the RadioGroup belongs to.
   */
  form: PropTypes.string,
  /**
   * A function that is called when the radio is clicked.
   */
  handleChange: PropTypes.func.isRequired,
  /**
   * The text that gets placed into the legend element.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name is a unique name for the RadioGroup given to all the Radios.
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
