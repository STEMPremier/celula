import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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
  multiple,
  name,
  size,
  type,
}) => {
  const [fieldValue, setFieldValue] = useState('');
  const [errMsg, setErrMsg] = useState(errorMsg);

  const classes = cx(
    'ce-file-uploader',
    {
      [`ce-file-uploader--${color}`]: COLORS.includes(
        color.toString().toLowerCase(),
      ),
      [`ce-file-uploader--${size}`]: SIZES.includes(
        size.toString().toLowerCase(),
      ),
      [`ce-file-uploader--${type}`]: TYPES.includes(
        type.toString().toLowerCase(),
      ),
      'ce-file-uploader--disabled': disabled,
      'ce-file-uploader--error': errMsg,
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
    handler(event);
  };

  return (
    <div className={classes}>
      <input
        accept={accept}
        capture={capture}
        disabled={disabled}
        form={formId}
        id={id}
        multiple={multiple}
        name={name}
        onChange={handleClick}
        type="file"
        value={fieldValue}
      />
      <label htmlFor={id} className="ce-file-uploader__button">
        <span className="ce-file-uploader__label">{children}</span>
      </label>
      {errorMsg && (
        <span className="ce-file-uploader__error-text">{errorMsg}</span>
      )}
    </div>
  );
};

FileUploader.propTypes = {
  /**
   * Defines the file types the file input should accept. Inside the string, create a comma-separated list of unique file type specificiers.
   *
   * An example would be accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document".
   */
  accept: PropTypes.string,
  /**
   * Specifies which cameria to use for capture of image or video data, if the accept attribute indicates that the inupt should be one of those types.
   *
   * A value of 'user' indicates that the user-facing camera and/or microphone should be used.
   * A value of 'enviroment' specifies that the outward-facing camera and/or microphone should be used.
   * If no value is declared, the use agent is free to decide on its own what to do.
   */
  capture: PropTypes.oneOf([undefined, 'user', 'environment']),
  /**
   * The `<FileUploader />` label.
   */
  children: PropTypes.string.isRequired,
  /**
   * A class name, or string of class names, to add to the `<FileUploader />`.
   */
  className: PropTypes.string,
  /**
   *  The color of the `<FileUploader />`.
   */
  // color: PropTypes.oneOf(COLORS),
  color: PropTypes.oneOf(['primary', 'secondary', 'black', 'inverted']),
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
   * Allow the use to select more than one file.
   */
  multiple: PropTypes.bool,
  /**
   * The name given to the `<FileUploader />`. It connects the label to the `<FileUploader />`.
   */
  name: PropTypes.string.isRequired,
  /**
   * The size of the `<Button />`.
   */
  // size: PropTypes.oneOf(SIZES),
  size: PropTypes.oneOf(['small', 'large', 'jumbo']),
  /**
   *  Which type of `<FileUpload />` to render.
   */
  // type: PropTypes.oneOf(TYPES),
  type: PropTypes.oneOf(['solid', 'outline', 'text']),
};

FileUploader.defaultProps = {
  accept: '',
  capture: undefined,
  className: '',
  color: 'primary',
  disabled: false,
  errorMsg: '',
  formId: '',
  handleClick: () => {},
  multiple: false,
  size: 'large',
  type: 'solid',
};

export default FileUploader;
