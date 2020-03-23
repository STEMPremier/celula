import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './icons/icons.svg';
import './icon.less';

import { PRODUCT_ICONS } from './types';

const SIZES = ['small', 'large', 'jumbo'];

/** Bold icons are used with a gradient background circle.
 * These icons can be actionable or used as a static element.
 */
const ProductIcon = props => {
  const { name, size } = props;

  /* eslint-disable prettier/prettier */
  const classes = cx(
    'ce-icon',
    'ce-icon__product',
    {
      [`ce-icon--${size}`]: SIZES.includes(size.toString().toLowerCase()),
    },
  );
  /* eslint-enable prettier/prettier */

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
   * The `<ProductIcon />`
   */
  name: PropTypes.oneOf(PRODUCT_ICONS).isRequired,
  /**
   * The size you want the `<ProductIcon />` to be.
   */
  size: PropTypes.oneOf(SIZES),
};

ProductIcon.defaultProps = {
  size: 'small',
};

export default ProductIcon;
