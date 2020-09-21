/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-plusplus */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './pagination.less';

import { SystemIcon } from '../icon';

const Pagination = ({ className, limitPageNumbers, postsPerPage, data }) => {
  const classes = cx('ce-pagination', className);

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [leftArrowDisabled, setLeftArrowDisabled] = useState(true);

  const pageNumbers = [];
  const totalPosts = data.length;

  useEffect(() => {
    setPosts(data);
    // handle leftArrowDisabled
    if (currentPage < 2) {
      setLeftArrowDisabled(true);
    } else {
      setLeftArrowDisabled(false);
    }
  });

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total pages
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Make sure current page is not out of range = NOT SURE WHAT THIS DOES
  if (currentPage < 1) {
    setCurrentPage(1);
  } else if (currentPage > totalPages) {
    setCurrentPage(totalPages);
  }

  const truncatedData = [];

  let startPage = 0;
  let endPage = 0;

  // If truncation is neccessary, organize
  if (totalPages <= limitPageNumbers) {
    startPage = 1;
    // then show all pages
    endPage = totalPages;
  } else {
    // calculate start and end pages
    const maxPagesBeforeCurrentPage = Math.floor(limitPageNumbers / 2);
    const maxPagesAfterCurrentPage = Math.ceil(limitPageNumbers / 2) - 1;

    if (currentPage <= maxPagesBeforeCurrentPage) {
      // current page near the start
      startPage = 1;
      endPage = limitPageNumbers;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      // current page near the end
      startPage = totalPages - limitPageNumbers + 1;
      endPage = totalPages;
    } else {
      // current page somwhere in the middle
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  // get the truncatedData when applicable
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
    if (i >= startPage && i <= endPage) {
      truncatedData.push(i);
    }
  }

  // console.log('totalPages', totalPages);
  // console.log('truncatedData', truncatedData);
  // console.log('currentPage', currentPage);
  // console.log('startPage', startPage);
  // console.log('endPage', endPage);
  // console.log('indexOfLastPost', indexOfLastPost);
  // console.log('indexOfFirstPost', indexOfFirstPost);
  // console.log('currentPosts', currentPosts);
  // console.log('totalPosts', totalPosts);
  // console.log('limitPageNumbers', limitPageNumbers);
  // console.log('pageNumbers', pageNumbers);
  // console.log('totalPagesShown', totalPagesShown);

  // change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const paginateLeft = () => {
    if (currentPage !== 1) {
      const position = pageNumbers.indexOf(currentPage);
      setCurrentPage(position);
    }
  };

  const paginateRight = () => {
    const lastPage = pageNumbers.pop();
    if (lastPage !== currentPage) {
      const position = pageNumbers.indexOf(currentPage);
      setCurrentPage(position + 2);
    }
  };

  return (
    <nav className={classes}>
      <h1>{currentPosts}</h1>
      <ul className="ce-pagination__oval-container">
        <button
          type="button"
          onClick={paginateLeft}
          className="ce-pagination__arrow ce-pagination__arrow--left"
        >
          <SystemIcon
            name="navigate"
            color={`${leftArrowDisabled === true ? 'grey' : 'black'} `}
          />
        </button>
        {startPage !== 1 && (
          <>
            <li className="ce-pagination__page-item">
              <a
                onClick={() => paginate(totalPages)}
                href="#"
                className="ce-pagination__last-page"
              >
                1
              </a>
            </li>
            <li className="ce-pagination__page-item">
              <a href="#" className="ce-pagination__ellipsis">
                ...
              </a>
            </li>
          </>
        )}
        {truncatedData.map(number => (
          <div key={number}>
            <li key={number} className="ce-pagination__page-item">
              <a
                onClick={() => paginate(number)}
                href="#"
                className={`ce-pagination__page-link ${
                  currentPage === number ? 'ce-pagination--current' : ''
                } `}
              >
                {number}
              </a>
            </li>
          </div>
        ))}
        {endPage !== totalPages && (
          <>
            <li className="ce-pagination__page-item">
              <a href="#" className="ce-pagination__ellipsis">
                ...
              </a>
            </li>
            <li className="ce-pagination__page-item">
              <a
                onClick={() => paginate(totalPages)}
                href="#"
                className="ce-pagination__last-page"
              >
                {totalPages}
              </a>
            </li>
          </>
        )}

        <button
          type="button"
          className="ce-pagination__arrow"
          onClick={paginateRight}
        >
          <SystemIcon
            name="navigate"
            color={`${endPage === totalPages ? 'gray' : 'black'} `}
          />
        </button>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  /**
   * A class name, or string of class names, to add to the `<Pagination />`.
   */
  className: PropTypes.string,
  /**
   * The maximum number of pages to show in the `<Pagination />` before setting up the ellipsis and last page format.
   */
  limitPageNumbers: PropTypes.number,
  /**
   * The maximum number of posts to be paginated on each page.
   */
  postsPerPage: PropTypes.number,
  /**
   * Pass in the posts from the http call.
   */
  data: PropTypes.array,
};

Pagination.defaultProps = {
  className: '',
  limitPageNumbers: 3,
  postsPerPage: 4,
  data: [],
};

export default Pagination;
