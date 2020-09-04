import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './link.less';

import { COLORS, LINK_TEXT_STYLES as TYPES } from '../../utils/constants';

/**
 * Typically `Links` are used inline with a paragraph while standard all caps complement button groups or individually.
 */
const Link = ({ className, textStyle, color, address, text }) => {
  const classes = cx(
    'ce-link',
    {
      [`ce-link--${textStyle}`]: TYPES.includes(
        textStyle.toString().toLowerCase(),
      ),
      [`ce-link--${color}`]: COLORS.includes(color.toString().toLowerCase()),
    },
    className,
  );

  return (
    <a className={classes} href={address}>
      {text}
    </a>
  );
};

Link.propTypes = {
  /**
   * The http address the `<Link />` points to.
   */
  address: PropTypes.string.isRequired,
  /**
   * A class name, or string of class names, to add to the `<Link />`.
   */
  className: PropTypes.string,
  /**
   * The color of the `<Link />`.
   */
  // color: PropTypes.oneOf(COLORS),
  color: PropTypes.oneOf(['primary', 'secondary', 'black', 'inverted']),
  /**
   * The text the `<Link />` displays.
   */
  text: PropTypes.string.isRequired,
  /**
   * The `<Link />` text type.
   */
  // textStyle: PropTypes.oneOf(TYPES),
  textStyle: PropTypes.oneOf(['lowercase', 'uppercase']),
};

Link.defaultProps = {
  className: '',
  color: 'primary',
  textStyle: 'uppercase',
};

export default Link;
