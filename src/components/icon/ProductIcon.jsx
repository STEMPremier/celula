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
