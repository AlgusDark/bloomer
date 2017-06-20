import * as React from 'react';
import { shallow } from 'enzyme';

import { Icon } from './../../src/elements/Icon';

describe('Icon', () => {
    it('should render a span with .icon', () => {
        const component = shallow(<Icon>My Icon</Icon>);
        expect(component.contains(<span className='icon'>My Icon</span>)).toBe(true);
    });

    it('should render a span.icon with span.fa.fa-home', () => {
        const component = shallow(<Icon tag='i' icon='home' />);
        expect(component.contains(
            <span className='icon'>
                <i className='fa fa-home' aria-hidden="true">
                </i>
            </span>
        )).toBe(true);
    });

    it('should render a span.icon with span.fa.fa-home', () => {
        const component = shallow(<Icon icon='home' />);
        expect(component.contains(
            <span className='icon'>
                <span className='fa fa-home' aria-hidden="true">
                </span>
            </span>
        )).toBe(true);
    });

    it('should render a span with .icon and modifiers', () => {
        const component = shallow(<Icon isAlign='left'>My Icon</Icon>);
        expect(component.hasClass('icon')).toBe(true);
        expect(component.hasClass('is-left')).toBe(true);
    });

    it('should render a span with .icon, modifiers and classNames', () => {
        const component = shallow(<Icon isSize='large' className='custom'>My Icon</Icon>);
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