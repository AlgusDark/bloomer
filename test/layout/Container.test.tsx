import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { Container } from './../../src/layout/Container';

describe('Container', () => {
    it('should render a div with .container', ()=>{
        const container = shallow(<Container />);
        expect(container.contains(<div className='container' />)).toBe(true)
    });

    it('should render a div with .container.is-fluid', () => {
        const container = shallow(<Container isFluid/>);
        expect(container.hasClass('container')).toBe(true);
        expect(container.hasClass('is-fluid')).toBe(true);
    })
});