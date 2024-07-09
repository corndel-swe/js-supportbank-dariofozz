// Exercise 2 Part 1
// Finish this function by throwing an error if the id is invalid.
export function validateId(id) {
  // Check that the id exists
  if (id === null || id === undefined) {
    throw new Error('ID is required')
    
  }

  // The id should be a string:
  if (typeof id !== 'string') {
    // TODO: Add your code to throw an error here
    throw new error ('ID should be a string')
  }

  // The id should be an odd number of characters long:
  if (id.length % 2 ===0){
    throw new error ('id should be an odd number of characters long')
  }
  // TODO: throw an error on this condition

  if (!id.includes('a'))
    throw new error ('id should contain the letter a')
  // The id should contain the letter 'a':
  // TODO: throw an error on this condition

  // The id should be all lowercase:
  if (id !== id.toLocaleLowerCase())
    throw new error('id should be lowercase')
  // TODO: throw an error on this condition
}

// Exercise 2 Part 2
// Use try/catch with the `validateId` function above to validate the id.
// Return `true` if the id is valid.
// If an error is thrown: catch it, log a useful message, then return `false`
export function isIdValid(id, logger) {
  try {
  validateId(id)
  }catch (error) {
  logger.error('ID is invalid')
  return false
}
return true
}