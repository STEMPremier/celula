import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './button.less';

const COLORS = [
<<<<<<< HEAD
  'primary',
  'secondary',
=======
  'primary', // ask Ferg
  'secondary', // ask Ferg
>>>>>>> 88c86ff... drafted all button types in the md  and styles in the less, created color variables in palettes, added disable to propTypes in the button.jsx
  'blue',
  'red',
  'purple',
  'orange',
  'green',
];

const SIZE = ['small', 'large', 'jumbo'];

<<<<<<< HEAD
const TYPE = ['text', 'outline', 'solid'];

=======
>>>>>>> 88c86ff... drafted all button types in the md  and styles in the less, created color variables in palettes, added disable to propTypes in the button.jsx
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
    disabled,
  } = props;

  const classes = cx(
    'ce-button',
    {
      [`ce-button--${color}`]: COLORS.includes(color.toString().toLowerCase()),
      [`ce-button--${size}`]: SIZE.includes(size.toString().toLowerCase()),
<<<<<<< HEAD
      [`ce-button--${type}`]: TYPE.includes(type.toString().toLowerCase()),
=======
      [`ce-button--${type}`]: type, // same array control format
>>>>>>> 88c86ff... drafted all button types in the md  and styles in the less, created color variables in palettes, added disable to propTypes in the button.jsx
      'ce-button--outline': outline,
      'ce-button--disabled': disabled,
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
  color: PropTypes.oneOf(COLORS),
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
   * Make the button inactive.
   */
  disabled: PropTypes.bool,
  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(['small', 'large', 'jumbo']),
  /**
   * Which type of button to render.
   */
<<<<<<< HEAD
  type: PropTypes.oneOf(TYPE),
=======
  type: PropTypes.oneOf(['text', 'icon']),
>>>>>>> 88c86ff... drafted all button types in the md  and styles in the less, created color variables in palettes, added disable to propTypes in the button.jsx
};

Button.defaultProps = {
  className: '',
  color: 'default',
  htmlType: 'button',
  outline: false,
  size: 'small',
  type: 'default',
  disabled: false,
};

export default Button;
