/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
export function camelCase(str) {
  // Match any word character at the begining of the string, any uppercase character, and any word characters after every word boundry.
  const regex = /(?:^\w|[A-Z]|\b\w)/g;

  // Make uppercase all the matches we find, except the first on, which we make lowercase. And finally, strip the whitespace.
  return str
    .replace(regex, (char, index) => index ? char.toUpperCase() : char.toLowerCase())
    .replace(/\s+/g, '');
}
/* eslint-enable prettier/prettier */
/* eslint-enable import/prefer-default-export */
