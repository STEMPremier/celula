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
const ProductIcon = ({ name, size }) => {
  const classes = cx('ce-icon', 'ce-icon__product', {
    [`ce-icon--${size}`]: SIZES.includes(size.toString().toLowerCase()),
  });

  return (
    <span className={classes}>
      <svg className="ce-icon--white">
        <use xlinkHref={`#icons_product-${name}`} />
      </svg>
    </span>
  );
};

ProductIcon.propTypes = {
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
};

ProductIcon.defaultProps = {
  size: 'small',
};

export default ProductIcon;
