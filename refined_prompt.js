/**
 * Converts a given string to camelCase.
 * Handles spaces, underscores, hyphens, and all-uppercase or PascalCase words.
 *
 * The function will:
 * - Lowercase the first word
 * - Capitalize the first letter of each subsequent word
 * - Remove spaces, underscores, and hyphens
 * - Convert all-uppercase strings to lowercase (except for the first letter of subsequent words)
 *
 * @example
 * toCamelCase('first name');      // 'firstName'
 * toCamelCase('user_id');         // 'userId'
 * toCamelCase('SCREEN_NAME');     // 'screenName'
 * toCamelCase('mobile-number');   // 'mobileNumber'
 * toCamelCase('MobileNumber');    // 'mobileNumber'
 *
 * @param {string} str - The string to convert.
 * @returns {string} The string in camelCase format.
 */
function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[_\-\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
}

/**
 * Converts a given string to snake_case.
 * Handles spaces, hyphens, camelCase, PascalCase, and all-uppercase words.
 *
 * The function will:
 * - Replace spaces and hyphens with underscores
 * - Insert underscores before capital letters (except at the start)
 * - Lowercase the entire string
 * - Remove duplicate underscores
 *
 * @example
 * toSnakeCase('first name');      // 'first_name'
 * toSnakeCase('userId');          // 'user_id'
 * toSnakeCase('SCREEN_NAME');     // 'screen_name'
 * toSnakeCase('mobile-number');   // 'mobile_number'
 * toSnakeCase('MobileNumber');    // 'mobile_number'
 *
 * @param {string} str - The string to convert.
 * @returns {string} The string in snake_case format.
 */
function toSnakeCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')   // camelCase or PascalCase to snake_case
    .replace(/[\s\-]+/g, '_')                // spaces and hyphens to underscores
    .replace(/_+/g, '_')                     // replace multiple underscores with single
    .toLowerCase();
}

/**
 * Converts a given string to dot.case.
 * Handles spaces, underscores, hyphens, camelCase, PascalCase, and all-uppercase words.
 *
 * The function will:
 * - Insert a dot before capital letters (except at the start)
 * - Replace spaces, underscores, and hyphens with dots
 * - Lowercase the entire string
 * - Remove duplicate dots
 *
 * @example
 * toDotCase('first name');      // 'first.name'
 * toDotCase('user_id');         // 'user.id'
 * toDotCase('SCREEN_NAME');     // 'screen.name'
 * toDotCase('mobile-number');   // 'mobile.number'
 * toDotCase('mobileNumber');    // 'mobile.number'
 *
 * @param {string} str - The string to convert.
 * @returns {string} The string in dot.case format.
 */
function toDotCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1.$2')  // camelCase or PascalCase to dot.case
    .replace(/[_\-\s]+/g, '.')              // spaces, underscores, hyphens to dots
    .replace(/\.+/g, '.')                   // replace multiple dots with single
    .toLowerCase();
}