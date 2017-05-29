import * as React from 'react';
import { shallow } from 'enzyme';

import { NavLeft } from './../../../src/components/Nav/NavLeft';

describe('NavLeft', () => {
    it('should render a div with .nav-left', () => {
        const component = shallow(<NavLeft>My NavLeft</NavLeft>);
        expect(component.contains(<div className='nav-left'>My NavLeft</div>)).toBe(true);
    });

    it('should render a div with .nav-left and custom classNames', () => {
        const component = shallow(<NavLeft className='custom'><span>Any Content</span></NavLeft>);
        expect(component.hasClass('nav-left')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});