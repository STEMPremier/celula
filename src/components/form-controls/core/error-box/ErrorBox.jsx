import React from 'react';
import PropTypes from 'prop-types';

import './error-box.less';

const ErrorBox = ({ errorMsg = '' }) => (
  <div className="ce-errorbox--error__container">
    <div>
      <div className="ce-errorbox--error__arrow" />
      <div className="ce-errorbox--error__message">
        <span className="ce-errorbox--error__text">{errorMsg}</span>
      </div>
    </div>
  </div>
);

export default ErrorBox;

ErrorBox.propTypes = {
  /**
   * An error message to display
   */
  errorMsg: PropTypes.string.isRequired,
};
