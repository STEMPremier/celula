import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Select extends React.Component {
  state = {
    showLabel: false,
    carrotDown: false,
  };

  handleCarrot = () => {
    this.setState(prevState => ({
      carrotDown: !prevState.carrotDown,
    }));
    // eslint-disable-next-line react/destructuring-assignment
    console.log('handleCarrot', this.state.carrotDown);
  };

  render() {
    const {
      className,
      // disabled,
      error,
      name,
      form,
      handleChange,
      label,
      value,
      options,
    } = this.props;

    const { showLabel, carrotDown } = this.state;

    console.log(carrotDown);

    const id = `${name}_${value}`;

    const classes = cx(
      'ce-select',
      {
        // 'ce-select--disabled': disabled,
        // 'ce-select--error': error,
      },
      className,
    );
    return (
      <div className={classes}>
        {showLabel && <label htmlFor={id}>{label}</label>}
        <select
          className="ce-select--button"
          name={name}
          id={id}
          form={form}
          onClick={() => this.handleCarrot()}
          onChange={handleChange}
        >
          {value ? <option>{value}</option> : <option>{label}</option>}
          {options.map(item => (
            <option key={item.value}>{item.name}</option>
          ))}
          <span>practice arrow down state change</span>
        </select>
        <span className="ce-select--outside-arrow">span 1</span>
        <span error={error} />
      </div>
    );
  }
}

Select.propTypes = {
  /**
   * A class name added to the select.
   */
  className: PropTypes.string,
  /**
   * Make the selected disabled
   */
  // disabled: PropTypes.bool,
  /**
   * The label is required for accessibilty eventhough it will not show if you give it a default value instead.
   */
  label: PropTypes.string.isRequired,
  /**
   * The value is the optional prelected default option to appear in the select.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The form is what the select belongs to.  NOT SURE EXACTLY.  DOUBLE CHECK WITH IAN.
   */
  form: PropTypes.string,
  /**
   * NOT SURE ABOUT THIS EITHER
   */
  name: PropTypes.string,
  /**
   * A function that is called when changing the `<Select />`.
   */
  handleChange: PropTypes.func.isRequired,
  /**
   * The error message.
   */
  error: PropTypes.string,
  /**
   * The options is the array of objects containing the name and value of each select row.
   */
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array.isRequired,
};

Select.defaultProps = {
  name: '',
  className: '',
  // disabled: false,
  form: '',
  error: '',
  value: '',
};

export default Select;
