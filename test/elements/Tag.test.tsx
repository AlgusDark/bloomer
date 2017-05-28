import * as React from 'react';
import { shallow } from 'enzyme';

import { Tag } from './../../src/elements/Tag';

describe('Tag', () => {
    it('should render a span with .tag', () => {
        const component = shallow(<Tag>My Tag</Tag>);
        expect(component.contains(<span className='tag'>My Tag</span>)).toBe(true);
    });

    it('should render a span with .tag and modifiers', () => {
        const component = shallow(<Tag isBlack isMedium isLarge>My Tag</Tag>);
        expect(component.hasClass('tag')).toBe(true);
        expect(component.hasClass('is-black')).toBe(true);
        expect(component.hasClass('is-medium')).toBe(true);
        expect(component.hasClass('is-large')).toBe(true);
    });

    it('should render a span with .tag, modifiers and custom classNames', () => {
        const component = shallow(<Tag isPrimary className='custom'><span>Any Content</span></Tag>);
        expect(component.hasClass('tag')).toBe(true);
        expect(component.hasClass('is-primary')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a span with .tag and custom classNames', () => {
        const component = shallow(<Tag className='custom'><span>Any Content</span></Tag>);
        expect(component.hasClass('tag')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});