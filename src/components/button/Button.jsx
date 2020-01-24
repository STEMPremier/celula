import React from 'react';
import PropTypes from 'prop-types';

import './button.less';

const Button = props => {
  const { handleClick, children, type } = props;

  /* eslint-disable react/button-has-type */
  return (
    <button className="button" onClick={handleClick} type={type}>
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
   * A function that is called when the button is clicked.
   */
  handleClick: PropTypes.func.isRequired,
  /**
   * The type of button. This should always be `button` unless you are making a form.
   */
  type: PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
