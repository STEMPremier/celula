/* Copyright 2021 Tallo Inc.,
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
import cx from 'classnames';

import './linear-loader.less';

/**
 * Progress indicators inform users about the status of ongoing processes, such as loading an
 * application, submitting a form or saving updates. They communicate an application’s state and
 * indicate available actions, such as whether users can navigate away from the current screen.
 */
const LinearLoader = ({
  className,
  color,
  indeterminate,
  legend,
  percentage,
  style,
}) => {
  const classes = cx(
    'ce-linear-loader',
    {
      'ce-ll-indeterminate': indeterminate,
      'ce-ll-percentage': !indeterminate,
    },
    className,
  );

  return (
    <div className={classes} style={style}>
      {legend && <span className="ce-ll__legend">{legend}</span>}
      <div className="ce-ll__track">
        <span
          className={`ce-ll__fill ce-ll__fill-${color}`}
          style={{ width: `${indeterminate ? 100 : percentage}%` }}
        />
      </div>
    </div>
  );
};

LinearLoader.propTypes = {
  /**
   * A class name, or string of class names, to add to the `LinearLoader`.
   */
  className: PropTypes.string,
  /**
   * The color of the `LinearLoader`.
   */
  color: PropTypes.oneOf(['cool', 'warm', 'hot']),
  /**
   * Changes the `LinearLoader` from a precentage-based one to a generic 'loading' indicator.
   */
  indeterminate: PropTypes.bool,
  /**
   * Any text you would like displayed above the `LinearLoader`.
   */
  legend: PropTypes.string,
  /**
   * The percentage (complete) the `LinearLoader` indicates/fills.
   */
  percentage: PropTypes.number,
  /**
   * Any inline styles you would like to add to the `LinearLoader`. See the React [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

LinearLoader.defaultProps = {
  className: '',
  color: 'warm',
  indeterminate: false,
  legend: '',
  percentage: 0,
  style: {},
};

export default LinearLoader;
