import * as React from 'react';
import { shallow } from 'enzyme';

import { Button } from './../../src';

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

    it('should render an anchor with .button', () => {
        const component = shallow(<Button href='#' />);
        expect(component.contains(<a role='button' href='#' className='button' />)).toBe(true);
    });

    it('should render a button with .button', () => {
        const component = shallow(<Button />);
        expect(component.contains(<button type='button' className='button' />)).toBe(true);
    });

    it('should render a button with .button and custom classNames', () => {
        const component = shallow(<Button className='my-custom-class loader' />);
        expect(component.hasClass('button')).toBe(true);
        expect(component.hasClass('my-custom-class')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });

    it('should render a button with .button with modifiers', () => {
        const component = shallow(<Button isBlack isFullWidth isOutlined />);
        expect(component.hasClass('button')).toBe(true);
        expect(component.hasClass('is-black')).toBe(true);
        expect(component.hasClass('is-fullwidth')).toBe(true);
        expect(component.hasClass('is-outlined')).toBe(true);
    });
});