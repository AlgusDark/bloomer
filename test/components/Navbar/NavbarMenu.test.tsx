import * as React from 'react';
import { shallow } from 'enzyme';

import { NavbarMenu } from './../../../src/components/Navbar/NavbarMenu';

describe('NavbarMenu', () => {
    it('should render a div with .navbar-menu', () => {
        const component = shallow(<NavbarMenu>My Nav</NavbarMenu>);
        expect(component.contains(<div className='navbar-menu'>My Nav</div>)).toBe(true);
    });

    it('should render a div with .navbar-menu', () => {
        const component = shallow(<NavbarMenu tag='nav'>My Nav</NavbarMenu>);
        expect(component.contains(<nav className='navbar-menu'>My Nav</nav>)).toBe(true);
    });

     it('should render a div with .navbar-menu and modifiers', () => {
        const component = shallow(<NavbarMenu isActive><span>Any Content</span></NavbarMenu>);
        expect(component.hasClass('navbar-menu')).toBe(true);
        expect(component.hasClass('is-active')).toBe(true);
    });

     it('should render a div with .navbar-menu, modifiers and custom classNames', () => {
        const component = shallow(<NavbarMenu isActive className='custom'><span>Any Content</span></NavbarMenu>);
        expect(component.hasClass('navbar-menu')).toBe(true);
        expect(component.hasClass('is-active')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a div with .navbar-menu and custom classNames', () => {
        const component = shallow(<NavbarMenu className='custom'><span>Any Content</span></NavbarMenu>);
        expect(component.hasClass('navbar-menu')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});