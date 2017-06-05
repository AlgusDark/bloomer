import * as React from 'react';
import { shallow } from 'enzyme';

import { Image } from './../../src/elements/Image';

describe('Image', () => {
    it('should render a figure with .image', () => {
        const component = shallow(<Image>My Image</Image>);
        expect(component.contains(<figure className='image'>My Image</figure>)).toBe(true);
    });

    it('should render a figure with .image and Square modifiers', () => {
        const component = shallow(<Image isSize='16x16' />);
        expect(component.hasClass('image')).toBe(true);
        expect(component.hasClass('is-16x16')).toBe(true);
    });

    it('should render a figure with .image and Radio modifiers', () => {
        const component = shallow(<Image isRatio='3by2' />);
        expect(component.hasClass('image')).toBe(true);
        expect(component.hasClass('is-3by2')).toBe(true);
    });

    it('should render a figure with .image, modifiers and classNames', () => {
        const component = shallow(<Image isRatio='square' className='custom' />);
        expect(component.hasClass('image')).toBe(true);
        expect(component.hasClass('is-square')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a figure with .image and custom classNames', () => {
        const component = shallow(<Image className='custom' />);
        expect(component.hasClass('image')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});