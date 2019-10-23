// import React from 'react';
// import Enzyme, { shallow } from 'enzyme';
// import EnzymeAdapter from 'enzyme-adapter-react-16';
// import App from './App';

// Enzyme.configure({ adapter: new EnzymeAdapter() });

// /**
//  * Factory function to create a ShallowWrapper for the App component 
//  * @function setup 
//  * @param {object} props - Component props specific to this setup
//  * @param {object} state - Initial state for setup
//  * @returns {shallowWrapper}
//  */

// const setup = (props = {}, state = null) => {
// 	const wrapper = shallow(<App {...props} />);
// 	if (state) wrapper.setState(state);
// 	return wrapper;
// };

// /**
//  * Return ShallowWrapper containing node(s) with the given data-test value.
//  * @param {ShallowWrapper} wrapper - Enzyme shallwow wrapper to search within.
//  * @param {string} val - Value of data-test attribute for search.
//  * @returns {shallowWrapper}
//  */

// const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${ val }']`);

// const wrapper = setup();

// test('render without errors', () => {
// 	const appComponent = findByTestAttr(wrapper, 'component-app');
// 	expect(appComponent).toHaveLength(1);


// });

// test('render increment button', () => {
// 	const incrementButton = findByTestAttr(wrapper, 'increment-button');
// 	expect(incrementButton).toHaveLength(1);
// });

// test('counter display', () => {
// 	const counterDisplay = findByTestAttr(wrapper, 'counter-display');
// 	expect(counterDisplay).toHaveLength(1);
// });

// test('counter starts at 0', () => {
// 	const wrapper = setup();
// 	const initialCounterState = wrapper.state('counter');
// 	expect(initialCounterState).toBe(0);
// });

// test('increment button click increments counter display', () => {

// 	// init wrapper with state
// 	const counter = 7;
// 	const wrapper = setup(null, { counter });

// 	//find button and click
// 	const incrementButton = findByTestAttr(wrapper, 'increment-button');
// 	incrementButton.simulate('click');

// 	//find counter display and read text
// 	const counterDisplay = findByTestAttr(wrapper, 'counter-display');
// 	expect(counterDisplay.text()).toContain(counter + 1);
// });

// test('render decrement button and click decrements counter display', () => {

// 	// init wrapper with state
// 	const counter = 7;
// 	const wrapper = setup(null, { counter });

// 	//find button check if exists and click
// 	const decrementButton = findByTestAttr(wrapper, 'decrement-button');
// 	expect(decrementButton).toHaveLength(1);
// 	decrementButton.simulate('click');

// 	//find counter display and read text
// 	const counterDisplay = findByTestAttr(wrapper, 'counter-display');
// 	expect(counterDisplay.text()).toContain(counter - 1);

// });

// test('decrement never goes below 0', () => {

// 	// init wrapper with state
// 	const counter = 0;
// 	const wrapper = setup(null, { counter });

// 	//find button and click
// 	const decrementButton = findByTestAttr(wrapper, 'decrement-button');
// 	decrementButton.simulate('click');

// 	//find counter display and read text
// 	const counterDisplay = findByTestAttr(wrapper, 'counter-display');
// 	expect(counterDisplay.text()).toContain(0);
// });

// test('display error when try to decrement below zero', () => {
// 	const counter = 0;
// 	const wrapper = setup(null, { counter });

// 	const decrementButton = findByTestAttr(wrapper, 'decrement-button');
// 	decrementButton.simulate('click');

// 	const errorDisplay = findByTestAttr(wrapper, 'error-display');
// 	expect(errorDisplay).toHaveLength(1);
// });

// test('hide error after increment', () => {
// 	const counter = 0;
// 	const error = true;
// 	const wrapper = setup(null, { counter, error });

// 	const incrementButton = findByTestAttr(wrapper, 'increment-button');
// 	incrementButton.simulate('click');

// 	const errorDisplay = findByTestAttr(wrapper, 'error-display');
// 	expect(errorDisplay).toHaveLength(0);
// });