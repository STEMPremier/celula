import React from 'react';
import PropTypes from 'prop-types';

import './error-box.less';

const ErrorBox = ({ errorMsg }) => (
  <div className="ce-errorbox">
    <div className="ce-errorbox__container">
      <div className="ce-errorbox__arrow" />
      <div className="ce-errorbox__message">
        <span className="ce-errorbox__text">{errorMsg}</span>
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
