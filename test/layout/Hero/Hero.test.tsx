import React from 'react';
import { shallow } from 'enzyme';

import { Hero } from './../../../src/layout/Hero/Hero';

describe('Hero', () => {
    it('should render a section with .hero', () => {
        const container = shallow(<Hero>My Hero</Hero>);
        expect(container.contains(<section className='hero'>My Hero</section>)).toBe(true)
    });

    it('should render a div with .hero', () => {
        const container = shallow(<Hero tag='div'>My Hero</Hero>);
        expect(container.contains(<div className='hero'>My Hero</div>)).toBe(true)
    });

    it('should render a section with .hero with modifiers', () => {
        const container = shallow(<Hero isBold isFullHeight />);
        expect(container.hasClass('hero')).toBe(true);
        expect(container.hasClass('is-bold')).toBe(true);
        expect(container.hasClass('is-fullheight')).toBe(true);
    });

    it('should render a section with .hero and color modifiers', () => {
        const container = shallow(<Hero isBold isFullHeight isColor='light' />);
        expect(container.hasClass('hero')).toBe(true);
        expect(container.hasClass('is-bold')).toBe(true);
        expect(container.hasClass('is-fullheight')).toBe(true);
        expect(container.hasClass('is-light')).toBe(true);
    });

    it('should render a section with .hero and size modifiers', () => {
        const container = shallow(<Hero isBold isFullHeight isSize='medium' />);
        expect(container.hasClass('hero')).toBe(true);
        expect(container.hasClass('is-bold')).toBe(true);
        expect(container.hasClass('is-fullheight')).toBe(true);
        expect(container.hasClass('is-medium')).toBe(true);
    });

    it('should render a section with .hero, modifiers and custom classNames', () => {
        const container = shallow(<Hero isBold className='custom loader' />);
        expect(container.hasClass('hero')).toBe(true);
        expect(container.hasClass('is-bold')).toBe(true);
        expect(container.hasClass('custom')).toBe(true);
        expect(container.hasClass('loader')).toBe(true);
    });

    it('should render a section with .hero and custom classNames', () => {
        const container = shallow(<Hero className='custom loader' />);
        expect(container.hasClass('hero')).toBe(true);
        expect(container.hasClass('custom')).toBe(true);
        expect(container.hasClass('loader')).toBe(true);
    });
});