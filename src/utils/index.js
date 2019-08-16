/**
 * Uses a regular expression to retrieve acronyms
 * from the specified string.
 * @param  {string} str
 */
export function getAcronym(str) {
  return str.match(/\b(\w)/g).join('');
}

/**
 * Retrieves a style to be used in the app, it
 * creates a random background color using the
 * preset colors(more can be freely added) based
 * in the char code of the first char of the
 * specified string.
 * @param  {string} str
 */
export function getDefaultProfilePicStyle(str) {
  const colorPalette = [
    '#e083fc',
    '#bdf57d',
    '#edbb55',
    '#7663f2',
    '#f55f8a',
    '#f27468',
    '#68dbf2',
    '#f0e584',
    '#e8c47d',
  ];
  return {
    backgroundColor: colorPalette[(str.charCodeAt(0) % (colorPalette.length - 1))],
  };
}

/**
 * Validation for numbers
 * @param  {number} n
 */
export function isNumber(n) {
  return !Number.isNaN(parseFloat(n)) && Number.isFinite(n);
}
