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
import cx from 'classnames';

import './container.less';

/**
 * `Container` group componets together, adding margin, padding, or neither, and an optional border.
 */
const Container = ({ border, className, children, gap, style }) => {
  const classes = cx(
    'ce-container',
    {
      'ce-container__border': border,
      [`ce-container__${gap}`]: gap !== 'none',
    },
    className,
  );

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

Container.propTypes = {
  /**
   * Add a border around the `Container`.
   */
  border: PropTypes.bool,
  /**
   * Any renderable elements the `Container` is to contain.
   */
  children: PropTypes.node.isRequired,
  /**
   * A class name, or a string of class names, to add to the `Container`.
   */
  className: PropTypes.string,
  /**
   * The method the spacing (if any) around the `Container` is applied.
   */
  gap: PropTypes.oneOf(['margin', 'padding', 'none']),
  /**
   * Any inline styles you would like to add to the `Container`. See the React
   * [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Container.defaultProps = {
  border: false,
  className: '',
  gap: 'margin',
  style: {},
};

export default Container;
