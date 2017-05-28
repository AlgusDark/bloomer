import * as React from 'react';
import { shallow } from 'enzyme';

import { Button } from './../../src/elements/Button';

describe('Button', () => {
    it('should render a custom component with Button props', () => {
        const customComponent = (props) => (
            <div>
                My Button <a {...props} />
            </div>
        );

        const customComponentRendered = (
            <div>
                My Button <a href='#' className='button is-loading' />
            </div>
        );

        const component = shallow(<Button href='#' isLoading render={customComponent} />);
        expect(component.contains(customComponentRendered)).toBe(true);
    });

    it('should render an anchor with .button:disabled', () => {
        const component = shallow(<Button href='#' disabled />);
        expect(component.contains(<a role='button' href='#' className='button' disabled />)).toBe(true);
    });

    it('should render an anchor with .button', () => {
        const component = shallow(<Button href='#' />);
        expect(component.contains(<a role='button' href='#' className='button' />)).toBe(true);
    });

    it('should render an anchor with .button with modifiers', () => {
        const component = shallow(<Button href='#' isLink
            isOutlined
            isInverted />);
        expect(component.is('a')).toBe(true);
        expect(component.hasClass('button')).toBe(true);
        expect(component.hasClass('is-link')).toBe(true);
        expect(component.hasClass('is-outlined')).toBe(true);
        expect(component.hasClass('is-inverted')).toBe(true);
    });

    it('should render an anchor with .button and custom classNames', () => {
        const component = shallow(<Button href='#' isLink className='custom loader' />);
        expect(component.is('a')).toBe(true);
        expect(component.hasClass('button')).toBe(true);
        expect(component.hasClass('is-link')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });

    it('should render a button with .button', () => {
        const component = shallow(<Button />);
        expect(component.contains(<button type='button' className='button' />)).toBe(true);
    });

    it('should render a button with .button:disabled', () => {
        const component = shallow(<Button disabled />);
        expect(component.contains(<button type='button' className='button' disabled />)).toBe(true);
    });

    it('should render a button with .button with modifiers', () => {
        const component = shallow(
            <Button isLink
                isOutlined
                isInverted
                isStatic />
        );
        expect(component.is('button')).toBe(true);
        expect(component.hasClass('button')).toBe(true);
        expect(component.hasClass('is-link')).toBe(true);
        expect(component.hasClass('is-outlined')).toBe(true);
        expect(component.hasClass('is-inverted')).toBe(true);
    });

    it('should render a button with .button, modifiers and custom classNames', () => {
        const component = shallow(<Button isLink className='custom loader' />);
        expect(component.is('button')).toBe(true);
        expect(component.hasClass('button')).toBe(true);
        expect(component.hasClass('is-link')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });

    it('should render a button with .button and custom classNames', () => {
        const component = shallow(<Button className='custom loader' />);
        expect(component.is('button')).toBe(true);
        expect(component.hasClass('button')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });
});