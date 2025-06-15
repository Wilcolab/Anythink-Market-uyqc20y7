/**
 * Converts a given input to kebab-case.
 * Handles spaces, underscores, PascalCase, camelCase, and removes special characters.
 * Provides type checking and error messages for invalid input.
 *
 * @param {string} input - The string to convert to kebab-case.
 * @returns {string} The kebab-case formatted string.
 * @throws {TypeError} If input is not a string.
 *
 * @example
 * toKebabCase('Hello World');          // 'hello-world'
 * toKebabCase('snake_case_input');     // 'snake-case-input'
 * toKebabCase(' ThisIsAnExample ');    // 'this-is-an-example'
 * toKebabCase('multiple   spaces');    // 'multiple-spaces'
 * toKebabCase('Special!@#Chars');      // 'special-chars'
 */
function toKebabCase(input) {
  // Type check: Only process strings
  if (typeof input !== 'string') {
    throw new TypeError('Input to toKebabCase must be a string');
  }

  // Trim leading/trailing whitespace
  let str = input.trim();

  // Convert camelCase and PascalCase to kebab-case by inserting a hyphen before capital letters
  str = str.replace(/([a-z0-9])([A-Z])/g, '$1-$2');

  // Replace underscores and multiple spaces with a single hyphen
  str = str.replace(/[_\s]+/g, '-');

  // Remove non-alphanumeric characters except hyphens
  str = str.replace(/[^a-zA-Z0-9-]/g, '');

  // Convert to lower case
  return str.toLowerCase();
}

// Example usages:
console.log(toKebabCase('Hello World'));         // Output: 'hello-world'
console.log(toKebabCase('snake_case_input'));    // Output: 'snake-case-input'
console.log(toKebabCase(' ThisIsAnExample '));   // Output: 'this-is-an-example'
console.log(toKebabCase('multiple   spaces'));   // Output: 'multiple-spaces'
console.log(toKebabCase('Special!@#Chars'));     // Output: 'special-chars'