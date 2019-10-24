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
	const wrapper = shallow(<Input store={store}/>).dive().dive();
	return wrapper;
};

describe('render', () => {

	describe('word has not been guessed', () => {
		let wrapper;
		beforeEach(() => {
			const initialState = { success: true };
			wrapper = setup(initialState);
		});

		test('renders component without errors', () => {
			const component = findByTestAttr(wrapper, 'component-input');
			expect(component).toHaveLength(1);
		});
		test('does not renders input box', () => {
			const input = findByTestAttr(wrapper, 'input-box');
			expect(input).toHaveLength(0);
		});
		test('does not renders submit button', () => {
			const submitButton = findByTestAttr(wrapper, 'submit-button');
			expect(submitButton).toHaveLength(0);
		});
	});
	describe('word has not been guessed', () => {
		let wrapper;
		beforeEach(() => {
			const initialState = { success: false};
			wrapper = setup(initialState);
		});

		test('renders component without errors', () => {
			const component = findByTestAttr(wrapper, 'component-input');
			expect(component).toHaveLength(1);
		});
		test('renders input box', () => {
			const input = findByTestAttr(wrapper, 'input-box');
			expect(input).toHaveLength(1);
		});
		test('renders submit button', () => {
			const submitButton = findByTestAttr(wrapper, 'submit-button');
			expect(submitButton).toHaveLength(1);
		});
	});
});


describe('update state', () => {

});
