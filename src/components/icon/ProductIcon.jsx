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

// import { PRODUCT_ICONS, SIZES } from '../../utils/constants';
import { SIZES } from '../../utils/constants';

import './icons/icons.svg';
import './icon.less';

/** Bold icons are used with a gradient background circle.
 * These icons can be actionable or used as a static element.
 */
const ProductIcon = ({ className, name, size, style, title }) => {
  const classes = cx(
    'ce-icon',
    'ce-icon__product',
    {
      [`ce-icon--${size}`]: SIZES.includes(size.toString().toLowerCase()),
    },
    className,
  );

  return (
    <span className={classes} style={style}>
      <svg aria-hidden={!title} className="ce-icon--white" role="img">
        <title>{title || name}</title>
        <use xlinkHref={`#icons_product-${name}`} />
      </svg>
    </span>
  );
};

ProductIcon.propTypes = {
  /**
   * A class name, or string of class names, to add to the `<ProductIcon />`.
   */
  className: PropTypes.string,
  /**
   * The `<ProductIcon />`.
   */
  // name: PropTypes.oneOf(PRODUCT_ICONS).isRequired,
  name: PropTypes.oneOf([
    'college',
    'military',
    'workforce',
    'career-interests',
    'location',
    'organizations-clubs',
    'arts-crafts',
    'sports-exercise',
    'volunteer',
    'cooking-baking',
    'music',
    'certification',
    'desk',
    'outdoor',
    'private-office',
    'open-office',
    'indoor',
    'manufacturing',
    'remote',
    'travel',
    'colleges',
    'demographics',
    'profile',
    'career-interests',
  ]).isRequired,
  /**
   * The size you want the `<ProductIcon />` to be.
   */
  // size: PropTypes.oneOf(SIZES),
  size: PropTypes.oneOf(['small', 'large', 'jumbo']),
  /**
   * Any inline styles you would like to add to the `<Producticon />`. See the React [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * By default, we hide ProductIcons from assitive technologies,
   * such as screen readers, because there should be useful text
   * associated with most icons.
   *
   * If you need to use an icon with no text, just add a descriptive title,
   * and the icon will no longer be hidden from those technologies.
   */
  title: PropTypes.string,
};

ProductIcon.defaultProps = {
  className: '',
  size: 'small',
  style: {},
  title: '',
};

export default ProductIcon;
