import React from 'react';
import { shallow } from 'enzyme';

import { HeroFooter } from './../../../src/layout/Hero/HeroFooter';

describe('HeroFooter', () => {
    it('should render a footer with .hero-foot', () => {
        const component = shallow(<HeroFooter>Any Content</HeroFooter>);
        expect(component.contains(<footer className='hero-foot'>Any Content</footer>)).toBe(true);
    });

    it('should render a div with .hero-foot', () => {
        const component = shallow(<HeroFooter tag='div'>Any Content</HeroFooter>);
        expect(component.contains(<div className='hero-foot'>Any Content</div>)).toBe(true);
    });

    it('should render a footer with .hero-foot', () => {
        const component = shallow(<HeroFooter>Any Content</HeroFooter>);
        expect(component.contains(<footer className='hero-foot'>Any Content</footer>)).toBe(true);
    });

    it('should render a footer with .hero-foot and custom classNames', () => {
        const component = shallow(<HeroFooter className='custom loader' />);
        expect(component.hasClass('hero-foot')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });
});