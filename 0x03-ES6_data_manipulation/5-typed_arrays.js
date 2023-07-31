/**
 * Create a new ArrayBuffer with an Int8 value at a specific position
 * @param {number} length
 * @param {number} position
 * @param {number} value
 * @returns {number} - New DataView
 */
export default function createInt8TypedArray(length, position, value) {
  // Check if position is greater than length
  if (position > length) {
    throw Error('Position outside range');
  }

  // Create a new ArrayBuffer with the length passed as argument to the function
  const buffer = new ArrayBuffer(length);

  // Create a new DataView of the ArrayBuffer
  const dataView = new DataView(buffer);

  // Set the value at the position passed as argument to
  // the function to be the value passed as argument to the function
  dataView.setInt8(position, value);

  // Return the new DataView
  return dataView;
}
