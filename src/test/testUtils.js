/**
 * Function to find node(s) in ShallowWrapper given by the data-test attribute value
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme ShallowWrapper to search within
 * @param {string} val - Value of data-test attribute.
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${ val }']`);