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

import SystemIcon from '../../icon/SystemIcon';
import { ErrorBox } from '../core';

import {
  INPUT_TYPES as TYPES,
  // SYSTEM_ICONS as ICONS,
} from '../../../utils/constants';

import './input.less';

const Input = ({
  btnOptions: { btnClick, btnIcon },
  className,
  disabled,
  errorMsg,
  formId,
  handleChange: handler,
  helpText,
  htmlType,
  icon,
  initialValue,
  label,
  max,
  min,
  name,
  placeholder,
}) => {
  const [fieldValue, setFieldValue] = useState(initialValue);
  const [errMsg, setErrMsg] = useState(errorMsg);
  const [isDate, setIsDate] = useState(
    htmlType === 'month' || htmlType === 'date' || htmlType === 'week',
  );

  const id = `${name}`;
  const classes = cx(
    'ce-input',
    {
      [`ce-input--${htmlType}`]: TYPES.includes(
        htmlType.toString().toLowerCase(),
      ),
      'ce-input--disabled': disabled,
      'ce-input--error': errMsg,
    },
    className,
  );

  useEffect(() => {
    setFieldValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    setIsDate(
      htmlType === 'month' || htmlType === 'date' || htmlType === 'week',
    );
  }, [htmlType]);

  useEffect(() => {
    setErrMsg(errorMsg);
  }, [errorMsg]);

  const checkValiditiy = () => {
    let msg = '';

    if (fieldValue) {
      switch (htmlType) {
        case 'email': {
          const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

          if (!pattern.test(fieldValue)) msg = 'Invalid email address.';

          break;
        }
        case 'password': {
          const minLength = 8;

          const passwordLongEnough = password =>
            !!(password && password.length >= minLength);

          const passwordHasUppercase = password =>
            !!(password && /[A-Z]/g.test(password));

          const passwordHasLowercase = password =>
            !!(password && /[a-z]/g.test(password));

          const passwordHasNumber = password =>
            !!(password && /[0-9]/g.test(password));

          const passwordHasSpecial = password =>
            !!(password && /[^A-Za-z0-9]/g.test(password));

          const passwordSatisfiesThree = password => {
            let count = 0;

            if (passwordHasUppercase(password)) count += 1;
            if (passwordHasLowercase(password)) count += 1;
            if (passwordHasNumber(password)) count += 1;
            if (passwordHasSpecial(password)) count += 1;

            return count >= 3;
          };

          const longEnough = passwordLongEnough(fieldValue);
          const satisfies3 = passwordSatisfiesThree(fieldValue);

          if (!longEnough) {
            msg = 'Password must be at least 8 characters long.';
          } else if (longEnough && !satisfies3) {
            msg = 'Password must meet at least 3 of the criteria.';
          }

          break;
        }
        case 'url': {
          const pattern = new RegExp(
            '^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
              '(\\#[-a-z\\d_]*)?$',
            'i',
          ); // fragment locator

          if (!pattern.test(fieldValue)) msg = 'Invalid url.';

          break;
        }
        default: {
          break;
        }
      }
    }

    setErrMsg(msg);
  };

  const handleChange = event => {
    const { value } = event.target;

    setFieldValue(value);
    handler(event);
  };

  return (
    <div className={classes}>
      <label htmlFor={id}>{label}</label>
      {helpText && <div className="ce-input__help-text">{helpText}</div>}
      <div className="ce-input__container">
        {icon && (
          <div className="ce-input__icon">
            <SystemIcon name={icon} />
          </div>
        )}
        <input
          disabled={disabled}
          form={formId}
          icon={icon}
          id={id}
          max={max}
          min={min}
          name={name}
          onBlur={checkValiditiy}
          onChange={handleChange}
          placeholder={placeholder}
          type={htmlType}
          value={fieldValue}
        />
        {isDate && (
          <div className="ce-input__date-icon">
            <SystemIcon name="calendar" />
          </div>
        )}
        {btnIcon && (
          <button className="ce-input__button" onClick={btnClick} type="button">
            <SystemIcon name={btnIcon} color="inverted" />
          </button>
        )}
      </div>
      {errMsg && <ErrorBox errorMsg={errMsg} />}
    </div>
  );
};

Input.propTypes = {
  /**
   * The options to configure the (optional) right-side button.
   * `btnClick` is a function to trigger when the `<Input />` button is clicked.
   * `btnIcon` is the icon you would like as the `<Input />` button label.
   */
  btnOptions: PropTypes.shape({
    btnClick: PropTypes.func,
    // btnIcon: PropTypes.oneOf([...ICONS, '']),
    btnIcon: PropTypes.oneOf([
      'share',
      'preview',
      'export',
      'follow',
      'message',
      'badges',
      'website',
      'edit',
      'clear',
      'navigate',
      'down',
      'up',
      'user',
      'visibility',
      'help',
      'close',
      'calendar',
      'warning',
      'add',
      'filter',
      'menu',
      'search',
      'tutorial',
      'yes',
      'no',
      'hobby',
      'interest',
      'outdoor',
      'indoor',
      'popular',
      '',
    ]),
  }),
  /**
   * A class name, or string of class names, to add to the `<Input />`.
   */
  className: PropTypes.string,
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
  handleChange: PropTypes.func,
  /**
   * Any text to assist the user with this `<Input />`.
   */
  helpText: PropTypes.string,
  /**
   * The html type of the `<Input />`.
   */
  // htmlType: PropTypes.oneOf(TYPES),
  htmlType: PropTypes.oneOf([
    'color',
    'date',
    'email',
    'hidden',
    'number',
    'password',
    'tel',
    'text',
    'time',
    'url',
  ]),
  /**
   * An icon to include on the left side of the `<Input />`.
   */
  // icon: PropTypes.oneOf([...TYPES, '']),
  icon: PropTypes.oneOf([
    'share',
    'preview',
    'export',
    'follow',
    'message',
    'badges',
    'website',
    'edit',
    'clear',
    'navigate',
    'down',
    'up',
    'user',
    'visibility',
    'help',
    'close',
    'calendar',
    'warning',
    'add',
    'filter',
    'menu',
    'search',
    'tutorial',
    'yes',
    'no',
    'hobby',
    'interest',
    'outdoor',
    'indoor',
    'popular',
    '',
  ]),
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
   *  The latest date, or largest number to accept as valid input.
   *  Note that the date and time format will vary depending on the type of input and the max must match that format.
   */
  max: PropTypes.string,
  /**
   *  The earliest date, or smallest number to accept as valid input.
   *  Note that the date and time format will vary depending on the type of input and the min must match that format.
   */
  min: PropTypes.string,
  /**
   * The name given to the `<Input />`. It connects the label to the `<Input />`.
   */
  name: PropTypes.string.isRequired,
  /**
   * Placeholder text for the `<Input />`/
   */
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  btnOptions: { btnClick: () => {}, btnIcon: '' },
  className: '',
  disabled: false,
  errorMsg: '',
  formId: '',
  handleChange: () => {},
  helpText: '',
  htmlType: 'text',
  icon: '',
  initialValue: '',
  max: '',
  min: '',
  placeholder: '',
};

export default Input;
