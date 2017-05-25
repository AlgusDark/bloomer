import * as React from 'react';
import { shallow } from 'enzyme';

import { Footer } from './../../src';

describe('Footer', () => {
    it('should render a footer with .footer', () => {
        const component = shallow(<Footer>Any Content</Footer>);
        expect(component.contains(<footer className='footer'>Any Content</footer>)).toBe(true);
    });

    it('should render a footer with .footer and custom classNames', () => {
        const component = shallow(<Footer className='custom loader' />);
        expect(component.hasClass('footer')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });
});