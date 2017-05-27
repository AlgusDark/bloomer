import * as React from 'react';
import { shallow } from 'enzyme';

import { HeroBody } from './../../../src/layout/Hero/HeroBody';

describe('HeroBody', () => {
    it('should render a div with .hero-body', () => {
        const component = shallow(<HeroBody>Any Content</HeroBody>);
        expect(component.contains(<div className='hero-body'>Any Content</div>)).toBe(true);
    });

    it('should render a div with .hero-body and custom classNames', () => {
        const component = shallow(<HeroBody className='custom loader' />);
        expect(component.hasClass('hero-body')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });
});