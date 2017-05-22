import * as React from 'react';
import { shallow } from 'enzyme';

import { Tabs } from './../../../src';

describe('Tabs', () => {
    it('should render a div with .tabs', () => {
        const component = shallow(<Tabs>My Tabs</Tabs>);
        expect(component.contains(<div className='tabs'>My Tabs</div>)).toBe(true);
    });

    it('should render a div with .tabs and modifiers', () => {
        const component = shallow(<Tabs isBoxed isToggle isCentered isLarge>My Tabs</Tabs>);
        expect(component.hasClass('tabs')).toBe(true);
        expect(component.hasClass('is-boxed')).toBe(true);
        expect(component.hasClass('is-toggle')).toBe(true);
        expect(component.hasClass('is-centered')).toBe(true);
        expect(component.hasClass('is-large')).toBe(true);
    });

    it('should render a paragraph with .tab and custom classes', () => {
        const component = shallow(<Tabs isBoxed className='custom'><span>Any Content</span></Tabs>);
        expect(component.hasClass('tabs')).toBe(true);
        expect(component.hasClass('is-boxed')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});