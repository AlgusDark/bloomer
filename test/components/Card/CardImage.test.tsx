import React from 'react';
import { shallow } from 'enzyme';

import { CardImage } from './../../../src/components/Card/CardImage';

describe('CardImage', () => {
    it('should render a div with .card-image', () => {
        const component = shallow(<CardImage>My CardImage</CardImage>);
        expect(component.contains(<div className='card-image'>My CardImage</div>)).toBe(true);
    });

    it('should render a p with .card-image', () => {
        const component = shallow(<CardImage tag='p'>My CardImage</CardImage>);
        expect(component.contains(<p className='card-image'>My CardImage</p>)).toBe(true);
    });

    it('should render a div with .card-image and custom classNames', () => {
        const component = shallow(<CardImage className='custom'><span>Any CardImage</span></CardImage>);
        expect(component.hasClass('card-image')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});