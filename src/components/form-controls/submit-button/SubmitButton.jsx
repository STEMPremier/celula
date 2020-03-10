import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../button';

const COLORS = [
  'primary',
  'secondary',
  'blue',
  'green',
  'orange',
  'purple',
  'red',
];
const SIZES = ['small', 'large', 'jumbo'];
const TYPES = ['text', 'outline'];

/**
 * `Submit Buttons` allow users to submit forms with a single tap.. They are typically placed throughout your UI in every form.
 */
const SubmitButton = props => {
  const {
    children,
    className,
    color,
    disabled,
    handleClick,
    size,
    type,
  } = props;

  return (
    <Button
      className={className}
      color={color}
      disabled={disabled}
      handleClick={handleClick}
      htmlType="submit"
      size={size}
      type={type}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;

SubmitButton.propTypes = {
  /**
   * The text of the button.
   */
  children: PropTypes.string.isRequired,
  /**
   * A class name added to the button.
   */
  className: PropTypes.string,
  /**
   * The color of the button.
   */
  color: PropTypes.oneOf(COLORS),
  /**
   * Make the button inactive.
   */
  disabled: PropTypes.bool,
  /**
   * A function that is called when the button is clicked.
   */
  handleClick: PropTypes.func.isRequired,
  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * Which type of button to render.
   */
  type: PropTypes.oneOf([...TYPES, 'default']),
  /**
   * A function that is called when the button is clicked.
   */
};

SubmitButton.defaultProps = {
  className: '',
  color: 'primary',
  disabled: false,
  size: 'small',
  type: 'default',
};
