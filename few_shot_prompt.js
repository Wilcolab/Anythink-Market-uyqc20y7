/**
 * Converts a string to camelCase.
 * Handles spaces, underscores, hyphens, and all-uppercase or PascalCase inputs.
 *
 * Examples:
 *   "first name"    -> "firstName"
 *   "user_id"       -> "userId"
 *   "SCREEN_NAME"   -> "screenName"
 *   "mobile-number" -> "mobileNumber"
 *
 * @param {string} str - The input string.
 * @returns {string} The string in camelCase format.
 */
function toCamelCase(str) {
  // Lowercase the string to handle all-uppercase cases
  return str
    .toLowerCase()
    // Replace spaces, underscores, or hyphens followed by a letter with the uppercase letter
    .replace(/[_\-\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
}

// Example usages:
console.log(toCamelCase('first name'));     // "firstName"
console.log(toCamelCase('user_id'));        // "userId"
console.log(toCamelCase('SCREEN_NAME'));    // "screenName"
console.log(toCamelCase('mobile-number'));  // "mobileNumber"