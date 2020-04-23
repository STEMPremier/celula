/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import SystemIcon from '../../icon/SystemIcon.jsx';

// {
//   /* <SystemIcon name="navigate" /> */
// }

import './select.less';

class Select extends React.Component {
  state = {
    showLabel: false,
    carrotDown: true,
    // eslint-disable-next-line react/destructuring-assignment
    selectedValue: this.props.selectedValue ? this.props.selectedValue : '',
    // selectedOption: '',
  };

  // componentDidMount() {
  //   if (this.props.selectedValue) {
  //     const selectedObject = this.props.options.filter(
  //       option => option.value === this.props.selectedValue,
  //     );
  //     this.setState({
  //       selectedOption: selectedObject,
  //     });
  //   }
  // }

  handleSelectedValue = event => {
    // eslint-disable-next-line react/destructuring-assignment
    // const assignSelectedValue = Number.isInteger(this.state.selectedValue);
    // eslint-disable-next-line no-unused-expressions
    event
      ? console.log(event.target.value) &&
        this.setState(
          {
            selectedValue: [event.target.value],
          },
          () => console.log('state after event', this.state.selectedValue),
        )
      : console.log('no event', this.state);
    console.log('state after if ', this.state.selectedValue);
    // console.log('this.state.selectedOption', this.state.selectedOption);
  };

  handleCarrot = () => {
    // console.log('handleCarrot props', this.props);
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
      // handleChange,
      label,
      options,
      rightArrowClick,
    } = this.props;

    // eslint-disable-next-line no-unused-vars
    const { showLabel, carrotDown, selectedValue } = this.state;

    // console.log('this.props.options', this.props.options);

    // const selectedOptionName = selectedOption.map(option => option.name);
    // console.log('selectedOptionName', selectedOptionName);
    // const remainingOptions = options.filter(
    //   item => item.name !== selectedOptionName,
    // );

    // console.log('remainingOptionbs', remainingOptions);

    // if (this.props.selectedValue) {
    const selectedOption = this.props.options.filter(
      option => option.value === this.props.selectedValue,
    );
    // console.log('selectedOption in function', selectedOption);
    // }

    // console.log('selectedOption in redner', selectedOption);
    // console.log('this.state.selectedValue', this.state.selectedValue);

    const id = `${name}`;

    // console.log('carrot in render', carrotDown);

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
        <div className="ce-select--wrapper">
          <select
            name={name}
            form={form}
            id={id}
            // onClick={() => this.handleCarrot()}
            onChange={this.handleSelectedValue}
          >
            {/* {selectedOption && selectedOption.length ? (
              selectedOption.map(item => (
                <option key={item.value} value={item.value} hidden>
                  {item.name}
                </option>
              ))
            ) : (
              <option>{label}</option>
            )}
            ) :
            {options.map(item => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))} */}
            {selectedOption.length ? (
              selectedOption.map(item => (
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
          {/* <div className="ce-select--caret">
            <SystemIcon name="down" color="black" className="ce-select--down" />
          </div> */}

          <div className="ce-select--outside-arrow" onClick={rightArrowClick}>
            <SystemIcon
              name="navigate"
              className="ce-select--arrow"
              color="white"
            />
          </div>
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
  rightArrowClick: PropTypes.func.isRequired,
};

Select.defaultProps = {
  className: '',
  // disabled: false,
  form: '',
  error: '',
  selectedValue: '',
};

export default Select;
