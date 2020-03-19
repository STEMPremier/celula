import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './checkboxes.less';
import RadioGroup from '../radios/RadioGroup';

class CheckboxGroup extends Component {

};

render() {
  const {
    className,
    disabled,
    error,
    form,
    handleChange,
    label,
    name,
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
   * A function that is passed to the all `<Radios />`s to be called when the `<Radio />` is clicked.
   */
  handleChange: PropTypes.func.isRequired,
  /**
   * The text that gets placed into the legend element.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name is a unique name for the ` <RadioGroup />` given to all the Radios.
   */
  name: PropTypes.string.isRequired,
  // DOUBLE CHECK THAT THERE IS NO VALUE BC SEEMS IMPORTANT BUT NOT IN STORY
  // validators: PropTypes.array,
};

RadioGroup.defaultProps = {
  className: '',
  disabled: false,
  error: '',
  form: '',
  // validators: [],
};

export default CheckboxGroup;