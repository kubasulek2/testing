import checkPropTypes from 'check-prop-types';


/**
 * Function to find node(s) in ShallowWrapper given by the data-test attribute value
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme ShallowWrapper to search within
 * @param {string} val - Value of data-test attribute.
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${ val }']`);

/**
 * Function to catch prop-type error.
 * @function checkProps
 * @param {Component} component - React component, without tags around.
 * @param {object} confirmingProps - Props object to make a check on.
 * @function checkPropTypes - Npm module that makes, actual checking
 * @constant {undefined or object} propError - Set error if prop-types don't match or undefined if match
 */

export const checkProps = (component, confirmingProps) => {
	const propError = checkPropTypes(
		component.propTypes,
		confirmingProps,
		'prop',
		component.name
	);
	expect(propError).toBeUndefined();
};