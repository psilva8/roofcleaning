/**
 * Capitalizes the first letter of each word in a string
 * @param {string} str - The string to capitalize
 * @returns {string} The capitalized string
 */
export function capitalizeWords(str: string): string {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
} 