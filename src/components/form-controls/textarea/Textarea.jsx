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

import { ErrorBox } from '../core';

import './textarea.less';

const Textarea = ({
  className,
  disabled,
  errorMsg,
  formId,
  handleChange: handler,
  helpText,
  initialValue,
  label,
  name,
  placeholder,
}) => {
  const [fieldValue, setFieldValue] = useState(initialValue);
  const [errMsg, setErrMsg] = useState(errorMsg);

  const id = `${name}`;
  const classes = cx(
    'ce-textarea',
    {
      'ce-textarea--disabled': disabled,
      'ce-textarea--error': errMsg,
    },
    className,
  );

  useEffect(() => {
    setFieldValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    setErrMsg(errorMsg);
  }, [errorMsg]);

  const handleChange = event => {
    const { value } = event.target;

    setFieldValue(value);
    handler(event);
  };

  return (
    <div className={classes}>
      <label htmlFor={id}>{label}</label>
      {helpText && <div className="ce-textarea__help-text">{helpText}</div>}
      <textarea
        disabled={disabled}
        form={formId}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
      >
        {fieldValue}
      </textarea>
      {errMsg && <ErrorBox errorMsg={errMsg} />}
    </div>
  );
};

Textarea.propTypes = {
  /**
   * A class name, or string of class names, to add to the `<Textarea />`.
   */
  className: PropTypes.string,
  /**
   * Disables the `<Textarea />`.
   */
  disabled: PropTypes.bool,
  /**
   * An error message to display in the `<Textarea />`.
   */
  errorMsg: PropTypes.string,
  /**
   * The id of the form the `<Textarea />` belongs to.
   */
  formId: PropTypes.string,
  /**
   * A function to trigger when the state of the `<Textarea />` changes.
   */
  handleChange: PropTypes.func,
  /**
   * Any text to assist the user with this `<Textarea />`.
   */
  helpText: PropTypes.string,
  /**
   * The initial value of the `<Textarea />`, if any.
   */
  initialValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  /**
   * The `<Textarea />` label.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name given to the `<Textarea />`. It connects the label to the `<Textarea />`.
   */
  name: PropTypes.string.isRequired,
  /**
   * Placeholder text for the `<Textarea />`/
   */
  placeholder: PropTypes.string,
};

Textarea.defaultProps = {
  className: '',
  disabled: false,
  errorMsg: '',
  formId: '',
  handleChange: () => {},
  helpText: '',
  initialValue: null,
  placeholder: '',
};

export default Textarea;
