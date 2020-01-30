import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Header from './Header.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Header component', () => {
    it('render', () => {
        const wrapper = shallow(<Header changePage={() => {}} />);

        expect(wrapper).toBeTruthy();
    });
});
