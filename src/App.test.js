import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('render without errors', () => {
	const wrapper = shallow(<App />);
	const appComponent = wrapper.find('[data-test="component-app"]');
	expect(appComponent).toHaveLength(1);
	

});

test('render increment button', () => {
	
});

test('counter display', () => {
	
});

test('counter starts at 0', () => {
	
});
test('clicking button increments counter display', () => {

});