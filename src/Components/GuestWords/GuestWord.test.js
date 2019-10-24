import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../test/testUtils';
import GuestWords from './GuestWords';

const defaultProps = {
	guessedWords: [ { guessedWord: 'train', letterMatchCount: 3 } ]
};


/**
 * Factory function for generating a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific for this setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<GuestWords {...setupProps}/>);
};

test('does not throw warning with expected props', () => {
	checkProps(GuestWords, defaultProps);
});



describe('if there are no words guessed', () => {
	
	let wrapper;
	beforeEach(() => {
		wrapper = setup({ guessedWords: [] });
	});
	
	test('renders without errors', () => {
		const component = findByTestAttr(wrapper, 'component-guessed-words');
		expect(component).toHaveLength(1);


	});
	test('renders instructions to guess a word', () => {
		const instruction = findByTestAttr(wrapper, 'guess-instructions');
		expect(instruction.text()).not.toHaveLength(0);
		
	});
});

describe('if there are words guessed', () => {
	test('renders without errors', () => {
		const wrapper = setup();
		expect(wrapper).toHaveLength(1);
	});
});
