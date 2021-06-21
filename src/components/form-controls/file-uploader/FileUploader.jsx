/* Copyright 2020 Tallo Inc.,
 *
 * This file is part of Celula.
 *
 * Celula is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './file-uploader.less';

const FileUploader = ({
  accept,
  className,
  capture,
  disabled,
  errorMsg,
  formId,
  handleClick: handler,
  multiple,
  name,
  style,
}) => {
  const [setFiles] = useState([]);
  const [errMsg, setErrMsg] = useState(errorMsg);

  const classes = cx(
    'ce-file-uploader',
    {
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
    const fs = event.target.files;

    setFiles(Object.values(fs));
    handler(event);
  };

  // const renderFiles = () => files.map(f => <span key={f.name}>{f.name}</span>);

  return (
    <div className={classes} style={style}>
      {/* complete upload file list */}
      {/* in-progress upload file list */}
      {/* <div className="ce-fu-file-list">{renderFiles()}</div> */}
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
      />
      {/* dotted line box container thingy */}
      <div className="ce-file-uploader__container">
        <label htmlFor={id}>Browse</label>
        &nbsp;for a file to upload
      </div>
      {errorMsg && (
        <span className="ce-file-uploader__error-text">{errorMsg}</span>
      )}
    </div>
  );
};

FileUploader.propTypes = {
  /**
   * Defines the file types the file input should accept. Inside the string, create a
   * comma-separated list of unique file type specificiers.
   *
   * An example would be
   * accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document".
   */
  accept: PropTypes.string,
  /**
   * Specifies which cameria to use for capture of image or video data, if the accept attribute
   * indicates that the inupt should be one of those types.
   *
   * - A value of 'user' indicates that the user-facing camera and/or microphone should be used.
   * - A value of 'enviroment' specifies that the outward-facing camera and/or microphone should be used.
   * - If no value is declared, the use agent is free to decide on its own what to do.
   */
  capture: PropTypes.oneOf([undefined, 'user', 'environment']),
  /**
   * A class name, or a string of class names, to add to the `FileUploader`.
   */
  className: PropTypes.string,
  /**
   * Disables the `FileUploader`.
   */
  disabled: PropTypes.bool,
  /**
   * An error message to display in the `FileUploader`.
   */
  errorMsg: PropTypes.string,
  /**
   * The id of the form the `FileUploader` belongs to.
   */
  formId: PropTypes.string,
  /**
   * A function to trigger when the state of the `FileUploader` changes.
   */
  handleClick: PropTypes.func,
  /**
   * Allow the use to select more than one file.
   */
  multiple: PropTypes.bool,
  /**
   * The name given to the `FileUploader`. It connects the label to the `FileUploader`.
   */
  name: PropTypes.string.isRequired,
  /**
   * Any inline styles you would like to add to the `FileUploader`. See the React
   * [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

FileUploader.defaultProps = {
  accept: '',
  capture: undefined,
  className: '',
  disabled: false,
  errorMsg: '',
  formId: '',
  handleClick: () => {},
  multiple: false,
  style: {},
};

export default FileUploader;
