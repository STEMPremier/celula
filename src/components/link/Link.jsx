import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './link.less';

import {
  LINK_COLORS as COLORS,
  LINK_TEXT_STYLES as TYPES,
} from '../../utils/constants';

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
  className: PropTypes.string,
  color: PropTypes.oneOf(COLORS),
  address: PropTypes.string,
  textStyle: PropTypes.oneOf(TYPES),
  text: PropTypes.string,
};

Link.defaultProps = {
  className: '',
  textStyle: 'uppercase',
  color: 'blue',
  address: '',
  text: 'hyperlink',
};

export default Link;
