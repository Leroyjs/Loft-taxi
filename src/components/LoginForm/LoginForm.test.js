import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import LoginForm from './LoginForm.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Login component', () => {
    it('render', () => {
        const wrapper = shallow(<LoginForm changeForm={() => {}} />);

        expect(wrapper).toBeTruthy();
    });
});
