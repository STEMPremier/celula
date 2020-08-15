/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ErrorBox } from '../core';

import './file-uploader.less';

import {
  FILEUPLOADER_TYPES as TYPES,
  COLORS,
  SIZES,
} from '../../../utils/constants';

const FileUploader = ({
  accept,
  children,
  className,
  capture,
  color,
  disabled,
  errorMsg,
  formId,
  handleClick: handler,
  helpText,
  initialValue,
  label,
  multiple,
  name,
  size,
  styleType,
}) => {
  const [fieldValue, setFieldValue] = useState('');
  const [errMsg, setErrMsg] = useState(errorMsg);

  const classes = cx(
    'ce-fileuploader',
    {
      [`ce-fileuploader--${color}`]: COLORS.includes(
        color.toString().toLowerCase(),
      ),
      [`ce-fileuploader--${size}`]: SIZES.includes(
        size.toString().toLowerCase(),
      ),
      [`ce-fileuploader--${styleType}`]: TYPES.includes(
        styleType.toString().toLowerCase(),
      ),
      'ce-fileuploader--disabled': disabled,
      'ce-fileuploader--error': errMsg,
    },
    className,
  );

  console.log('TYPES', TYPES);
  console.log('styleType', styleType);

  const id = `${name}`;

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
      {/* {helpText && <div className="ce-fileuploader__help-text">{helpText}</div>} */}
      <input
        accept={accept}
        capture={capture}
        className={styleType}
        disabled={disabled}
        form={formId}
        id={id}
        multiple={multiple}
        name={name}
        onChange={handleClick}
        // onBlur={checkValiditiy}
        type="file"
        value={fieldValue}
      />
      <label htmlFor={id} className="ce-fileuploader__label">
        <span className="ce-fileUploader__label-text">{children}</span>
      </label>
      {errorMsg && <ErrorBox errorMsg={errorMsg} />}
    </div>
  );
};

FileUploader.propTypes = {
  /**
   * Defines the file types the file input should accept.  Inside the string, create a comma-separated list of unique file type specificiers.  An example would be accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document".
   */
  accept: PropTypes.string,
  /**
   * Specifies which cameria to use for capture of image or video data, if the accept attribute indicates that the inut should be one of those types.  A value of 'user' indicates that the user-facing camera and/or microphone should be used.  A value of 'enviroment' specifies that the outward-facing camera and/or microphone should be used.  If no value is declared, the use agent is free to decide on its own what to do.
   */
  capture: PropTypes.string,
  /**
   *
   */
  children: PropTypes.string.isRequired,
  /**
   * A class name, or string of class names, to add to the `<Input />`.
   */
  className: PropTypes.string,
  /**
   *
   */
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
   * Allow the use to select more than one file.
   */
  multiple: PropTypes.bool,
  /**
   * The name given to the `<Input />`. It connects the label to the `<Input />`.
   */
  name: PropTypes.string.isRequired,
  /**
   *
   */
  size: PropTypes.string,
  /**
   *  The default is the filled in button style and the other option available is 'outline'.
   */
  styleType: PropTypes.string,
};

FileUploader.defaultProps = {
  accept: '',
  capture: '',
  className: '',
  color: 'primary',
  disabled: false,
  errorMsg: '',
  formId: '',
  handleClick: () => {},
  helpText: '',
  initialValue: null,
  multiple: false,
  size: 'large',
  styleType: '',
};

export default FileUploader;
