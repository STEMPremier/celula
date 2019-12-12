import React from 'react';
import PropTypes from 'prop-types';

import './card.less';

const Card = ({ children }) => <div>{children}</div>;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
