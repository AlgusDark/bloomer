import * as React from 'react';
import { shallow } from 'enzyme';

import { HeroFoot } from './../../../src';

describe('HeroFoot', () => {
    it('should render a div with .hero-foot', () => {
        const component = shallow(<HeroFoot>Any Content</HeroFoot>);
        expect(component.contains(<div className='hero-foot'>Any Content</div>)).toBe(true);
    });

    it('should render a div with .hero-foot and custom classes', () => {
        const component = shallow(<HeroFoot className='custom loader' />);
        expect(component.hasClass('hero-foot')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });
});