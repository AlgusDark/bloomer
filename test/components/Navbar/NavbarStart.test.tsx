import React from 'react';
import { shallow } from 'enzyme';

import { NavbarStart } from './../../../src/components/Navbar/NavbarStart';

describe('NavbarStart', () => {
    it('should render a div with .navbar-start', () => {
        const component = shallow(<NavbarStart />);
        expect(component.contains(<div className='navbar-start' />)).toBe(true);
    });

    it('should render a p with .navbar-start', () => {
        const component = shallow(<NavbarStart tag='p' />);
        expect(component.contains(<p className='navbar-start' />)).toBe(true);
    });

    it('should render a div with .navbar-start and custom classNames', () => {
        const component = shallow(<NavbarStart className='custom' />);
        expect(component.hasClass('navbar-start')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});