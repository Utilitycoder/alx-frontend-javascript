/**
 * groceriesList - Returns a Map of groceries with given items
 * @returns {Map} groceries - Map of groceries with the predetermined items
 */
export default function groceriesList() {
  // Create a new Map
  const groceries = new Map();
  // Set the following items in the Map
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);
  // Return the Map
  return groceries;
}
