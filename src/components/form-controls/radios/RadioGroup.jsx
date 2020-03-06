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
    },
    className,
  );
  const renderChildren = () => {
    return React.Children.map(children, child => {
      return React.cloneElement(child, handleChange, name);
    });
  };

  return (
    <form>
      <fieldset
        className={classes}
        name={name}
        form={form}
        onChange={handleChange}
        disabled={disabled}
      >
        <legend className="ce-radio-group--label">
          {label}
          <div className="ce-radio-error--text">Error Message</div>
        </legend>
        {renderChildren()}
      </fieldset>
    </form>
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
