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
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import SystemIcon from '../icon/SystemIcon';
import { ErrorBox } from '../form-controls/core';

import './search.less';

const Search = ({
  className,
  disabled,
  errorMsg,
  instantSearch,
  handleSearch,
  helpText,
  label,
  name,
  placeholder,
}) => {
  const [fieldValue, setFieldValue] = useState('');
  const [errMsg, setErrMsg] = useState(errorMsg);
  const id = `${name}`;
  const classes = cx(
    'ce-search',
    {
      'ce-search--disabled': disabled,
      'ce-search--error': errMsg,
    },
    className,
  );

  useEffect(() => {
    setErrMsg(errorMsg);
  }, [errorMsg]);

  const handleChange = event => {
    const { value } = event.target;

    setFieldValue(value);

    if (instantSearch) {
      handleSearch(value);
    }
  };

  const search = () => {
    handleSearch(fieldValue);
  };

  const clear = () => {
    setFieldValue('');
  };

  return (
    <div className={classes}>
      <label htmlFor={id}>{label}</label>
      {helpText && <div className="ce-search__help-text">{helpText}</div>}
      <div className="ce-search__container">
        <input
          disabled={disabled}
          id={id}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          type="text"
          value={fieldValue}
        />
        {fieldValue && (
          <button className="ce-search__clear" onClick={clear} type="button">
            <SystemIcon name="clear" />
          </button>
        )}
        {instantSearch ? (
          <div className="ce-search__search-icon">
            <SystemIcon name="search" />
          </div>
        ) : (
          <button className="ce-search__button" onClick={search} type="button">
            <SystemIcon name="search" color="inverted" />
          </button>
        )}
      </div>
      {errMsg && <ErrorBox errorMsg={errMsg} />}
    </div>
  );
};

Search.propTypes = {
  /**
   * A class name, or string of class names, to add to the `<Search />`.
   */
  className: PropTypes.string,
  /**
   * Disables the `<Search />`.
   */
  disabled: PropTypes.bool,
  /**
   * An error message to display in the `<Search />`.
   */
  errorMsg: PropTypes.string,
  /**
   * The search function to trigger.
   */
  handleSearch: PropTypes.func.isRequired,
  /**
   * Any text to assist the user with this `<Search />`.
   */
  helpText: PropTypes.string,
  /**
   * Whether or not the `<Search />` searches immediately on type, or on button click.
   */
  instantSearch: PropTypes.bool,
  /**
   * The `<Search />` label.
   */
  label: PropTypes.string.isRequired,
  /**
   * The name given to the `<Search />`. It connects the label to the `<Search />`.
   */
  name: PropTypes.string.isRequired,
  /**
   * Placeholder text for the `<Search />`/
   */
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  className: '',
  disabled: false,
  errorMsg: '',
  helpText: '',
  instantSearch: false,
  placeholder: '',
};

export default Search;
