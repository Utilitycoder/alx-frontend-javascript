/**
 * cleanSet - search a set for strings that start with a given string and
 * return the matches as a string separated by -
 * @param {set} set - Set to clean
 * @param {string} startString - String to match at the beginning of each string in the set
 * @returns {string} - each element of the set that starts with startString, separated by a -
 */
export default function cleanSet(set, startString) {
  // Check if set is a Set, if not, throw an error
  if (!(set instanceof Set)) {
    throw Error('set is not a Set');
  }
  // Check if startString is a string, if not, throw an error
  if (typeof startString !== 'string') {
    throw Error('startString is not a string');
  }
  // Check if startString is empty, if so, return an empty string
  if (startString === '') {
    return '';
  }

  // Create a new array from the set
  const setArray = Array.from(set);
  // Filter the array to only include strings that start with startString
  const filteredArray = setArray.filter((element) => element.startsWith(startString));
  // strip startString from the beginning of each string in the array
  const stripedArray = filteredArray.map((element) => element.replace(startString, ''));

  // Return stripedArray as a string with each element joined together
  // and separated by a - character
  return stripedArray.join('-');
}
