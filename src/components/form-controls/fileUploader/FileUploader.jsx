/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ErrorBox } from '../core';

import {
  FILEUPLOADER_TYPES as TYPES,
  COLORS,
  SIZES,
} from '../../../utils/constants';

const FileUploader = ({
  // accept,
  children,
  className,
  // capture,
  color,
  disabled,
  errorMsg,
  formId,
  handleClick: handler,
  helpText,
  initialValue,
  label,
  // multiple,
  name,
  size,
  styleType,
}) => {
  const [fieldValue, setFieldValue] = useState(initialValue);
  const [errMsg, setErrMsg] = useState(errorMsg);

  const classes = cx(
    'ce-fileuploader',
    {
      [`ce-fileuploader--${styleType}`]: TYPES.includes(
        styleType.toString().toLowerCase(),
      ),
      [`ce-fileuploader--${color}`]: COLORS.includes(
        color.toString().toLowerCase(),
      ),
      [`ce-fileuploader--${size}`]: SIZES.includes(
        size.toString().toLowerCase(),
      ),
      'ce-fileuploader--disabled': disabled,
      'ce-fileuploader--error': errMsg,
    },
    className,
  );

  const id = `${name}`;

  useEffect(() => {
    setFieldValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    setErrMsg(errorMsg);
  }, [errorMsg]);

  const handleClick = event => {
    const { value } = event.target;
    setFieldValue(value);
    handler(value);
  };

  return (
    <div className={classes}>
      <input
        type="file"
        disabled={disabled}
        form={formId}
        id={id}
        name={name}
        size={size}
        color={color}
        styleType={styleType}
        // onBlur={checkValiditiy}
        onChange={handleClick}
        value={fieldValue}
      />
      <label htmlFor={id}>{children}</label>
      {helpText && <div className="ce-fileuploader__help-text">{helpText}</div>}
      {errMsg && <ErrorBox errorMsg={errMsg} />}
    </div>
  );
};

FileUploader.propTypes = {
  children: PropTypes.string.isRequired,
  /**
   * A class name, or string of class names, to add to the `<Input />`.
   */
  className: PropTypes.string,
  color: PropTypes.string,
  /**
   * Disables the `<Input />`.
   */
  disabled: PropTypes.bool,
  /**
   * An error message to display in the `<Input />`.
   */
  errorMsg: PropTypes.string,
  /**
   * The id of the form the `<Input />` belongs to.
   */
  formId: PropTypes.string,
  /**
   * A function to trigger when the state of the `<Input />` changes.
   */
  handleClick: PropTypes.func,
  /**
   * Any text to assist the user with this `<Input />`.
   */
  helpText: PropTypes.string,
  /**
   * The initial value of the `<Input />`, if any.
   */
  initialValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  /**
   * The `<Input />` label.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name given to the `<Input />`. It connects the label to the `<Input />`.
   */
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  styleType: PropTypes.string,
};

FileUploader.defaultProps = {
  className: '',
  color: 'primary',
  disabled: false,
  errorMsg: '',
  formId: '',
  handleClick: () => {},
  helpText: '',
  initialValue: null,
  size: 'large',
  styleType: 'default',
};

export default FileUploader;
