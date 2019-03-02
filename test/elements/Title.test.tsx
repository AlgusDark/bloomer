import React from 'react';
import { shallow } from 'enzyme';

import { Title } from './../../src/elements/Title';

describe('Title', () => {
    it('should render a h1 with .title', () => {
        const component = shallow(<Title>My Title</Title>);
        expect(component.contains(<h1 className='title'>My Title</h1>)).toBe(true);
    });

    it('should render a h1 with .title.is-1', () => {
        const component = shallow(<Title isSize={1}>My Title</Title>);
        expect(component.contains(<h1 className='title is-1'>My Title</h1>)).toBe(true);
    });

    it('should render a h2 with .title.is-2', () => {
        const component = shallow(<Title tag='h2' isSize={2}>My Title</Title>);
        expect(component.contains(<h2 className='title is-2'>My Title</h2>)).toBe(true);
    });

    it('should render a h3 with .title.is-3', () => {
        const component = shallow(<Title tag='h3' isSize={3}>My Title</Title>);
        expect(component.contains(<h3 className='title is-3'>My Title</h3>)).toBe(true);
    });

    it('should render a h4 with .title.is-4', () => {
        const component = shallow(<Title tag='h4' isSize={4}>My Title</Title>);
        expect(component.contains(<h4 className='title is-4'>My Title</h4>)).toBe(true);
    });

    it('should render a h5 with .title.is-5', () => {
        const component = shallow(<Title tag='h5' isSize={5}>My Title</Title>);
        expect(component.contains(<h5 className='title is-5'>My Title</h5>)).toBe(true);
    });

    it('should render a h6 with .title.is-6', () => {
        const component = shallow(<Title tag='h6' isSize={6}>My Title</Title>);
        expect(component.contains(<h6 className='title is-6'>My Title</h6>)).toBe(true);
    });

    it('should render a h1 with .title.is-spaced', () => {
        const component = shallow(<Title isSpaced>My Title</Title>);
        expect(component.contains(<h1 className='title is-spaced'>My Title</h1>)).toBe(true);
    });

    it('should render a h1 with .title.is-1.is-spaced', () => {
        const component = shallow(<Title isSize={1} isSpaced>My Title</Title>);
        expect(component.hasClass('title')).toBe(true);
        expect(component.hasClass('is-1')).toBe(true);
        expect(component.hasClass('is-spaced')).toBe(true);
    });

     it('should render a paragraph with .title', () => {
        const component = shallow(<Title tag='p'>My Title</Title>);
        expect(component.contains(<p className='title'>My Title</p>)).toBe(true);
    });

    it('should render a paragraph with .title and modifiers', () => {
        const component = shallow(<Title tag='p' isSpaced isSize={3}>My Title</Title>);
        expect(component.is('p')).toBe(true);
        expect(component.hasClass('title')).toBe(true);
        expect(component.hasClass('is-spaced')).toBe(true);
        expect(component.hasClass('is-3')).toBe(true);
    });

    it('should render a paragraph with .title, modifiers and classNames', () => {
        const component = shallow(<Title tag='p' isSpaced isSize={3} className='custom'>My Title</Title>);
        expect(component.is('p')).toBe(true);
        expect(component.hasClass('title')).toBe(true);
        expect(component.hasClass('is-spaced')).toBe(true);
        expect(component.hasClass('is-3')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a h1 with .title, modifiers and classNames', () => {
        const component = shallow(<Title isSize={3} isSpaced className='custom'>My Title</Title>);
        expect(component.hasClass('title')).toBe(true);
        expect(component.hasClass('is-3')).toBe(true);
        expect(component.hasClass('is-spaced')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a h1 with .title, modifiers and classNames', () => {
        const component = shallow(<Title isSpaced className='custom'>My Title</Title>);
        expect(component.hasClass('title')).toBe(true);
        expect(component.hasClass('is-spaced')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});