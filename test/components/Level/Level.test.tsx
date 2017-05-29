import * as React from 'react';
import { shallow } from 'enzyme';

import { Level } from './../../../src/components/Level/Level';

describe('Level', () => {
    it('should render a nav with .level', () => {
        const component = shallow(<Level>My Level</Level>);
        expect(component.contains(<nav className='level'>My Level</nav>)).toBe(true);
    });

    it('should render a nav with .level and modifiers', () => {
        const component = shallow(<Level isMobile>My Level</Level>);
        expect(component.hasClass('level')).toBe(true);
        expect(component.hasClass('is-mobile')).toBe(true);
    });

    it('should render a nav with .level, modifiers and classNames', () => {
        const component = shallow(<Level isMobile className='custom'>My Level</Level>);
        expect(component.hasClass('level')).toBe(true);
        expect(component.hasClass('is-mobile')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a nav with .level and custom classNames', () => {
        const component = shallow(<Level className='custom'><span>Any Content</span></Level>);
        expect(component.hasClass('level')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});