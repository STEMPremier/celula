/* eslint-disable */
import React, { useEffect, useState } from 'react';

const SomethingToPage = ({
  canNext = true,
  canPrev = false,
  children,
  initialPage = 0,
  pageCount = 10,
}) => {
  const [currentPage, setPage] = useState(initialPage);
  const [canPreviousPage, setCanPrev] = useState(canPrev);
  const [canNextPage, setCanNext] = useState(canNext);

  useEffect(() => setPage(initialPage), [initialPage]);
  useEffect(() => setCanPrev(canPrev), [canPrev]);
  useEffect(() => setCanNext(canNext), [canNext]);

  const prevPage = () => {
    const page = currentPage > 0 ? currentPage - 1 : 0;

    setPage(page);
  };
  const nextPage = () => {
    const page = currentPage >= pageCount ? pageCount : currentPage + 1;

    setPage(page);
  };
  const gotoPage = page => setPage(page);

  return React.Children.map(children, child => {
    return React.cloneElement(child, {
      canNextPage,
      canPreviousPage,
      currentPage,
      gotoPage,
      nextPage,
      pageCount,
      prevPage,
    });
  });
};

export default SomethingToPage;
/* eslint-enable */
