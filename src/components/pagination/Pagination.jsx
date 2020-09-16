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

  // need a function that counts the # of items in the data array
  useEffect(() => {
    console.log('data', data);
    setPosts(data);
  });

  const totalPosts = data.length;

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

  return (
    <div className={classes}>
      <ul className="ce-pagination__oval-container">
        <div className="ce-pagination__arrow ce-pagination__arrow--left">
          <SystemIcon name="navigate" />
        </div>
        {pageNumbers.map(number => (
          <div key={number}>
            <li key={number} className="ce-pagination__page-item">
              <a
                onClick={() => paginate(number)}
                href="!#"
                className={`ce-pagination__page-link ${
                  currentPage === number ? 'ce-pagination--current' : ''
                } `}
              >
                {number}
              </a>
            </li>
          </div>
        ))}
        <div className="ce-pagination__arrow">
          <SystemIcon name="navigate" />
        </div>
      </ul>
    </div>
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
