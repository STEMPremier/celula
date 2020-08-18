import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// import { ErrorBox } from '../core';

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
  label,
  multiple,
  name,
  size,
  styleType,
}) => {
  const [fieldValue, setFieldValue] = useState('');
  const [errMsg, setErrMsg] = useState(errorMsg);

  const classes = cx(
    'ce-fileuploader__label',
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
    <div className="ce-fileuploader">
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
        type="file"
        value={fieldValue}
      />
      {errorMsg && (
        <div className="ce-fileuploader__error-outline">
          <label htmlFor={id} className={classes}>
            <span className="ce-fileuploader__label-text">{children}</span>
          </label>
          <span className="ce-fileuploader__error-text">{errorMsg}</span>
        </div>
      )}
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
   * A class name, or string of class names, to add to the `<FileUploader />`.
   */
  className: PropTypes.string,
  /**
   *  The color of the `<FileUploader />`.  The choices are primary, secondar, black, and inverted. If not selected it will default to primary.
   */
  color: PropTypes.string,
  /**
   * Disables the `<FileUploader />`.
   */
  disabled: PropTypes.bool,
  /**
   * An error message to display in the `<FileUploader />`.
   */
  errorMsg: PropTypes.string,
  /**
   * The id of the form the `<FileUploader />` belongs to.
   */
  formId: PropTypes.string,
  /**
   * A function to trigger when the state of the `<FileUploader />` changes.
   */
  handleClick: PropTypes.func,
  /**
   * The `<FileUploader />` label.
   */
  label: PropTypes.string.isRequired,
  /**
   * Allow the use to select more than one file.
   */
  multiple: PropTypes.bool,
  /**
   * The name given to the `<FileUploader />`. It connects the label to the `<FileUploader />`.
   */
  name: PropTypes.string.isRequired,
  /**
   *  There are 3 sizes to choose from: small, large, and jumbo.  If none is selected, it will default to large.
   */
  size: PropTypes.string,
  /**
   *  The default is the filled-in solid button style and the other option available is 'outline'.
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
  multiple: false,
  size: 'large',
  styleType: 'default',
};

export default FileUploader;
