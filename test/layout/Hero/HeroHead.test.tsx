import * as React from 'react';
import { shallow } from 'enzyme';

import { HeroHead } from './../../../src/layout/Hero/HeroHead';

describe('HeroHead', () => {
    it('should render a div with .hero-head', () => {
        const component = shallow(<HeroHead>Any Content</HeroHead>);
        expect(component.contains(<div className='hero-head'>Any Content</div>)).toBe(true);
    });

    it('should render a div with .hero-head and custom classNames', () => {
        const component = shallow(<HeroHead className='custom loader' />);
        expect(component.hasClass('hero-head')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });
});