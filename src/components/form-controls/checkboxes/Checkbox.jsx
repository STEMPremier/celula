import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './checkboxes.less';

class Checkbox extends Component {
  state = {
    checked: false,
    showFocus: false,
  };

  componentDidMount() {
    if (
      // eslint-disable-next-line react/destructuring-assignment
      this.props.defaultGroupValue &&
      // eslint-disable-next-line react/destructuring-assignment
      this.props.defaultGroupValue.includes(this.props.value)
    ) {
      this.setState({
        checked: true,
      });
    }
    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.checkedIndividualDefault) {
      this.setState({
        checked: true,
      });
    }
  }

  handleChange = event => {
    this.setState({
      checked: event.target.checked,
    });
  };

  onMouseEnter = () =>
    this.setState({
      showFocus: true,
    });

  onMouseLeave = () => this.setState({ showFocus: false });

  render() {
    const { className, disabled, error, name, label, value, form } = this.props;

    const { checked, showFocus } = this.state;
    const id = `${name}_${value}`;
    const classes = cx(
      'ce-checkbox',
      {
        'ce-checkbox--disabled': disabled,
        'ce-checkbox--individual-checkbox-error': error,
      },
      className,
    );

    return (
      <div className={classes}>
        <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
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
            {showFocus ? <div className="ce-checkbox--focus" /> : null}
            {error && (
              <div className="ce-checkbox--error-box-wrapper">
                <div className="ce-checkbox--arrow" />
                <div className="ce-checkbox--error-box">
                  <div className="ce-checkbox--error-box-text">{error}</div>
                </div>
              </div>
            )}
          </div>
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
   * Error message on single `<Checkbox />'
   */
  error: PropTypes.string,
  /**
   * Need to assign a matching name to each `<Checkbox />` if it is being used outside of the `<CheckboxGroup />`.  In  a `<CheckboxGroup />`, each individual `<Checkbox />` will have the same name, but that will come from the `<CheckboxGroup />`.
   */
  name: PropTypes.string,
  /**
   * The form value is over-written by any form value passed into the `<CheckboxGroup />`.
   */
  form: PropTypes.string,
  /**
   * The label you assign is the text that shows up next to each individual `<Checkbox />` button.
   */
  label: PropTypes.string.isRequired,
  /**
   * The default array of values being passed down from the `<CheckboxGroup />`.  They are the pre-selected checkboxes from that outer `<CheckboxGroup />`.
   */
  defaultGroupValue: PropTypes.arrayOf(PropTypes.any),
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
  error: '',
  defaultGroupValue: [],
};

export default Checkbox;
