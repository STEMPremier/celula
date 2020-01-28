import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../button';

const SubmitButton = props => {
  const {
    className,
    children,
    color,
    handleClick,
    outline,
    size,
    type,
  } = props;

  return (
    <Button
      className={className}
      color={color}
      handleClick={handleClick}
      outline={outline}
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
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'blue',
    'red',
    'purple',
    'orange',
    'green',
  ]),
  /**
   * A function that is called when the button is clicked.
   */
  handleClick: PropTypes.func.isRequired,
  /**
   * Make the button an outline button.
   */
  outline: PropTypes.bool,
  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(['small', 'large', 'jumbo']),
  /**
   * Which type of button to render.
   */
  type: PropTypes.oneOf(['default', 'text', 'icon']),
};

SubmitButton.defaultProps = {
  className: '',
  color: 'default',
  outline: false,
  size: 'small',
  type: 'default',
};
