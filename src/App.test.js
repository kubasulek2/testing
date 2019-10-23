import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component 
 * @function setup 
 * @param {object} props 
 */

const setup = (props={}, state=null) => shallow(<App {...props}/>);

const wrapper = shallow(<App />);

test('render without errors', () => {
	const appComponent = wrapper.find('[data-test="component-app"]');
	expect(appComponent).toHaveLength(1);
	

});

test('render increment button', () => {
	const incrementButton = wrapper.find('[data-test="increment-button"]');
	expect(incrementButton).toHaveLength(1);
});

test('counter display', () => {
	const counterDisplay = wrapper.find('[data-test="counter-display"]');
	expect(counterDisplay).toHaveLength(1);
});

test('counter starts at 0', () => {
	
});
test('clicking button increments counter display', () => {

});