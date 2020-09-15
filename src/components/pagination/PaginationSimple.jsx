/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import cx from 'classnames';

import './pagination.less';

const Pagination = ({ className, postsPerPage, data }) => {
  const classes = cx('ce-pagination', className);

  return (
    <nav className={classes}>
      <a href="#6" title="Previous Page">
        wewe
      </a>
      <a href="#1" title="Page One">
        1
      </a>
      <a href="#2" title="Page Two">
        2
      </a>
      <a href="#3" title="Page Three">
        3
      </a>
    </nav>
  );
};

export default Pagination;
