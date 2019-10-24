import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../test/testUtils';
import GuestWords from './GuestWords';

const defaultProps = [ {
	guessedWords: [ { guessedWords: 'train', letterMatchCount: 3 } ]
} ];


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