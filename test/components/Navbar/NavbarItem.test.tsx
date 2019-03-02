import React from 'react';
import { shallow } from 'enzyme';

import { NavbarItem } from './../../../src/components/Navbar/NavbarItem';

describe('NavbarItem', () => {
    it('should render a custom component with NavbarItem props', () => {
        const customComponent = (props) => (
            <div>
                My Button <a {...props} />
            </div>
        );

        const customComponentRendered = (
            <div>
                My Button <a href='#' className='navbar-item' />
            </div>
        );

        const component = shallow(<NavbarItem href='#' render={customComponent} />);
        expect(component.contains(customComponentRendered)).toBe(true);
    });

    it('should render an anchor with .navbar-item', () => {
        const component = shallow(<NavbarItem href='#'>My NavbarItem</NavbarItem>);
        expect(component.contains(<a href='#' className='navbar-item'>My NavbarItem</a>)).toBe(true);
    });

    it('should render a button with .navbar-item', () => {
        const component = shallow(<NavbarItem tag='button'>My NavbarItem</NavbarItem>);
        expect(component.contains(<button className='navbar-item'>My NavbarItem</button>)).toBe(true);
    });

    it('should render a div with .navbar-item', () => {
        const component = shallow(<NavbarItem >My NavbarItem</NavbarItem>);
        expect(component.contains(<div className='navbar-item'>My NavbarItem</div>)).toBe(true);
    });

    it('should render a div with .navbar-item and modifiers', () => {
        const component = shallow(<NavbarItem isActive isHoverable hasDropdown />);
        expect(component.is('div')).toBe(true);
        expect(component.hasClass('navbar-item')).toBe(true);
        expect(component.hasClass('is-active')).toBe(true);
        expect(component.hasClass('is-hoverable')).toBe(true);
        expect(component.hasClass('has-dropdown')).toBe(true);
    });

    it('should render a div with .navbar-item, modifiers and custom classNames', () => {
        const component = shallow(<NavbarItem isActive className='custom' />);
        expect(component.is('div')).toBe(true);
        expect(component.hasClass('navbar-item')).toBe(true);
        expect(component.hasClass('is-active')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a div with .navbar-item and custom classNames', () => {
        const component = shallow(<NavbarItem className='custom' />);
        expect(component.is('div')).toBe(true);
        expect(component.hasClass('navbar-item')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
