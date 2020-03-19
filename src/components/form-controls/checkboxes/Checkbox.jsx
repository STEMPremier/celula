import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './checkboxes.less';

const Checkbox = props => {
  // NOTE THAT THERE WAS NO CHECKED IN THE STORY.  SEE IF NEEDED
  // DUPLICATE HANDLECHANGE IN BOTH CHECKBOX AND GROUP.  LETS WAIT AND SEE WHERE THIS FALLS
  const { className, disabled, name, label, value } = props;
  // NOT SURE IF THE BELOW ID FORMAT WILL BE THE SAME;
  const id = `${name}_${value}`;
  const classes = cx(
    'ce-checkbox',
    {
      // 'ce-radio--checked': checked,
    },
    className,
  );
  return (
    <div className={classes}>
      <div className="ce-checkbox--box">
        <input
          type="checkbox"
          value={value}
          id={id}
          disabled={disabled}
          name={name}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  /**
   * A class name added to the `<CheckboxGroup />`.
   */
  className: PropTypes.string,
  /**
   * The current checked state.
   */
  // checked: PropTypes.bool,
  /**
   * Make the RadioGroup inactive.
   */
  disabled: PropTypes.bool,
  // NAME NOT IN STORY
  /**
   * Need to assign a matching name to each `<Checkbox />` in the `<CheckboxGroup />`.
   */
  name: PropTypes.string.isRequired,
  // /**
  //  * The id will also be the name of the checkbox, unless in a group.
  //  */
  // id: PropTypes.string.isRequired,
  /**
   * The label you assign is the text that shows up next to each individual `<Checkbox />` button.
   */
  label: PropTypes.string.isRequired,
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
  disabled: false,
  // error: ''
};

export default Checkbox;
