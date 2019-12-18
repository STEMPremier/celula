import React from 'react';
import PropTypes from 'prop-types';

import './nav.less';

const Nav = ({ reversed }) => <img src={reversed} alt="Tallo Nav" />;

Nav.propTypes = {
  reversed: PropTypes.bool,
};

Nav.defaultProps = {
  reversed: false,
};

export default Nav;
