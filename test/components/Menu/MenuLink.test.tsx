import * as React from 'react';
import { shallow } from 'enzyme';

import { MenuLink } from './../../../src';

describe('MenuLink', () => {
    it('should render a custom component with MenuLink props', () => {
        const customComponent = (props) => (
            <div>
                My Link <a {...props} />
            </div>
        );

        const customComponentRendered = (
            <div>
                My Link <a href='#' className='is-active custom' />
            </div>
        );

        const component = shallow(<MenuLink href='#' isActive className='custom' render={customComponent} />);
        expect(component.contains(customComponentRendered)).toBe(true);
    });

    it('should render an anchor', () => {
        const component = shallow(<MenuLink href='#'>My Link</MenuLink>);
        expect(component.contains(<a href='#'>My Link</a>));
    });

    it('should render an anchor with custom props', () => {
        const component = shallow(<MenuLink isActive href='#' className='custom'>My Link</MenuLink>);
        expect(component.hasClass('is-active')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});