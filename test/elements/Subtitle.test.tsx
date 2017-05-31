import * as React from 'react';
import { shallow } from 'enzyme';

import { SubTitle } from './../../src/elements/SubTitle';

describe('SubTitle', () => {
    it('should render a h2 with .subtitle', () => {
        const component = shallow(<SubTitle>My Title</SubTitle>);
        expect(component.contains(<h2 className='subtitle'>My Title</h2>)).toBe(true);
    });

    it('should render a h2 with .subtitle.is-1', () => {
        const component = shallow(<SubTitle isSize={1}>My Title</SubTitle>);
        expect(component.contains(<h2 className='subtitle is-1'>My Title</h2>)).toBe(true);
    });

    it('should render a h2 with .subtitle.is-2', () => {
        const component = shallow(<SubTitle isHeading={1} isSize={2}>My Title</SubTitle>);
        expect(component.contains(<h1 className='subtitle is-2'>My Title</h1>)).toBe(true);
    });

    it('should render a h3 with .subtitle.is-3', () => {
        const component = shallow(<SubTitle isHeading={3} isSize={3}>My Title</SubTitle>);
        expect(component.contains(<h3 className='subtitle is-3'>My Title</h3>)).toBe(true);
    });

    it('should render a h4 with .subtitle.is-4', () => {
        const component = shallow(<SubTitle isHeading={4} isSize={4}>My Title</SubTitle>);
        expect(component.contains(<h4 className='subtitle is-4'>My Title</h4>)).toBe(true);
    });

    it('should render a h5 with .subtitle.is-5', () => {
        const component = shallow(<SubTitle isHeading={5} isSize={5}>My Title</SubTitle>);
        expect(component.contains(<h5 className='subtitle is-5'>My Title</h5>)).toBe(true);
    });

    it('should render a h6 with .subtitle.is-6', () => {
        const component = shallow(<SubTitle isHeading={6} isSize={6}>My Title</SubTitle>);
        expect(component.contains(<h6 className='subtitle is-6'>My Title</h6>)).toBe(true);
    });

    it('should render a h2 with .subtitle.is-spaced', () => {
        const component = shallow(<SubTitle isSpaced>My Title</SubTitle>);
        expect(component.contains(<h2 className='subtitle is-spaced'>My Title</h2>)).toBe(true);
    });

    it('should render a h1 with .subtitle.is-1.is-spaced', () => {
        const component = shallow(<SubTitle isSize={1} isSpaced>My Title</SubTitle>);
        expect(component.hasClass('subtitle')).toBe(true);
        expect(component.hasClass('is-1')).toBe(true);
        expect(component.hasClass('is-spaced')).toBe(true);
    });

    it('should render a paragraph with .subtitle', () => {
        const component = shallow(<SubTitle isParagraph>My Title</SubTitle>);
        expect(component.contains(<p className='subtitle'>My Title</p>)).toBe(true);
    });

    it('should render a paragraph with .subtitle and modifiers', () => {
        const component = shallow(<SubTitle isParagraph isSpaced isSize={3}>My Title</SubTitle>);
        expect(component.is('p')).toBe(true);
        expect(component.hasClass('subtitle')).toBe(true);
        expect(component.hasClass('is-spaced')).toBe(true);
        expect(component.hasClass('is-3')).toBe(true);
    });

    it('should render a paragraph with .subtitle, modifiers and classNames', () => {
        const component = shallow(<SubTitle isParagraph isSpaced isSize={3} className='custom'>My Title</SubTitle>);
        expect(component.is('p')).toBe(true);
        expect(component.hasClass('subtitle')).toBe(true);
        expect(component.hasClass('is-spaced')).toBe(true);
        expect(component.hasClass('is-3')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a h1 with .subtitle, modifiers and classNames', () => {
        const component = shallow(<SubTitle isSize={1} isSpaced className='custom'>My Title</SubTitle>);
        expect(component.hasClass('subtitle')).toBe(true);
        expect(component.hasClass('is-1')).toBe(true);
        expect(component.hasClass('is-spaced')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a h1 with .subtitle, modifiers and classNames', () => {
        const component = shallow(<SubTitle isSpaced className='custom'>My Title</SubTitle>);
        expect(component.hasClass('subtitle')).toBe(true);
        expect(component.hasClass('is-spaced')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});