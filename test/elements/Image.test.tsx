import * as React from 'react';
import { shallow } from 'enzyme';

import { Image } from './../../src/elements/Image';

describe('Image', () => {
    it('should render a figure with .image', () => {
        const component = shallow(<Image>My Image</Image>);
        expect(component.contains(<figure className='image'>My Image</figure>)).toBe(true);
    });

    it('should render a figure with .image and Square modifiers', () => {
        const component = shallow(
            <Image
                is16x16
                is24x24
                is32x32
                is48x48
                is64x64
                is96x96
                is128x128
            />
        );
        expect(component.hasClass('image')).toBe(true);
        expect(component.hasClass('is-16x16')).toBe(true);
        expect(component.hasClass('is-24x24')).toBe(true);
        expect(component.hasClass('is-32x32')).toBe(true);
        expect(component.hasClass('is-48x48')).toBe(true);
        expect(component.hasClass('is-64x64')).toBe(true);
        expect(component.hasClass('is-96x96')).toBe(true);
        expect(component.hasClass('is-128x128')).toBe(true);
    });

    it('should render a figure with .image and Radio modifiers', () => {
        const component = shallow(
            <Image
                isSquare
                is1by1
                is4by3
                is3by2
                is16by9
                is2by1
            />
        );
        expect(component.hasClass('image')).toBe(true);
        expect(component.hasClass('is-square')).toBe(true);
        expect(component.hasClass('is-1by1')).toBe(true);
        expect(component.hasClass('is-4by3')).toBe(true);
        expect(component.hasClass('is-3by2')).toBe(true);
        expect(component.hasClass('is-16by9')).toBe(true);
        expect(component.hasClass('is-2by1')).toBe(true);
    });

    it('should render a figure with .image, modifiers and classNames', () => {
        const component = shallow(<Image isSquare className='custom' />);
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