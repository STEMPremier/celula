import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './select.less';

class Select extends React.Component {
  
  state = {
    showLabel: false,
    carrotDown: false,
    selectedValue: selectedValue ? selectedValue : '',
  };

  const {selectedValue} = this.props; 

  selectValue = () => {};

  handleCarrot = () => {
    this.setState(prevState => ({
      carrotDown: !prevState.carrotDown,
    }));
    // eslint-disable-next-line react/destructuring-assignment
    // console.log('handleCarrot', this.state.carrotDown);
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

    // eslint-disable-next-line no-console
    console.log(carrotDown);

    const id = `${name}`;

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
          name={name}
          form={form}
          id={id}
          onClick={() => this.handleCarrot()}
          onChange={handleChange}
          onBlur={() => this.selectValue()}
        >
          {value ? <option>{value}</option> : <option>{label}</option>}
          {options.map(item => (
            <option key={item.value}>{item.name}</option>
          ))}
        </select>
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
   * The value is the optional preselected default option to appear in the select.
   */
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The form is what the select belongs to.  NOT SURE EXACTLY.  DOUBLE CHECK WITH IAN.
   */
  form: PropTypes.string,
  /**
   * The name for the select is required for accessibilty purposes of attaching a unique id.
   */
  name: PropTypes.string.isRequired,
  /**
   * A function that is called when changing the `<Select />`.
   */
  handleChange: PropTypes.func.isRequired,
  /**
   * The error message.
   */
  error: PropTypes.string,
  /**
   * The options is the array of objects containing the name, value, and selected status of each select row.
   */
  options: PropTypes.arrayof(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
};

Select.defaultProps = {
  className: '',
  // disabled: false,
  form: '',
  error: '',
  value: '',
};

export default Select;
