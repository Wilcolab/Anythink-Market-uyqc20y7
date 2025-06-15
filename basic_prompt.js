/**
 * Converts a given string to camelCase.
 * The function should remove spaces, underscores, and hyphens,
 * and capitalize each word after the first one.
 * The first word should be in lowercase.
 * 
 * Example:
 *   Input: "convert to camel case"
 *   Output: "convertToCamelCase"
 *
 * @param {string} str - The input string.
 * @returns {string} The camelCased string.
 */
function toCamelCase(str) {
  return str
    .replace(/[_-\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
    .replace(/^(.)/, (c) => c.toLowerCase());
}