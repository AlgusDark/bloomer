import React from 'react';
import { shallow } from 'enzyme';

import { NavbarDropdown } from './../../../src/components/Navbar/NavbarDropdown';

describe('NavbarDropdown', () => {
    it('should render a div with .navbar-dropdown', () => {
        const component = shallow(<NavbarDropdown>My NavbarDropdown</NavbarDropdown>);
        expect(component.contains(<div className='navbar-dropdown'>My NavbarDropdown</div>)).toBe(true);
    });

    it('should render a p with .navbar-dropdown', () => {
        const component = shallow(<NavbarDropdown tag='p'>My NavbarDropdown</NavbarDropdown>);
        expect(component.contains(<p className='navbar-dropdown'>My NavbarDropdown</p>)).toBe(true);
    });

    it('should render a div with .navbar-dropdown and modifiers', () => {
        const component = shallow(<NavbarDropdown isBoxed><span>Any Content</span></NavbarDropdown>);
        expect(component.hasClass('navbar-dropdown')).toBe(true);
        expect(component.hasClass('is-boxed')).toBe(true);
    });

    it('should render a div with .navbar-dropdown, modifiers and custom classNames', () => {
        const component = shallow(<NavbarDropdown isBoxed className='custom'><span>Any Content</span></NavbarDropdown>);
        expect(component.hasClass('navbar-dropdown')).toBe(true);
        expect(component.hasClass('is-boxed')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a div with .navbar-dropdown and custom classNames', () => {
        const component = shallow(<NavbarDropdown className='custom'><span>Any Content</span></NavbarDropdown>);
        expect(component.hasClass('navbar-dropdown')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});