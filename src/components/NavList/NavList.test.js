import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import NavList from './NavList.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('NavList component', () => {
    it('render', () => {
        const wrapper = shallow(<NavList changePage={() => {}} />);

        expect(wrapper).toBeTruthy();
    });
});
