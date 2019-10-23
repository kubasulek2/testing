import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';
import { findByTestAttr } from '../../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function for generating a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => shallow(<Congrats {...props} />);

const wrapper = setup();


test('renders without error', () => {
	const congratsComponent = findByTestAttr(wrapper, 'component-congrats');
	expect(congratsComponent).toHaveLength(1);
});

test('renders no text when `success` prop is false', () => {

});

test('renders non-empty congrats message when `success` prop is true', () => {

});