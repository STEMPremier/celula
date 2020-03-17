import React from 'react';
import PropTypes from 'prop-types';

import './product-icons/icons.svg';
import './icon.less';

import { PRODUCT_ICONS } from './types';

/** Bold icons are used with a gradient background circle.
 * These icons can be actionable or used as a static element.
 */
const ProductIcon = props => {
  const { name } = props;

  return (
    <svg className="ce-icon ce-icon--product ce-icon-black">
      <use xlinkHref={`#icons_${name}`} />
    </svg>
  );
};

ProductIcon.propTypes = {
  /**
   * The `<ProductIcon />`
   */
  name: PropTypes.oneOf(PRODUCT_ICONS).isRequired,
};

export default ProductIcon;
