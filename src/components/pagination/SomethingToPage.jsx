import React, { useState } from 'react';

const SomethingToPage = ({ children, initialPage = 0, pageCount = 10 }) => {
  const [currentPage, setPage] = useState(initialPage);

  const canNextPage = currentPage < pageCount;
  const canPreviousPage = currentPage > 0;
  const gotoPage = page => {
    setPage(page);
  };
  const nextPage = () => setPage(currentPage + 1);
  const prevPage = () => setPage(currentPage - 1);

  return React.Children.map(children, child => {
    const childProps = {
      canNextPage,
      canPreviousPage,
      currentPage,
      gotoPage,
      nextPage,
      pageCount,
      prevPage,
    };

    return React.cloneElement(child, { ...childProps });
  });
};

export default SomethingToPage;
