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
	return shallow(<GuestWords {...setupProps} />);
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
	let wrapper;
	const guessedWords = [
		{ guessedWord: 'train', letterMatchCount: 3 },
		{ guessedWord: 'agile', letterMatchCount: 1 },
		{ guessedWord: 'party', letterMatchCount: 5 },
	];
	beforeEach(() => {
		wrapper = setup({ guessedWords });
	});

	test('renders without errors', () => {
		const component = findByTestAttr(wrapper, 'component-guessed-words');
		expect(component).toHaveLength(1);
	});

	test('renders table with guesses', () => {
		const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
		expect(guessedWordsNode.length).toBe(1)
	});

	test('display correct number of guessed words', () => {
		const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
		expect(guessedWordsNodes.length).toBe(guessedWords.length);
	});

});
