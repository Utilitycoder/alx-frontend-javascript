/**
 * updateUniqueItems - Updates the value of a key in a map to 100 if the value is 1
 * @param {map} map - Map to update
 * @returns {map} - Updated map
 */
export default function updateUniqueItems(map) {
  // Check if map is an instance of Map, if not, throw an error
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  // Loop through each key/value pair in the map and update the value
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
  // Return the updated map
  return map;
}
