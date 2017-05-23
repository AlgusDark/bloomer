import * as React from 'react';
import { shallow } from 'enzyme';

import { Container } from './../../src';

describe('Container', () => {
    it('should render a div with .container', () => {
        const container = shallow(<Container>My Container</Container>);
        expect(container.contains(<div className='container'>My Container</div>)).toBe(true)
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
});