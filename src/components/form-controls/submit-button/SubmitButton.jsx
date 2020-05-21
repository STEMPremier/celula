import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../button';

import { BUTTON_TYPES as TYPES, COLORS, SIZES } from '../../../utils/constants';

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
   * The `<SubmitButton />` label.
   */
  children: PropTypes.string.isRequired,
  /**
   * A class name, or string of class names, to add to the `<SubmitButton />`.
   */
  className: PropTypes.string,
  /**
   * The color of the `<SubmitButton />`.
   */
  color: PropTypes.oneOf(COLORS),
  /**
   * Disables the `<SubmitButton />`.
   */
  disabled: PropTypes.bool,
  /**
   * A function to trigger when the `<SubmitButton />` is clicked.
   */
  handleClick: PropTypes.func.isRequired,
  /**
   * The size of the `<SubmitButton />`.
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * Which type of `<SubmitButton />` to render.
   */
  type: PropTypes.oneOf(TYPES),
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
