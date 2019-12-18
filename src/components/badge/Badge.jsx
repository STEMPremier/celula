import React from 'react';
import PropTypes from 'prop-types';

import './badge.less';

const Badge = ({ children }) => <div>{children}</div>;

Badge.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Badge;
