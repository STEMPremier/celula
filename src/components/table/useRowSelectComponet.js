/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Checkbox } from '../form-controls/checkbox';

/**
 * A `useTable` compatible hook that will add a column of/for the checkbox. To be passed into the `useTable` hook.
 * @param {object} instance - a `useTable` instance object. It is not a class so much as a pile of arrays (of functions).
 */
const useRowSelectComponent = (selectionHeaderFn, selectionFn) => instance => {
  // visibleColumns (a property on the instance object) is an array of functions. Each of which will allow you to decorate some aspect of the columns. In our case, we are adding a checkbox to the beginning of each row.
  instance.visibleColumns.push(decorators => [
    // This object is a 'constructor' for a column in the table. `useTable` will use the `Header` and `Cell` properties to determine what to put in our column. In our case they are components, but they could be strings.
    /* eslint-disable react/display-name */
    /* eslint-disable react/prop-types */
    {
      id: 'selection',
      Header: ({
        getToggleAllPageRowsSelectedProps,
        page,
        toggleAllPageRowsSelected,
      }) => {
        const rows = page.map(row => row.original);

        return (
          <Checkbox
            {...getToggleAllPageRowsSelectedProps({
              label: 'label',
              /* When we override the deafult onChange handler provided by useRowSelect,
               * we have to manually trigger the toggleRowSelected function manually.
               */
              onChange: event => {
                toggleAllPageRowsSelected();
                selectionHeaderFn(rows, event);
              },
              value: 'allRows[]',
            })}
          />
        );
      },
      Cell: ({ row }) => (
        <Checkbox
          {...row.getToggleRowSelectedProps({
            label: row.id,
            /* When we override the deafult onChange handler provided by useRowSelect,
             * we have to manually trigger the toggleRowSelected function manually.
             */
            onChange: event => {
              row.toggleRowSelected(event.target.checked);
              selectionFn(row.original, event);
            },
            value: row.id,
          })}
        />
      ),
    },
    /* eslint-enable react/prop-types */
    /* eslint-enable react/display-name */
    ...decorators,
  ]);
};

export default useRowSelectComponent;
/* eslint-enable react/jsx-props-no-spreading */
