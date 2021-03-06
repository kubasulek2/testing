import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test/testUtils';
import Congrats from './Congrats';

const defaultProps = { success: false };

/**
 * Factory function for generating a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific for this setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
	const setupProps = {...defaultProps, ...props};
	return shallow(<Congrats {...setupProps} />);
};



test('renders without error', () => {
	const wrapper = setup();
	expect(wrapper).toHaveLength(1);
});

test('renders no text when `success` prop is false', () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, 'component-congrats');
	expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `success` prop is true', () => {
	const wrapper = setup({ success: true });
	const message = findByTestAttr(wrapper, 'congrats-message');
	expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
	checkProps(Congrats, { success: false });
});
