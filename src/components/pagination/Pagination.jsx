/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
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
  const [rightArrowDisabled, setRightArrowDisabled] = useState();

  // WILL NEED TO CHECK RIGHT ARROW DISABLED STATUS ON INIT IN USE EFFECT DEPENDING ON NUMBER OF POSTS AND PAGES

  const pageNumbers = [];
  const totalPosts = data.length;

  useEffect(() => {
    // console.log('data', data);
    setPosts(data);
    // handle leftArrowDisabled
    if (currentPage < 2) {
      setLeftArrowDisabled(true);
    } else {
      setLeftArrowDisabled(false);
    }
    // handle rightArrowDisabled after getting lastPage
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

  // change this const to a passable prop after working correctly
  const maxPages = 3;

  let startPage = 0;
  let endPage = 0;

  // If truncation is neccessary, organize
  if (totalPages <= maxPages) {
    startPage = 1;
    // then show all pages
    endPage = totalPages;
  } else {
    // calculate start and end pages
    const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    console.log('maxPagesBeforeCurrentPage', maxPagesBeforeCurrentPage);
    const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
    console.log('maxPagesAfterCurrentPage', maxPagesAfterCurrentPage);

    if (currentPage <= maxPagesBeforeCurrentPage) {
      // current page near the start
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      // current page near the end
      startPage = totalPages - maxPages + 1;
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

  // let pageSize = 0;
  // calculate start and end item indexes
  // const startIndex = (currentPage - 1) * pageSize;
  // const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  // create an array of pages to map over
  // const pages = data
  //   .from(pageNumbers(endPage + 1 - startPage).keys())
  //   .map(index => startPage + index);

  console.log('totalPages', totalPages);
  console.log('truncatedData', truncatedData);
  // console.log('currentPage', currentPage);
  console.log('startPage', startPage);
  console.log('endPage', endPage);
  // console.log('indexOfLastPost', indexOfLastPost);
  // console.log('indexOfFirstPost', indexOfFirstPost);
  // console.log('currentPosts', currentPosts);
  // console.log('totalPosts', totalPosts);
  // console.log('limitPageNumbers', limitPageNumbers);
  // console.log('pageNumbers', pageNumbers);
  // console.log('totalPagesShown', totalPagesShown);

  const handleEllipsis = () => {
    // pageNumbers = [];
    console.log('show more to the right, maybe upt to 5 more????');
    // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    //   console.log('i before push', i);
    //   console.log('pageNumbers before push', pageNumbers);
    //   if (i <= limitPageNumbers) {
    //     pageNumbers.push(i);
    //     console.log('i after push', i);
    //     console.log('pageNumbers after push', pageNumbers);
    //   }
    // }
  };

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
      setRightArrowDisabled(false);
    } else {
      setRightArrowDisabled(true);
    }
  };

  // always check to activate left arrow

  // console.log('leftArrowDisabled', leftArrowDisabled);
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
            color={`${rightArrowDisabled === true ? 'gray' : 'black'} `}
          />
        </button>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  limitPageNumbers: PropTypes.number,
  postsPerPage: PropTypes.number,
  data: PropTypes.array,
  // totalPagesShown: PropTypes.number,
};

Pagination.defaultProps = {
  className: '',
  limitPageNumbers: 3,
  postsPerPage: 4,
  data: [],
  // totalPagesShown: 4,
};

export default Pagination;
