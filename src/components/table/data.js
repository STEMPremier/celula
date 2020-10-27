/* eslint-disable */
import namor from 'namor';
/**
 * @typedef {Object} Person
 * @property {string} firstName - The person's first name.
 * @property {string} lastName - The person's last name.
 * @property {number} age - The person's age.
 * @property {string} sex - The person's sex.
 */

/**
 * @function
 * @name capitalizeFirstLetter
 * Capitalize the first letter of a string, leaves remaining string untouched.
 *
 * @param {string} string - The string to capitalize.
 * @return {string} string - The capitalized string.
 */
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * @function
 * @name makePerson
 * Makes a person object.
 *
 * @return {Person} - The person.
 */
const makePerson = () => {
  const sexChance = Math.random();

  return {
    firstName: capitalizeFirstLetter(
      namor.generate({ words: 1, saltLength: 0 }),
    ),
    lastName: capitalizeFirstLetter(
      namor.generate({ words: 1, saltLength: 0 }),
    ),
    age: Math.floor(Math.random() * 100),
    sex: capitalizeFirstLetter(sexChance < 0.5 ? 'male' : 'female'),
  };
};

/**
 * @function
 * @name makeData
 * Makes a data array.
 *
 * @param {len} number - The length of the array.
 * @return {array} - The data.
 */
const makeData = (len) => {
  const array = [];

  for (let i = 0; i < len; i++) {
    array.push(makePerson());
  }

  return array;
};

/**
 * An array of objects to populate a table with.
 * The structure of a datum's object is arbitrary, but the structure of any two objects must match.
 * The property names are used to map text for the header (defined in a separate array) to the column containing their respective data.
 */
// const data = makeData(100);
const data = [
  {
    firstName: 'Terry',
    lastName: 'Jeffords',
    age: '30-65',
    sex: 'male',
  },
  {
    firstName: 'Jake',
    lastName: 'Peralta',
    age: '40',
    sex: 'male',
  },
  {
    firstName: 'Rosa',
    lastName: 'Diaz',
    age: '35',
    sex: 'female',
  },
  {
    firstName: 'Amy',
    lastName: 'Santiago',
    age: '36',
    sex: 'female',
  },
  {
    firstName: 'Raymond',
    lastName: 'Holt',
    age: '65',
    sex: 'male',
  },
  {
    firstName: 'Gina',
    lastName: 'Linetti',
    age: '40',
    sex: 'female',
  },
  {
    firstName: 'Charles',
    lastName: 'Boyle',
    age: '45',
    sex: 'male',
  },
  {
    firstName: 'Norm',
    lastName: 'Scully',
    age: 'lucky to be alive',
    sex: 'male',
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    age: '30',
    sex: 'male',
  },
  {
    firstName: 'Jack',
    lastName: 'Parr',
    age: '47',
    sex: 'male',
  },
  {
    firstName: 'Rosanne',
    lastName: 'Hernendex',
    age: '38',
    sex: 'female',
  },
  {
    firstName: 'Carol',
    lastName: 'Beattie',
    age: '59',
    sex: 'female',
  },
  {
    firstName: 'Jesse',
    lastName: 'Humboldt',
    age: '15',
    sex: 'male',
  },
  {
    firstName: 'Paula',
    lastName: 'Aubermol',
    age: '47',
    sex: 'female',
  },
  {
    firstName: 'Clint',
    lastName: 'Ferman',
    age: '28',
    sex: 'male',
  },
  {
    firstName: 'Eddie',
    lastName: 'Smadder',
    age: '24',
    sex: 'male',
  },
  {
    firstName: 'Terry',
    lastName: 'Jeffords',
    age: '30-65',
    sex: 'male',
  },
  {
    firstName: 'Jake',
    lastName: 'Peralta',
    age: '40',
    sex: 'male',
  },
  {
    firstName: 'Rosa',
    lastName: 'Diaz',
    age: '35',
    sex: 'female',
  },
  {
    firstName: 'Amy',
    lastName: 'Santiago',
    age: '36',
    sex: 'female',
  },
  {
    firstName: 'Raymond',
    lastName: 'Holt',
    age: '65',
    sex: 'male',
  },
  {
    firstName: 'Gina',
    lastName: 'Linetti',
    age: '40',
    sex: 'female',
  },
  {
    firstName: 'Charles',
    lastName: 'Boyle',
    age: '45',
    sex: 'male',
  },
  {
    firstName: 'Norm',
    lastName: 'Scully',
    age: 'lucky to be alive',
    sex: 'male',
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    age: '30',
    sex: 'male',
  },
  {
    firstName: 'Jack',
    lastName: 'Parr',
    age: '47',
    sex: 'male',
  },
  {
    firstName: 'Rosanne',
    lastName: 'Hernendex',
    age: '38',
    sex: 'female',
  },
  {
    firstName: 'Carol',
    lastName: 'Beattie',
    age: '59',
    sex: 'female',
  },
  {
    firstName: 'Jesse',
    lastName: 'Humboldt',
    age: '15',
    sex: 'male',
  },
  {
    firstName: 'Paula',
    lastName: 'Aubermol',
    age: '47',
    sex: 'female',
  },
  {
    firstName: 'Clint',
    lastName: 'Ferman',
    age: '28',
    sex: 'male',
  },
  {
    firstName: 'Eddie',
    lastName: 'Smadder',
    age: '24',
    sex: 'male',
  },
  {
    firstName: 'Terry',
    lastName: 'Jeffords',
    age: '30-65',
    sex: 'male',
  },
  {
    firstName: 'Jake',
    lastName: 'Peralta',
    age: '40',
    sex: 'male',
  },
  {
    firstName: 'Rosa',
    lastName: 'Diaz',
    age: '35',
    sex: 'female',
  },
  {
    firstName: 'Amy',
    lastName: 'Santiago',
    age: '36',
    sex: 'female',
  },
  {
    firstName: 'Raymond',
    lastName: 'Holt',
    age: '65',
    sex: 'male',
  },
  {
    firstName: 'Gina',
    lastName: 'Linetti',
    age: '40',
    sex: 'female',
  },
  {
    firstName: 'Charles',
    lastName: 'Boyle',
    age: '45',
    sex: 'male',
  },
  {
    firstName: 'Norm',
    lastName: 'Scully',
    age: 'lucky to be alive',
    sex: 'male',
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    age: '30',
    sex: 'male',
  },
  {
    firstName: 'Jack',
    lastName: 'Parr',
    age: '47',
    sex: 'male',
  },
  {
    firstName: 'Rosanne',
    lastName: 'Hernendex',
    age: '38',
    sex: 'female',
  },
  {
    firstName: 'Carol',
    lastName: 'Beattie',
    age: '59',
    sex: 'female',
  },
  {
    firstName: 'Jesse',
    lastName: 'Humboldt',
    age: '15',
    sex: 'male',
  },
  {
    firstName: 'Paula',
    lastName: 'Aubermol',
    age: '47',
    sex: 'female',
  },
  {
    firstName: 'Clint',
    lastName: 'Ferman',
    age: '28',
    sex: 'male',
  },
  {
    firstName: 'Eddie',
    lastName: 'Smadder',
    age: '24',
    sex: 'male',
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
    Header: 'Sex',
    accessor: 'sex',
  },
];

export { data, columns };
/* eslint-enable */
