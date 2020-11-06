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
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './pagination.less';

import { SystemIcon } from '../icon';

/**
 * Pagination is the process of dividing data into discrete pages. This graphical control element is frequently used as a navigational aid.
 */
const Pagination = ({
  className,
  canNextPage,
  canPreviousPage,
  currentPage,
  gotoPage,
  nextPage,
  pageCount,
  prevPage,
}) => {
  const classes = cx('ce-pagination', className);

  const renderNumbers = () => {
    const elements = [];

    if (pageCount > 5) {
      for (let i = 1; i < 6; i++) {
        let classList = 'ce-pagination__number';
        let label = '...';
        let navToPage;

        switch (i) {
          case 1:
            label = 1;
            navToPage = 1;

            if (currentPage === 1) classList = `${classList} current-page`;
            break;
          case 2:
            if (currentPage <= 3) {
              label = 2;
              navToPage = 2;
            }

            if (currentPage === 2) {
              classList = `${classList} current-page`;
            }

            if (currentPage > 3) {
              label = '...';
              navToPage = currentPage - 1;
            }
            break;
          case 3:
            if (currentPage <= 3) {
              label = 3;
              navToPage = 3;
            }

            if (currentPage === 3) classList = `${classList} current-page`;

            if (currentPage > 3 && currentPage < pageCount - 1) {
              classList = `${classList} current-page`;
              label = currentPage;
              navToPage = currentPage;
            }

            if (currentPage === pageCount - 1 || currentPage === pageCount) {
              label = pageCount - 2;
              navToPage = pageCount - 2;
            }
            break;
          case 4:
            if (currentPage < pageCount - 2) {
              label = '...';
              navToPage = currentPage + 1;
            }

            if (currentPage === pageCount - 2) {
              label = currentPage + 1;
              navToPage = currentPage + 1;
            }

            if (currentPage === pageCount - 1) {
              classList = `${classList} current-page`;
              label = currentPage;
              navToPage = currentPage;
            }

            if (currentPage === pageCount) {
              label = pageCount - 1;
              navToPage = pageCount - 1;
            }
            break;
          case 5: // extreme right
            label = pageCount;
            navToPage = pageCount;

            if (currentPage === pageCount) {
              classList = `${classList} current-page`;
            }
            break;
          default:
        }

        elements.push(
          <li className={classList} key={i}>
            <button
              type="button"
              onClick={() => gotoPage(navToPage) /* The pages are 0-indexed */}
            >
              {label}
            </button>
          </li>,
        );
      }
    } else {
      for (let i = 1; i <= pageCount; i++) {
        elements.push(
          <li
            className={`ce-pagination__number${
              currentPage === i ? ' current-page' : ''
            }`}
            key={i}
          >
            <button type="button" onClick={() => gotoPage(i)}>
              {i}
            </button>
          </li>,
        );
      }
    }

    return elements;
  };

  return (
    <nav className={classes}>
      <ul className="ce-pagination__container">
        <li
          className={`ce-pagination__arrow${
            !canPreviousPage ? ' ce-arrow--disabled' : ''
          }`}
        >
          <button disabled={!canPreviousPage} onClick={prevPage} type="button">
            <SystemIcon name="navigate" color="black" />
          </button>
        </li>
        {renderNumbers()}
        <li
          className={`ce-pagination__arrow${
            !canNextPage ? ' ce-arrow--disabled' : ''
          }`}
        >
          <button disabled={!canNextPage} onClick={nextPage} type="button">
            <SystemIcon name="navigate" color="black" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  /**
   * Disable the next page button if there are no more pages.
   */
  canNextPage: PropTypes.bool,
  /**
   * Disable the previous page if there are no prior pages.
   */
  canPreviousPage: PropTypes.bool,
  /**
   * A class name, or string of class names, to add to the `<Pagination />`.
   */
  className: PropTypes.string,
  /**
   * The current page number.
   *
   * NOTE: Due to interactions between `<Pagination />` and `<Table />` this is 0-indexed.
   */
  currentPage: PropTypes.number.isRequired,
  /**
   * A function to trigger to navigate to an arbitrary page.
   */
  gotoPage: PropTypes.func.isRequired,
  /**
   * A function to trigger to navigate to the next page.
   */
  nextPage: PropTypes.func.isRequired,
  /**
   * The total number of pages.
   */
  pageCount: PropTypes.number.isRequired,
  /**
   * A function to trigger to navigate to the previous page.
   */
  prevPage: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  canNextPage: true,
  canPreviousPage: true,
  className: '',
};

export default Pagination;
/* eslint-enable react/no-array-index-key */
