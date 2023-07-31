/**
 * hasValuesFromArray - Checks if all the elements in an array are in a set
 * @param {set} set - Set to check
 * @param {array} array - Array of values to check for
 * @returns {boolean} - True if all the elements in the array are in the set, false otherwise
 */
export default function hasValuesFromArray(set, array) {
  // Check if set is a Set, if not, throw an error
  if (!(set instanceof Set)) {
    throw Error('set is not a Set');
  }
  // Check if array is an array, if not, throw an error
  if (!Array.isArray(array)) {
    throw Error('array is not an Array');
  }
  // Check if all the elements in the array are in the set
  return array.every((element) => set.has(element));
}
