export default function setFromArray(array) {
  // Check if array is an array, if not, return an empty array
  if (!Array.isArray(array)) {
    return [];
  }
  // Create a new Set from the array and return it
  return new Set(array);
}
