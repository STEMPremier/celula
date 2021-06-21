/* Copyright 2020 Tallo Inc.,
 *
 * This file is part of Celula.
 *
 * Celula is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import React from 'react';
import PropTypes from 'prop-types';

import './error-box.less';

const ErrorBox = ({ errorMsg, style }) => (
  <div className="ce-errorbox" style={style}>
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
   * An error message to display.
   */
  errorMsg: PropTypes.string.isRequired,
  /**
   * Any inline styles you would like to add to the `ErrorBox`. See the React
   * [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

ErrorBox.defaultProps = {
  style: {},
};
