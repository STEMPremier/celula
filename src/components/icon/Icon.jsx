import React from 'react';
import PropTypes from 'prop-types';

import './icon.less';

const Icon = ({ name }) => <i className={name}>{name}</i>;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
