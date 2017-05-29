import * as React from 'react';
import { shallow } from 'enzyme';

import { Heading } from './../../src/elements/Heading';

describe('Heading', () => {
    it('should render an aside with .heading', () => {
        const component = shallow(<Heading>My Heading</Heading>);
        expect(component.contains(<p className='heading'>My Heading</p>)).toBe(true);
    });

    it('should render an aside with .heading and custom classNames', () => {
        const component = shallow(<Heading className='custom'><span>Any Content</span></Heading>);
        expect(component.hasClass('heading')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});