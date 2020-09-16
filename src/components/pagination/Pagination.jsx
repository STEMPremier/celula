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

const Pagination = ({ className, postsPerPage, data }) => {
  const classes = cx('ce-pagination', className);

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers = [];
  const totalPosts = data.length;

  useEffect(() => {
    // console.log('data', data);
    setPosts(data);
  });

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // console.log('indexOfLastPost', indexOfLastPost);
  // console.log('indexOfFirstPost', indexOfFirstPost);
  // console.log('currentPosts', currentPosts);
  // console.log('totalPosts', totalPosts);
  // console.log('pageNumbers', pageNumbers);

  // change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // handle the page # and # to show
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  // console.log('pageNumbers.push', pageNumbers);

  const paginateLeft = () => {
    if (currentPage !== 1) {
      const position = pageNumbers.indexOf(currentPage);
      setCurrentPage(position);
    }
  };

  console.log('currentPage after', currentPage);

  const paginateRight = () => {
    const lastPage = pageNumbers.pop();
    console.log('lastPage', lastPage);
    if (lastPage !== currentPage) {
      const position = pageNumbers.indexOf(currentPage);
      setCurrentPage(position + 2);
    }

    // const position = pageNumbers.findIndex(currentPage);
    console.log('pageNumbers', pageNumbers);
    console.log('currentPage', currentPage);
    // console.log('position', position);
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
          <SystemIcon name="navigate" />
        </button>
        {pageNumbers.map(number => (
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
        <button
          type="button"
          className="ce-pagination__arrow"
          onClick={paginateRight}
        >
          <SystemIcon name="navigate" />
        </button>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  postsPerPage: PropTypes.number,
  data: PropTypes.array,
};

Pagination.defaultProps = {
  className: '',
  postsPerPage: 4,
  data: [],
};

export default Pagination;
