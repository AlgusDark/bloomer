import * as React from 'react';
import { shallow } from 'enzyme';

import { Hero } from './../../../src';

describe('Hero', () => {
    it('should render a section with .hero', () => {
        const container = shallow(<Hero>My Hero</Hero>);
        expect(container.contains(<section className='hero'>My Hero</section>)).toBe(true)
    });

    it('should render a section with .hero with modifiers', () => {
        const container = shallow(<Hero isBlack isBold isFullHeight />);
        expect(container.hasClass('hero')).toBe(true);
        expect(container.hasClass('is-black')).toBe(true);
        expect(container.hasClass('is-bold')).toBe(true);
        expect(container.hasClass('is-fullheight')).toBe(true);
    });

    it('should render a section with .hero with custom classNames', () => {
        const container = shallow(<Hero isBold isBlack className='custom loader' />);
        expect(container.hasClass('hero')).toBe(true);
        expect(container.hasClass('is-black')).toBe(true);
        expect(container.hasClass('is-bold')).toBe(true);
        expect(container.hasClass('custom')).toBe(true);
        expect(container.hasClass('loader')).toBe(true);
    });
});