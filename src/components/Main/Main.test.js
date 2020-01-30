import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Main from './Main.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Map component', () => {
    it('render', () => {
        const wrapper = shallow(<Main page={'map'} changeForm={() => {}} />);

        expect(wrapper).toBeTruthy();
    });
});
