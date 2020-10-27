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
  currentPage, // 0-indexed
  gotoPage,
  nextPage,
  pageCount,
  prevPage,
}) => {
  const classes = cx('ce-pagination', className);

  const renderNumbers = () => {
    const elements = [];
    const realPage = currentPage + 1;

    if (pageCount > 5) {
      for (let i = 1; i < 6; i++) {
        let classList = 'ce-pagination__number';
        let label = '...';
        let navToPage; // because currentPage is 0 indexed, so is this

        switch (i) {
          case 1:
            label = 1;
            navToPage = 0;

            if (realPage === 1) classList = `${classList} current-page`;
            break;
          case 2:
            if (realPage <= 3) {
              label = 2;
              navToPage = 1;
            }

            if (realPage === 2) {
              classList = `${classList} current-page`;
            }

            if (realPage > 3) {
              label = '...';
              navToPage = currentPage - 1;
            }
            break;
          case 3:
            if (realPage <= 3) {
              label = 3;
              navToPage = 2;
            }

            if (realPage === 3) classList = `${classList} current-page`;

            if (realPage > 3 && realPage < pageCount - 1) {
              label = realPage;
              navToPage = currentPage;
            }

            if (realPage > 3 && realPage < pageCount - 1) {
              classList = `${classList} current-page`;
            }

            if (realPage === pageCount - 1 || realPage === pageCount) {
              label = pageCount - 2;
              navToPage = pageCount - 3;
            }
            break;
          case 4:
            if (realPage < pageCount - 2) {
              label = '...';
              navToPage = currentPage + 1;
            }

            if (realPage === pageCount - 2) {
              label = realPage + 1;
              navToPage = currentPage + 1;
            }

            if (realPage === pageCount - 1) {
              classList = `${classList} current-page`;
              label = realPage;
              navToPage = currentPage;
            }

            if (currentPage + 1 === pageCount) {
              label = pageCount - 1;
              navToPage = pageCount - 2;
            }
            break;
          case 5: // extreme right
            label = pageCount;
            navToPage = pageCount - 1;

            if (currentPage + 1 === pageCount) {
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
      for (let i = 0; i < pageCount; i++) {
        elements.push(
          <li
            className={`ce-pagination__number${
              currentPage === i ? ' current-page' : ''
            }`}
            key={i}
          >
            <button
              type="button"
              onClick={() => gotoPage(i) /* The pages are 0-indexed */}
            >
              {i + 1}
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
