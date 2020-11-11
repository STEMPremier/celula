/* eslint-disable */
import React, { useMemo } from 'react';

import Table from '.';

const SomethingToMemo = ({
  columns,
  data,
  pageSize,
  clickable,
  clickFn,
  selectable,
  selectionHeaderFn,
  selectionFn,
}) => {
  const mData = useMemo(() => data, []);
  const mColumns = useMemo(() => columns, []);

  return (
    <Table
      columns={mColumns}
      data={mData}
      pageSize={pageSize}
      clickable={clickable}
      clickFn={clickFn}
      selectable={selectable}
      selectionHeaderFn={selectionHeaderFn}
      selectionFn={selectionFn}
    />
  );
};

export default SomethingToMemo;
/* eslint-enable */
