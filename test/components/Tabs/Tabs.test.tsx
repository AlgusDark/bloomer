import * as React from 'react';
import { shallow } from 'enzyme';

import { Tabs } from './../../../src/components/Tabs/Tabs';

describe('Tabs', () => {
    it('should render a div with .tabs', () => {
        const component = shallow(<Tabs>My Tabs</Tabs>);
        expect(component.contains(<div className='tabs'>My Tabs</div>)).toBe(true);
    });

    it('should render a p with .tabs', () => {
        const component = shallow(<Tabs tag='p'>My Tabs</Tabs>);
        expect(component.contains(<p className='tabs'>My Tabs</p>)).toBe(true);
    });

    it('should render a div with .tabs and modifiers', () => {
        const component = shallow(<Tabs isBoxed isToggle>My Tabs</Tabs>);
        expect(component.hasClass('tabs')).toBe(true);
        expect(component.hasClass('is-boxed')).toBe(true);
        expect(component.hasClass('is-toggle')).toBe(true);
    });

    it('should render a paragraph with .tab, modifiers and custom classNames', () => {
        const component = shallow(<Tabs isBoxed className='custom'><span>Any Content</span></Tabs>);
        expect(component.hasClass('tabs')).toBe(true);
        expect(component.hasClass('is-boxed')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a paragraph with .tab and custom classNames', () => {
        const component = shallow(<Tabs className='custom'><span>Any Content</span></Tabs>);
        expect(component.hasClass('tabs')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});