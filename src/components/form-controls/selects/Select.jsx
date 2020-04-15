/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Select extends React.Component {
  handleChange = () => console.log('this.props', this.props);

  render() {
    const {
      className,
      disabled,
      error,
      name,
      form,
      handleChange,
      label,
      value,
      options,
    } = this.props;

    const id = `${name}`;

    const classes = cx(
      'ce-select',
      {
        'ce-select--disabled': disabled,
        'ce-select--error': error,
      },
      className,
    );
    return (
      <div className={classes}>
        <label className="ce-select--label" htmlFor={id}>
          {label}
        </label>
        <select name={name} id={id} form={form}>
          <option>{value}</option>
          {options.map(item => (
            <option key={item.value} handleChange={handleChange}>
              {item.name}
            </option>
          ))}
        </select>
        <span error={error} />
      </div>
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  form: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array.isRequired,
};

Select.defaultProps = {
  name: '',
  className: '',
  disabled: false,
  form: '',
  error: '',
};

export default Select;
