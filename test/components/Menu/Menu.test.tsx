import * as React from 'react';
import { shallow } from 'enzyme';

import { Menu } from './../../../src/components/Menu/Menu';

describe('Menu', () => {
    it('should render an aside with .menu', () => {
        const component = shallow(<Menu>My Menu</Menu>);
        expect(component.contains(<aside className='menu'>My Menu</aside>)).toBe(true);
    });

    it('should render a div with .menu', () => {
        const component = shallow(<Menu tag='div'>My Menu</Menu>);
        expect(component.contains(<div className='menu'>My Menu</div>)).toBe(true);
    });

    it('should render an aside with .menu and custom classNames', () => {
        const component = shallow(<Menu className='custom'><span>Any Content</span></Menu>);
        expect(component.hasClass('menu')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});