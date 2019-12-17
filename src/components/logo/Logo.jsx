import React from 'react';
import PropTypes from 'prop-types';

import './logo.less';

const Logo = ({ reversed }) => <img src={reversed} alt="Tallo Logo" />;

Logo.propTypes = {
  reversed: PropTypes.bool,
};

Logo.defaultProps = {
  reversed: false,
};

export default Logo;
