import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './radios.less';
/* eslint-disable no-unused-expressions */
const RadioGroup = props => {
  const {
    children,
    className,
    disabled,
    error,
    form,
    label,
    name,
    handleChange,
    // validators,
  } = props;

  const classes = cx(
    'ce-radio',
    {
      'ce-radio--disabled': disabled,
      'ce-radio--error': error,
      // 'ce-radio--form': form,
      // 'ce-radio--label': label,
    },
    className,
  );
  const handleClick = event => {
    // disabled = true ? event.preventDefault() : handleChange();
    disabled === true ? console.log('event', event) : handleChange();
  };
  const renderChildren = () => {
    return React.Children.map(children, child => {
      return React.cloneElement(child, handleChange, name);
    });
  };

  return (
    <fieldset
      className={classes}
      name={name}
      form={form}
      onChange={handleClick}
      disabled={disabled}
    >
      <legend>{label}</legend>
      {renderChildren()}
    </fieldset>
  );
};

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * A class name added to the radio.
   */
  className: PropTypes.string,
  /**
   * Make the radio group inactive.
   */
  disabled: PropTypes.bool,
  /**
   * The error message on the radio.
   */
  error: PropTypes.string,
  /**
   * ?????????????????
   */
  form: PropTypes.string,
  /**
   * A function that is called when the radio is clicked.
   */
  handleChange: PropTypes.func.isRequired,
  /**
   * Acts similar to a legen on the radio group.
   */
  label: PropTypes.string.isRequired,
  /**
   * Need to assign a name to each.
   */
  name: PropTypes.string.isRequired,
  // validators: PropTypes.array,
};

RadioGroup.defaultProps = {
  className: '',
  disabled: false,
  error: '',
  form: '',
  // validators: [],
};

export default RadioGroup;
