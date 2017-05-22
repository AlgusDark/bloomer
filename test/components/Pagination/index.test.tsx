import * as React from 'react';
import { shallow } from 'enzyme';

import { Pagination } from './../../../src/components/Pagination';

describe('Pagination', () => {
    it('should render a nav with .pagination', () => {
        const component = shallow(<Pagination>My Pagination</Pagination>);
        expect(component.contains(<nav className='pagination'>My Pagination</nav>)).toBe(true);
    });

    it('should render a nav with .pagination and modifiers', () => {
        const component = shallow(<Pagination isMedium isCentered>My Pagination</Pagination>);
        expect(component.hasClass('pagination')).toBe(true);
        expect(component.hasClass('is-medium')).toBe(true);
        expect(component.hasClass('is-centered')).toBe(true);
    });

    it('should render a nav with .pagination and custom classes', () => {
        const component = shallow(<Pagination isMedium className='custom'><span>Any Content</span></Pagination>);
        expect(component.hasClass('pagination')).toBe(true);
        expect(component.hasClass('is-medium')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});