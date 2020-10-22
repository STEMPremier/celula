/**
 * An array of objects to populate a table with.
 * The structure of a datum's object is arbitrary, but the structure of any two objects must match.
 * The property names are used to map text for the header (defined in a separate array) to the column containing their respective data.
 */
const data = [
  {
    firstName: 'Ian',
    lastName: 'Greulich',
    age: '42',
    gender: 'male',
  },
  {
    firstName: 'Jess',
    lastName: 'Greulich',
    age: '38',
    gender: 'female',
  },
  {
    firstName: 'Sophia',
    lastName: 'Greulich',
    age: '12',
    gender: 'female',
  },
  {
    firstName: 'Carol',
    lastName: 'Antley',
    age: '60',
    gender: 'female',
  },
  {
    firstName: 'Julia',
    lastName: 'Vanderpool',
    age: '84',
    gender: 'female',
  },
  {
    firstName: 'Ray',
    lastName: 'Greulich',
    age: '61',
    gender: 'male',
  },
  {
    firstName: 'Ray',
    lastName: 'Greulich',
    age: '61',
    gender: 'male',
  },
  {
    firstName: 'Ray',
    lastName: 'Greulich',
    age: '61',
    gender: 'male',
  },
  {
    firstName: 'Ray',
    lastName: 'Greulich',
    age: '61',
    gender: 'male',
  },
  {
    firstName: 'Ray',
    lastName: 'Greulich',
    age: '61',
    gender: 'male',
  },
  {
    firstName: 'Ray',
    lastName: 'Greulich',
    age: '61',
    gender: 'male',
  },
  {
    firstName: 'Ray',
    lastName: 'Greulich',
    age: '61',
    gender: 'male',
  },
  {
    firstName: 'Ray',
    lastName: 'Greulich',
    age: '61',
    gender: 'male',
  },
  {
    firstName: 'Ray',
    lastName: 'Greulich',
    age: '61',
    gender: 'male',
  },
  {
    firstName: 'Ray',
    lastName: 'Greulich',
    age: '61',
    gender: 'male',
  },
  {
    firstName: 'Ray',
    lastName: 'Greulich',
    age: '61',
    gender: 'male',
  },
  {
    firstName: 'Ray',
    lastName: 'Greulich',
    age: '61',
    gender: 'male',
  },
  {
    firstName: 'Ray',
    lastName: 'Greulich',
    age: '61',
    gender: 'male',
  },
  {
    firstName: 'Ray',
    lastName: 'Greulich',
    age: '61',
    gender: 'male',
  },
];

/**
 * An array that describes the column header text and it's relationship to (a column of) the data.
 * Each element in the array is an object that contains 2 properties, `accessor`, and `Header`.
 *
 * @param {string} accessor - The property in an element from the data array this column is for.
 * @param {string} Header - The text for the column header.
 */
const columns = [
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Age',
    accessor: 'age',
  },
  {
    Header: 'Gender',
    accessor: 'gender',
  },
];

export { data, columns };
