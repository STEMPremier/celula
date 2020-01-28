import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './button.less';

const Button = props => {
  const {
    children,
    className,
    color,
    handleClick,
    htmlType,
    outline,
    size,
    type,
  } = props;

  const classes = cx(
    'ce-button',
    {
      [`ce-button-${color}`]: color,
      'ce-button-outline': outline,
      [`ce-button-${size}`]: size,
      [`ce-button-${type}`]: type,
    },
    className,
  );

  /* eslint-disable react/button-has-type */
  return (
    <button className={classes} onClick={handleClick} type={htmlType}>
      {children}
    </button>
  );
  /* eslint-enable react/button-has-type */
};

Button.propTypes = {
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
   * The type of button. This should always be `button` unless you are making a SubmitButton.
   *
   * @ignore
   */
  htmlType: PropTypes.oneOf(['button', 'submit']),
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

Button.defaultProps = {
  className: '',
  color: 'default',
  htmlType: 'button',
  outline: false,
  size: 'small',
  type: 'default',
};

export default Button;
