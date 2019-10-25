import React from 'react';
import PropTypes from 'prop-types';

import './button.less';

/**
 * General component description in JSDoc format, from the source code. Markdown **is** supported.
 */
const Button = ({ label }) => <button className="button" type="button">{label}</button>;

Button.propTypes = {
  /** Description of prop `label`. */
  label: PropTypes.string.isRequired,
};

export default Button;
