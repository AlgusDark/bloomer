import * as React from 'react';
import { shallow } from 'enzyme';

import { Ellipsis } from './../../../src/components/Pagination/Ellipsis';

describe('Ellipsis', () => {
    it('should render a span with .pagination-ellipsis', () => {
        const component = shallow(<Ellipsis>My Ellipsis</Ellipsis>);
        expect(component.contains(<span className='pagination-ellipsis'>&amp;hellip;</span>)).toBe(true);
    });

    it('should render a div with .pagination-ellipsis', () => {
        const component = shallow(<Ellipsis tag='div'>My Ellipsis</Ellipsis>);
        expect(component.contains(<div className='pagination-ellipsis'>&amp;hellip;</div>)).toBe(true);
    });

    it('should render a span with .pagination-ellipsis with modifiers', () => {
        const component = shallow(<Ellipsis isActive isFocused className='custom'/>);
        expect(component.hasClass('pagination-ellipsis')).toBe(true);
        expect(component.hasClass('is-active')).toBe(true);
        expect(component.hasClass('is-focused')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a span with .pagination-ellipsis with modifiers and custom classNames', () => {
        const component = shallow(<Ellipsis isActive className='custom'/>);
        expect(component.hasClass('pagination-ellipsis')).toBe(true);
        expect(component.hasClass('is-active')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a span with .pagination-ellipsis and custom classNames', () => {
        const component = shallow(<Ellipsis className='custom'/>);
        expect(component.hasClass('pagination-ellipsis')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});