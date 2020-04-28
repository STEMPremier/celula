import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import SystemIcon from '../../icon/SystemIcon';

import './select.less';

class Select extends React.Component {
  state = {
    showLabel: false,
    // eslint-disable-next-line react/destructuring-assignment
    selectedValue: this.props.selectedValue ? this.props.selectedValue : null,
    // selectedOption: null,
    showArrow: false,
  };

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.showArrow) {
      this.setState({
        showArrow: true,
      });
    }
  }
  // componentDidMount() {
  //   if (this.props.selectedValue) {
  //     const selectedObject = this.props.options.filter(
  //       option => option.value === this.props.selectedValue,
  //     );
  //     console.log('selectedObject in componentDidMount', selectedObject);
  //     this.setState({
  //       selectedOption: selectedObject,
  //     });
  //   }
  // }

  handleSelectedValue = event => {
    this.setState(
      {
        selectedValue: event.target.value,
        // selectedOption: this.props.options.filter(
        //   option =>
        //     option.value === event.target.value &&
        //     console.log('inside selecteOptoin', event.target.value),
        // ),
      },
      () => console.log('state after event', this.state),
    );
  };

  render() {
    const {
      className,
      disabled,
      error,
      name,
      form,
      // handleChange,
      label,
      options,
      showArrow,
      rightArrowClick,
      selectedValue,
    } = this.props;

    // eslint-disable-next-line no-unused-vars
    const { showLabel, selectedOption } = this.state;

    const defaultObject = options.filter(
      option => option.value === selectedValue,
    );

    const id = `${name}`;

    const classes = cx(
      'ce-select',
      {
        'ce-select--disabled': disabled,
        // 'ce-select--error': error,
        'ce-select--show-arrow': showArrow,
      },
      className,
    );

    return (
      <div className={classes}>
        {showLabel && <label htmlFor={id}>{label}</label>}
        <div className="ce-select--wrapper">
          <select
            name={name}
            form={form}
            id={id}
            disabled={disabled}
            onChange={this.handleSelectedValue}
          >
            {defaultObject.length ? (
              defaultObject.map(item => (
                <option key={item.value} value={item.value} hidden>
                  {item.name}
                </option>
              ))
            ) : (
              <option>{label}</option>
            )}

            {options.map(item => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          <div className="ce-select--caret">
            <SystemIcon name="down" color="black" className="ce-select--down" />
          </div>
          {showArrow && (
            <button
              className="ce-select--outside-arrow"
              onClick={rightArrowClick}
              type="submit"
            >
              <SystemIcon
                name="navigate"
                className="ce-select--arrow"
                color="white"
                // color=`${disabled ? "grey"}`"white"
              />
            </button>
          )}
        </div>
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
  disabled: PropTypes.bool,
  /**
   * The select will appear with the right arrow
   */
  showArrow: PropTypes.bool,
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
  // handleChange: PropTypes.func.isRequired,
  /**
   * The error message.
   */
  error: PropTypes.string,
  /**
   * The options is the array of objects containing the name, value, and selected status of each select row.
   */
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array.isRequired,
  // options: PropTypes.arrayof(PropTypes.oneOfType([PropTypes.object]))
  // .isRequired,
  /**
   * This function is accesible to the user for clickable events on the right arrow in the gradient
   */
  rightArrowClick: PropTypes.func,
};

Select.defaultProps = {
  className: '',
  disabled: false,
  form: '',
  error: '',
  selectedValue: '',
  showArrow: false,
  rightArrowClick: () => {},
};

export default Select;
