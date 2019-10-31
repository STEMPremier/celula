import React from 'react';
import PropTypes from 'prop-types';

import './button.less';

/**
 * General component description in JSDoc format, from the source code. Markdown **is** supported.
 */
const Button = ({ label, handleClick }) => <button className="button" onClick={handleClick} type="button">{label}</button>;

Button.propTypes = {
  /** Description of prop `label`. */
  label: PropTypes.string.isRequired,
  /** The function you want to execute on click. */
  handleClick: PropTypes.func.isRequired,
};

export default Button;
