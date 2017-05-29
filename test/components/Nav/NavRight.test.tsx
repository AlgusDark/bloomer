import * as React from 'react';
import { shallow } from 'enzyme';

import { NavRight } from './../../../src/components/Nav/NavRight';

describe('Nav', () => {
    it('should render a div with .nav-right', () => {
        const component = shallow(<NavRight>My Nav</NavRight>);
        expect(component.contains(<div className='nav-right'>My Nav</div>)).toBe(true);
    });

     it('should render a div with .nav-right.nav-menu and modifiers', () => {
        const component = shallow(<NavRight isActive isMenu><span>Any Content</span></NavRight>);
        expect(component.hasClass('nav-right')).toBe(true);
        expect(component.hasClass('nav-menu')).toBe(true);
        expect(component.hasClass('is-active')).toBe(true);
    });

     it('should render a div with .nav-right, modifiers and custom classNames', () => {
        const component = shallow(<NavRight isActive className='custom'><span>Any Content</span></NavRight>);
        expect(component.hasClass('nav-right')).toBe(true);
        expect(component.hasClass('is-active')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a div with .nav-right and custom classNames', () => {
        const component = shallow(<NavRight className='custom'><span>Any Content</span></NavRight>);
        expect(component.hasClass('nav-right')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});