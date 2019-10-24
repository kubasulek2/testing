import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, stroreFactory } from '../../test/testUtils';
import Input from './Input';


const defaultProps = { success: false };

/**
 * Factory function for generating a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper}
 */

const setup = (initialState={}) => {
	const store = stroreFactory(initialState);
	const wrapper = shallow(<Input store={store}/>).dive();
	console.log(wrapper.debug());
};
setup();

describe('render', () => {

	describe('word has not be guessed', () => {

		test('renders component without errors', () => {

		});
		test('renders input box', () => {

		});
		test('renders submit button', () => {

		});
	});

	describe('word has been guessed', () => {
		test('renders component without errors', () => {

		});
		test('does not renders input box', () => {

		});
		test('does not renders submit button', () => {

		});
	});
});


describe('update state', () => {

});
