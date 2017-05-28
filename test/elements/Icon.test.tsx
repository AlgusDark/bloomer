import * as React from 'react';
import { shallow } from 'enzyme';

import { Icon } from './../../src/elements/Icon';

describe('Icon', () => {
    it('should render a span with .icon', () => {
        const component = shallow(<Icon>My Icon</Icon>);
        expect(component.contains(<span className='icon'>My Icon</span>)).toBe(true);
    });

    it('should render a span with .icon and modifiers', () => {
        const component = shallow(<Icon isLeft isRight>My Icon</Icon>);
        expect(component.hasClass('icon')).toBe(true);
        expect(component.hasClass('is-left')).toBe(true);
        expect(component.hasClass('is-right')).toBe(true);
    });

    it('should render a span with .icon, modifiers and classNames', () => {
        const component = shallow(<Icon isLarge className='custom'>My Icon</Icon>);
        expect(component.hasClass('icon')).toBe(true);
        expect(component.hasClass('is-large')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a span with .icon and custom classNames', () => {
        const component = shallow(<Icon className='custom'>My Icon</Icon>);
        expect(component.hasClass('icon')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});