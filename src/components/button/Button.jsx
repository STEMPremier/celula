import React from 'react';
import PropTypes from 'prop-types';

import './button.less';

const Button = ({ label, handleClick }) => <button className="button" onClick={handleClick} type="button">{label}</button>;

Button.propTypes = {
  /**
   * Description of prop `label`. This text is from the source code.
   */
  label: PropTypes.string.isRequired,
  /**
   * Description of prop `handleClick`. This text is from the source code.
   */
  handleClick: PropTypes.func.isRequired,
};

export default Button;
