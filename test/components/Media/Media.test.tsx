import React from 'react';
import { shallow } from 'enzyme';

import { Media } from './../../../src/components/Media/Media';

describe('Media', () => {
    it('should render an article with .media', () => {
        const component = shallow(<Media>My Media</Media>);
        expect(component.contains(<article className='media'>My Media</article>)).toBe(true);
    });

    it('should render an aside with .media', () => {
        const component = shallow(<Media tag='aside'>My Media</Media>);
        expect(component.contains(<aside className='media'>My Media</aside>)).toBe(true);
    });

     it('should render an article with .media and modifiers', () => {
        const component = shallow(<Media isSize='large'><span>Any Content</span></Media>);
        expect(component.hasClass('media')).toBe(true);
        expect(component.hasClass('is-large')).toBe(true);
    });

     it('should render an article with .media, modifiers and custom classNames', () => {
        const component = shallow(<Media isSize='large' className='custom'><span>Any Content</span></Media>);
        expect(component.hasClass('media')).toBe(true);
        expect(component.hasClass('is-large')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render an article with .media and custom classNames', () => {
        const component = shallow(<Media className='custom'><span>Any Content</span></Media>);
        expect(component.hasClass('media')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});