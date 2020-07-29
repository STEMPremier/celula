/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { FormControlGroup } from '../core';

const SwitchGroup = ({ children, formId, label, name, selectedValues }) => {
  return (
    <FormControlGroup
      formId={formId}
      label={label}
      name={name}
      selectedValues={selectedValues}
    >
      {children}
    </FormControlGroup>
  );
};

SwitchGroup.propTypes = {
  children: PropTypes.node.isRequired,
  formId: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selectedValues: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ),
};

SwitchGroup.defaultProps = {
  formId: '',
  selectedValues: [],
};

export default SwitchGroup;
