import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './link.less';

import { COLORS, LINK_TEXT_STYLES as TYPES } from '../../utils/constants';

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
   * A class name, or string of class names, to add to the `<Link />`.
   */
  className: PropTypes.string,
  /**
   * The color of the `<Link />`.
   */
  color: PropTypes.oneOf(COLORS),
  /**
   * The http address the `<Link />` points to.
   */
  address: PropTypes.string,
  /**
   * String entry of either "lowercase" or "uppercase", that will determine the link text type to be applied.
   */
  textStyle: PropTypes.oneOf(TYPES),
  /**
   * The text visual to the user signifying the link itself.
   */
  text: PropTypes.string.isRequired,
};

Link.defaultProps = {
  className: '',
  textStyle: 'uppercase',
  color: 'primary',
  address: '',
  text: 'hyperlink',
};

export default Link;
