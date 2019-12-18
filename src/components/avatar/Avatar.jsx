import React from 'react';
import PropTypes from 'prop-types';

import './avatar.less';

const Avatar = ({ reversed }) => <img src={reversed} alt="Tallo Avatar" />;

Avatar.propTypes = {
  reversed: PropTypes.bool,
};

Avatar.defaultProps = {
  reversed: false,
};

export default Avatar;
