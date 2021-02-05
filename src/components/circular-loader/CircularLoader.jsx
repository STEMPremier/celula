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
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './loader.less';

const INITIAL_OFFSET = 25; // The default starting place to draw the progess line is '3 o'clock'. This moves it back to '12'.
const circleConfig = {
  radius: '15.91549430918954', // radius = cirumfrence / 2pi; we want a circumferunce of 100 to easily display precentages
  strokeWidth: 1,
  viewBox: '0 0 38 38',
  x: '19',
  y: '19',
};

const CircularLoader = ({
  className,
  color,
  indeterminate,
  legend,
  percentage,
  showPercentage,
}) => {
  const [progressBar, setProgressBar] = useState(0);

  const pace = percentage / 5;
  const increasePercentage = () => {
    setTimeout(() => {
      setProgressBar(progressBar + 1);
    }, pace);
  };

  const decreasePercentage = () => {
    setTimeout(() => {
      setProgressBar(progressBar - 1);
    }, pace);
  };

  useEffect(() => {
    if (percentage > 0) increasePercentage();
  }, [percentage]);

  useEffect(() => {
    if (progressBar < percentage) {
      increasePercentage();
    } else if (progressBar > percentage) {
      decreasePercentage();
    }
  }, [progressBar]);

  const classes = cx(
    'ce-circular-loader',
    { 'ce-cl-indeterminate': indeterminate },
    className,
  );

  return (
    <>
      <div className={classes}>
        <svg viewBox={circleConfig.viewBox}>
          <defs>
            <filter id="shadow">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="0.3"
                floodColor="rgb(116,55,187,0.4)"
              />
            </filter>
          </defs>
          <linearGradient id="cool" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6645ad" />
            <stop offset="100%" stopColor="#2d71be" />
          </linearGradient>
          <linearGradient id="warm" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fba635" />
            <stop offset="100%" stopColor="#acd74e" />
          </linearGradient>
          <linearGradient id="hot" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#62248d" />
            <stop offset="100%" stopColor="#c4356e" />
          </linearGradient>
          {/* The path */}
          <circle
            cx={circleConfig.x}
            cy={circleConfig.y}
            r={circleConfig.radius}
            fill="transparent"
            stroke="#d2d3d4"
            strokeWidth={circleConfig.strokeWidth}
            strokeDasharray="0"
          />
          {/* The progress */}
          <circle
            style={{ filter: 'url(#shadow)' }}
            cx={circleConfig.x}
            cy={circleConfig.y}
            r={circleConfig.radius}
            fill="transparent"
            stroke={`url(#${color})`}
            strokeDasharray={
              indeterminate ? '25 75' : `${progressBar} ${100 - progressBar}`
            }
            strokeDashoffset={INITIAL_OFFSET}
            strokeLinecap="round"
            strokeWidth={circleConfig.strokeWidth}
          />
          {showPercentage && (
            <g className="ce-cl__label">
              <text x="50%" y="50%" className="ce-cl__label__number">
                {`${progressBar}%`}
              </text>
            </g>
          )}
        </svg>
      </div>
      {legend && <span className="ce-cl__legend">{legend}</span>}
    </>
  );
};

CircularLoader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  indeterminate: PropTypes.bool,
  legend: PropTypes.string,
  percentage: PropTypes.string,
  showPercentage: PropTypes.bool,
};

CircularLoader.defaultProps = {
  className: '',
  color: 'cool',
  legend: '',
  indeterminate: false,
  percentage: '0',
  showPercentage: false,
};

export default CircularLoader;
