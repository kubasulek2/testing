import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${ val }']`);

const wrapper = shallow(<Congrats />);


test('should render Congrats Components', () => {
	const congratsComponent = findByTestAttr(wrapper, 'component-congrats');
	expect(congratsComponent).toHaveLength(1);
});