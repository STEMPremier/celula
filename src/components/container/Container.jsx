import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './container.less';

/**
 * `<Containers />` group componets together, adding margin, or padding, (or neither) and an optional border.
 */
const Container = ({ border, children, gap }) => {
  const classes = cx('ce-container', {
    'ce-container__border': border,
    [`ce-container__${gap}`]: gap !== 'none',
  });

  return <div className={classes}>{children}</div>;
};

Container.propTypes = {
  /**
   * Add a border around the `<Container />`.
   */
  border: PropTypes.bool,
  /**
   * Any renderable elements the `<Container />` is to contain.
   */
  children: PropTypes.node.isRequired,
  /**
   * The method the spacing (if any) around the `<Container />` is applied.
   */
  gap: PropTypes.oneOf(['margin', 'padding', 'none']),
};

Container.defaultProps = {
  border: false,
  gap: 'margin',
};

export default Container;
