import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import rootReducer from '../reducers';


/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducer.
 * @function storeFactory
 * @param {object} initialState - Initial state for store
 * @param {string} val - Value of data-test attribute.
 * @returns {Store} - Redux store.
 */

export const stroreFactory = initialState => {
	return createStore(rootReducer, initialState);
};


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