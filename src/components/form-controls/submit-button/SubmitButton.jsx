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
const TYPE = ['text', 'outline'];
const SIZE = ['small', 'large', 'jumbo'];

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
   * A function that is called when the button is clicked.
   */
  handleClick: PropTypes.func.isRequired,
  /**
   * Make the button inactive.
   */
  disabled: PropTypes.bool,
  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(SIZE),
  /**
   * Which type of button to render.
   */
  type: PropTypes.oneOf(TYPE),
};

SubmitButton.defaultProps = {
  className: '',
  color: 'primary',
  disabled: false,
  size: 'small',
  type: 'default',
};
