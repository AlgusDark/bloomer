import * as React from 'react';
import { shallow } from 'enzyme';

import { Container } from './../../src';

describe('Container', () => {
    it('should render a div with .container', () => {
        const container = shallow(<Container />);
        expect(container.contains(<div className='container' />)).toBe(true)
    });

    it('should render a div with .container.is-fluid', () => {
        const container = shallow(<Container isFluid />);
        expect(container.hasClass('container')).toBe(true);
        expect(container.hasClass('is-fluid')).toBe(true);
    });

    it('should render a div with .container with custom classNames', () => {
        const container = shallow(<Container isFluid className='custom loader' />);
        expect(container.hasClass('container')).toBe(true);
        expect(container.hasClass('is-fluid')).toBe(true);
        expect(container.hasClass('custom')).toBe(true);
        expect(container.hasClass('loader')).toBe(true);
    });

    it('should render a div with .container with children', () => {
        const children = (
            <div>
                <h1>Hello World!</h1>
                <p>This is a test :)</p>
            </div>
        );

        const shallowContainer = (
            <Container>
                {children}
            </Container>
        );
        const container = shallow(shallowContainer);
        expect(container.contains(children)).toEqual(true);
    })
});