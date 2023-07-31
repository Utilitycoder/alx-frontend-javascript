// Make an instance of WeakMap.
const weakMap = new WeakMap();

/**
 * queryAPI - Updates the number of times queryAPI function is called
 * @param {object} endpoint - Endpoint object
 */
const queryAPI = (endpoint) => {
  // Update the number of times queryAPI function is called
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint);
    weakMap.set(endpoint, count + 1);
  }

  // Check if the number of times queryAPI function is called is greater than 5
  const queryCount = weakMap.get(endpoint);

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
};

export { weakMap, queryAPI };
